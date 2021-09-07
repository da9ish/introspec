import { buildClientSchema, GraphQLEnumType, GraphQLEnumValue, GraphQLField, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLScalarType, GraphQLUnionType } from "graphql";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box } from "../components/Box";
import Tag from "../components/private/Tag";
import pascalcase from "pascalcase";
import Codeblock from "../components/Codeblock";

const Query: React.FC = () => {
  const {queryName} = useParams()
  const schemaData = JSON.parse(window.localStorage.getItem('graphql-schema') || '{}')
  const graphQLSchema = buildClientSchema(schemaData)
  const [fields, setFields] = useState<Array<GraphQLField<any, any> | GraphQLEnumValue | GraphQLObjectType>>([])

  const query = (graphQLSchema.getQueryType() as GraphQLObjectType).toConfig().fields[queryName]

  useEffect(() => {
    if (query.type instanceof GraphQLNonNull) {
      if (query.type.ofType instanceof GraphQLObjectType){
        setFields(Object.values(query.type.ofType.getFields()))
      }
      if (query.type.ofType instanceof GraphQLEnumType){
        setFields(query.type.ofType.getValues())
      }
      if (query.type.ofType instanceof GraphQLUnionType) {
        setFields(query.type.ofType.getTypes())
      }
      if (query.type.ofType instanceof GraphQLInputObjectType) {
        setFields(Object.values(query.type.ofType.getFields()))
      }
    } else {
      if (query.type instanceof GraphQLObjectType){
        setFields(Object.values(query.type.getFields()))
      }
      if (query.type instanceof GraphQLEnumType){
        setFields(query.type.getValues())
      }
      if (query.type instanceof GraphQLUnionType) {
        setFields(query.type.getTypes())
      }
      if (query.type instanceof GraphQLInputObjectType) {
        setFields(Object.values(query.type.getFields()))
      }
    }
  }, [])

  return (
    <>
      <h2>{pascalcase(queryName)} <Tag name="node">{queryName}</Tag></h2>
      <p>{query?.description || 'No description'}</p>
      {query?.args && 
        <>
          <h3>Arguments</h3>
          {Object.entries(query.args).map(([name, arg]) => {
            const argType: any = ('type' in arg) ? arg.type : null
            let argTypeName = ''
            if (argType instanceof GraphQLNonNull) {
              if (argType.ofType instanceof GraphQLList) {
                if (argType.ofType.ofType instanceof GraphQLNonNull) {
                  argTypeName = (argType.ofType.ofType.ofType as any)?.name
                } else {
                  argTypeName = (argType.ofType.ofType as any)?.name
                }
              } else {
                argTypeName = (argType.ofType as any)?.name
              }
            } else {
              argTypeName = (argType as any)?.name
            }
            return (
              <Box>
                <Box css={{display: 'flex', alignItems: 'center'}}>
                  <Box as="code" css={{marginRight: '8px'}}>{name}:</Box>
                  {query.args && <Tag name="arg" urlParam={argTypeName}>{arg.type.toJSON()}</Tag>}
                </Box>
                <p>{arg.description}</p>
              </Box>
            )
          })}
        </>
      }
      {fields && 
        <>
          <h3>Fields</h3>
          {fields.map(field => {
            const fieldType: any = ('type' in field) ? field.type : null
            let fieldTypeName = ''
            if (fieldType instanceof GraphQLNonNull) {
              if (fieldType.ofType instanceof GraphQLList) {
                if (fieldType.ofType.ofType instanceof GraphQLNonNull) {
                  fieldTypeName = (fieldType.ofType.ofType.ofType as any)?.name
                } else {
                  fieldTypeName = (fieldType.ofType.ofType as any)?.name
                }
              } else {
                fieldTypeName = (fieldType.ofType as any)?.name
              }
            } else {
              fieldTypeName = (fieldType as any)?.name
            }

            return (
              <Box>
                <Box css={{display: 'flex', alignItems: 'center'}}>
                  <Box as="code" css={{marginRight: '8px'}}>{field.name}:</Box>
                  {'type' in field && <Tag name="field" urlParam={fieldTypeName}>{field.type.toJSON()}</Tag>}
                </Box>
                <p>{field.description}</p>
              </Box>
            )
          })}
        </>
      }

      <h3>Example</h3>
      <Codeblock code={`${queryName}${query?.args && `(${Object.keys(query.args).map(arg => (`${arg}: ${query.args?.[arg].type.toJSON()}`)).join(", ")})`} {\n${fields && fields.map(field => (`  ${field.name}${'type' in field ? ':' : ''} ${'type' in field ? field.type.toJSON() : ''}`)).join("\n")}\n}`} />
    </>
  )
}

export default Query