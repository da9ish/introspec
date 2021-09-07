import {  buildClientSchema, GraphQLEnumType, GraphQLEnumValue, GraphQLField, GraphQLInputField, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLUnionType } from "graphql";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box } from "../components/Box";
import Tag from "../components/private/Tag";
import pascalcase from "pascalcase";
import Codeblock from "../components/Codeblock";

const Type: React.FC = () => {
  const schemaData = JSON.parse(window.localStorage.getItem('graphql-schema') || '{}')
  const graphQLSchema = buildClientSchema(schemaData)

  const {typeName} = useParams()
  const [tagType, setTagType] = useState<string>('Field')
  const [nodes, setNodes] = useState<Array<GraphQLObjectType | GraphQLEnumValue | GraphQLField<any, any> | GraphQLInputField>>([])

  const type = graphQLSchema.getType(typeName)

  useEffect(() => {
    if (type instanceof GraphQLNonNull) {
      if (type.ofType instanceof GraphQLObjectType){
        setNodes(Object.values(type.ofType.getFields()))
        setTagType('Field')
      }
      if (type.ofType instanceof GraphQLEnumType){
        setNodes(type.ofType.getValues())
        setTagType('Values')
      }
      if (type.ofType instanceof GraphQLUnionType) {
        setNodes(type.ofType.getTypes())
        setTagType('Types')
      }
      if (type.ofType instanceof GraphQLInputObjectType) {
        setNodes(Object.values(type.ofType.getFields()))
        setTagType('Field')
      }
    } else {
      if (type instanceof GraphQLObjectType){
        setNodes(Object.values(type.getFields()))
        setTagType('Field')
      }
      if (type instanceof GraphQLEnumType){
        setNodes(type.getValues())
        setTagType('Values')
      }
      if (type instanceof GraphQLUnionType) {
        setNodes(type.getTypes())
        setTagType('Types')
      }
      if (type instanceof GraphQLInputObjectType) {
        setNodes(Object.values(type.getFields()))
        setTagType('Field')
      }
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
            const nodeType: any = ('type' in node) ? node.type : null
            let nodeTypeName = ''
            if (nodeType instanceof GraphQLNonNull) {
              if (nodeType.ofType instanceof GraphQLList) {
                if (nodeType.ofType.ofType instanceof GraphQLNonNull) {
                  nodeTypeName = (nodeType.ofType.ofType.ofType as any)?.name
                } else {
                  nodeTypeName = (nodeType.ofType.ofType as any)?.name
                }
              } else {
                nodeTypeName = (nodeType.ofType as any)?.name
              }
            } else {
              nodeTypeName = (nodeType as any)?.name
            }

            return (
              <Box>
                <Box css={{display: 'flex', alignItems: 'center'}}>
                  <Box as="code" css={{marginRight: '8px'}}>{node.name}</Box>
                  {('type' in node) && <Tag name="arg" urlParam={nodeTypeName}>{node.type.toJSON()}</Tag>}
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
          <Codeblock code={`${typeName} {\n${nodes && `${nodes.map(node => (`  ${node.name}${'type' in node ? ':' : ''} ${'type' in node ? node.type.toJSON() : ''}`)).join("\n")}`}\n}`} />
        </>
      }
    </>
  )
}

export default Type