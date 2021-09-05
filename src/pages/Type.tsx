import { buildClientSchema, GraphQLEnumType, GraphQLEnumValue, GraphQLField, GraphQLInputObjectType, GraphQLObjectType, GraphQLUnionType } from "graphql";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box } from "../components/Box";
import Tag from "../components/private/Tag";
import pascalcase from "pascalcase";
import Codeblock from "../components/Codeblock";

const Type: React.FC = () => {
  const schemaData = window.localStorage.getItem('graphql-schema') || ""
  const graphQLSchema = buildClientSchema(JSON.parse(schemaData))

  const {typeName} = useParams()
  const [tagType, setTagType] = useState<string>('Field')
  const [nodes, setNodes] = useState<Array<GraphQLObjectType | GraphQLEnumValue | GraphQLField<any, any>>>([])

  const type = graphQLSchema.getType(typeName)

  useEffect(() => {
    if (type instanceof GraphQLObjectType || type instanceof GraphQLInputObjectType) {
      setTagType('Fields')
      setNodes(Object.values(type.getFields()))
    } else if (type instanceof GraphQLEnumType){
      setTagType('Values')
      setNodes(type.getValues())
    } else if (type instanceof GraphQLUnionType) {
      setTagType('Types')
      setNodes(type.getTypes())
    }
  }, [])

  return (
    <>
      <h2>{pascalcase(typeName)} <Tag name="type">{typeName}</Tag></h2>
      <p>{type?.description || 'No description'}</p>
      {!!nodes.length && 
        <>
          <h3>{tagType}</h3>
          {nodes.map(node => {
            return (
              <Box>
                <Box css={{display: 'flex', alignItems: 'center'}}>
                  <Box as="code" css={{marginRight: '8px'}}>{node.name}</Box>
                  {('type' in node) && <Tag name="arg" urlParam={(node.type as any).name}>{node.type.toJSON()}</Tag>}
                </Box>
                <p>{node.description}</p>
              </Box>
            )
          })}
        </>
      }
      {!!nodes.length &&
        <>
          <h3>Example</h3>
          <Codeblock>
            {`${typeName} {\n`}
            {nodes && `${nodes.map(node => (`  ${node.name}${'type' in node ? ':' : ''} ${'type' in node ? node.type.toJSON() : ''}`)).join("\n")}`}
            {`\n}`}
          </Codeblock>
        </>
      }
    </>
  )
}

export default Type