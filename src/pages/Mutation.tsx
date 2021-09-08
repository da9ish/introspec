import {  buildClientSchema, GraphQLEnumType, GraphQLEnumValue, GraphQLField, GraphQLInputField, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLUnionType } from "graphql";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box } from "../components/Box";
import Tag from "../components/private/Tag";
import pascalcase from "pascalcase";
import Codeblock from "../components/Codeblock";
import Flex from "../components/Flex";

const Mutation: React.FC = () => {
  const {mutationName} = useParams()
  const schemaData = JSON.parse(window.localStorage.getItem('graphql-schema') || '{}')
  const graphQLSchema = buildClientSchema(schemaData)

  const [fields, setFields] = useState<Array<GraphQLObjectType | GraphQLEnumValue | GraphQLField<any, any> | GraphQLInputField>>([])

  const mutation = (graphQLSchema.getMutationType() as GraphQLObjectType).toConfig().fields[mutationName]

  useEffect(() => {
    if (mutation.type instanceof GraphQLNonNull) {
      if (mutation.type.ofType instanceof GraphQLList) {
        if (mutation.type.ofType.ofType instanceof GraphQLNonNull) {
          if (mutation.type.ofType.ofType.ofType instanceof GraphQLObjectType) {
            setFields(Object.values(mutation.type.ofType.ofType.ofType.getFields()))
          }
          if (mutation.type.ofType.ofType.ofType instanceof GraphQLEnumType){
            setFields(mutation.type.ofType.ofType.ofType.getValues())
          }
          if (mutation.type.ofType.ofType.ofType instanceof GraphQLUnionType) {
            setFields(mutation.type.ofType.ofType.ofType.getTypes())
          }
          if (mutation.type.ofType.ofType.ofType instanceof GraphQLInputObjectType) {
            setFields(Object.values(mutation.type.ofType.ofType.ofType.getFields()))
          }
        }
        if (mutation.type.ofType.ofType instanceof GraphQLObjectType) {
          setFields(Object.values(mutation.type.ofType.ofType.getFields()))
        }
        if (mutation.type.ofType.ofType instanceof GraphQLEnumType){
          setFields(mutation.type.ofType.ofType.getValues())
        }
        if (mutation.type.ofType.ofType instanceof GraphQLUnionType) {
          setFields(mutation.type.ofType.ofType.getTypes())
        }
        if (mutation.type.ofType.ofType instanceof GraphQLInputObjectType) {
          setFields(Object.values(mutation.type.ofType.ofType.getFields()))
        }
      }
      if (mutation.type.ofType instanceof GraphQLObjectType){
        setFields(Object.values(mutation.type.ofType.getFields()))
      }
      if (mutation.type.ofType instanceof GraphQLEnumType){
        setFields(mutation.type.ofType.getValues())
      }
      if (mutation.type.ofType instanceof GraphQLUnionType) {
        setFields(mutation.type.ofType.getTypes())
      }
      if (mutation.type.ofType instanceof GraphQLInputObjectType) {
        setFields(Object.values(mutation.type.ofType.getFields()))
      }
    } else {
      if (mutation.type instanceof GraphQLObjectType){
        setFields(Object.values(mutation.type.getFields()))
      }
      if (mutation.type instanceof GraphQLEnumType){
        setFields(mutation.type.getValues())
      }
      if (mutation.type instanceof GraphQLUnionType) {
        setFields(mutation.type.getTypes())
      }
      if (mutation.type instanceof GraphQLInputObjectType) {
        setFields(Object.values(mutation.type.getFields()))
      }
    }
  }, [])

  return (
    <Box css={{ flexGrow: 1, padding: '0 32px', overflow: 'auto' }}>
      <Flex gap="lg" css={{ marginTop: '64px', marginBottom: '16px' }}>
        <Box as="h2" css={{margin: 0}}>{pascalcase(mutationName)}</Box>
        <Tag name="node">{mutationName}</Tag>
      </Flex>
      {mutation?.args && 
        <>
          <h3>Arguments</h3>
          <Box as="table" css={{ borderCollapse: 'separate', borderSpacing: '0 16px' }}>
            <tbody>
              {Object.entries(mutation.args).map(([name, arg]) => {
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
                  <Box key={name} as="tr">
                    <Box as="td" css={{ width: '500px' }}>
                      <Box as="code" css={{ fontSize: '1.125rem', marginRight: '8px' }}>{name}</Box>
                      <Box as="p" css={{margin: 0}}>{arg.description}</Box>
                    </Box>
                    <td>{mutation.args && <Tag name="arg" urlParam={argTypeName}>{arg.type.toJSON()}</Tag>}</td>
                  </Box>
                )
              })}
            </tbody>
          </Box>
        </>
      }
      {!!fields.length && 
        <>
          <h3>Fields</h3>
          <Box as="table" css={{ borderCollapse: 'separate', borderSpacing: '0 16px' }}>
            <tbody>
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
                  <Box key={field.name} as="tr" css={{margin: '12px 0'}}>
                    <Box as="td" css={{ width: '500px' }}>
                      <Box as="code" css={{ fontSize: '1.125rem', marginRight: '8px' }}>{field.name}</Box>
                      <Box as="p" css={{margin: 0}}>{field.description}</Box>
                    </Box>
                    <td>{'type' in field && <Tag name="field" urlParam={fieldTypeName}>{field.type.toJSON()}</Tag>}</td>
                  </Box>
                )
              })}
            </tbody>
          </Box>
        </>
      }

      {!!fields.length && 
        <>
          <h3>Example</h3>
          <Codeblock code={`${mutationName}${mutation?.args && `(${Object.keys(mutation.args).map(arg => (`${arg}: ${mutation.args?.[arg].type.toJSON()}`)).join(", ")})`} {\n${fields && fields.map(node => (`  ${node.name}${'type' in node ? ':' : ''} ${'type' in node ? node.type.toJSON() : ''}`)).join("\n")}\n}`} />
        </>
      }
    </Box>
  )
}

export default Mutation