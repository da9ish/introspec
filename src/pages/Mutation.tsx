import { buildClientSchema, GraphQLEnumType, GraphQLEnumValue, GraphQLField, GraphQLInputObjectType, GraphQLObjectType, GraphQLUnionType } from "graphql";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box } from "../components/Box";
import Tag from "../components/private/Tag";
import pascalcase from "pascalcase";
import Codeblock from "../components/Codeblock";

const Mutation: React.FC = () => {
  const {mutationName} = useParams()
  const schemaData = window.localStorage.getItem('graphql-schema') || ""
  const graphQLSchema = buildClientSchema(JSON.parse(schemaData))

  const [fields, setFields] = useState<Array<GraphQLObjectType | GraphQLEnumValue | GraphQLField<any, any>>>([])

  const mutation = (graphQLSchema.getMutationType() as GraphQLObjectType).toConfig().fields[mutationName]

  useEffect(() => {
    if (mutation.type instanceof GraphQLObjectType || mutation.type instanceof GraphQLInputObjectType) {
      setFields(Object.values(mutation.type.getFields()))
    } else if (mutation.type instanceof GraphQLEnumType){
      setFields(mutation.type.getValues())
    } else if (mutation.type instanceof GraphQLUnionType) {
      setFields(mutation.type.getTypes())
    }
  }, [])

  return (
    <>
      <h2>{pascalcase(mutationName)} <Tag name="node">{mutationName}</Tag></h2>
      <p>{mutation?.description || 'No description'}</p>
      {mutation?.args && 
        <>
          <h3>Arguments</h3>
          {Object.keys(mutation.args).map(arg => (
            <Box>
              <Box css={{display: 'flex', alignItems: 'center'}}>
                <Box as="code" css={{marginRight: '8px'}}>{arg}:</Box>
                {mutation.args && <Tag name="arg" urlParam={(mutation.args[arg].type as any).name}>{mutation.args[arg].type.toJSON()}</Tag>}
              </Box>
              <p>{mutation.args?.[arg].description}</p>
            </Box>
          ))}
        </>
      }
      {!!fields.length && 
        <>
          <h3>Fields</h3>
          {fields.map(field => (
            <Box>
              <Box css={{display: 'flex', alignItems: 'center'}}>
                <Box as="code" css={{marginRight: '8px'}}>{field.name}:</Box>
                {('type' in field) && <Tag name="arg" urlParam={(field.type as any).name}>{field.type.toJSON()}</Tag>}
              </Box>
              <p>{field.description}</p>
            </Box>
          ))}
        </>
      }

      {!!fields.length && 
        <>
          <h3>Example</h3>
          <Codeblock code={`${mutationName}${mutation?.args && `(${Object.keys(mutation.args).map(arg => (`${arg}: ${mutation.args?.[arg].type.toJSON()}`)).join(", ")})`} {\n${fields && fields.map(node => (`  ${node.name}${'type' in node ? ':' : ''} ${'type' in node ? node.type.toJSON() : ''}`)).join("\n")}\n}`} />
        </>
      }
    </>
  )
}

export default Mutation