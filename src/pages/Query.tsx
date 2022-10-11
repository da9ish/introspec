import { buildClientSchema, GraphQLEnumType, GraphQLEnumValue, GraphQLField, GraphQLInputField, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLUnionType } from 'graphql'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import pascalcase from 'pascalcase'

import Box from '../components/Box'
import Tag from '../components/private/Tag'
import CodeBlock from '../components/CodeBlock'
import Flex from '../components/Flex'

const Query: React.FC = () => {
  const { queryName } = useParams()
  const schemaData = JSON.parse(window.localStorage.getItem('graphql-schema') || '{}')
  const graphQLSchema = buildClientSchema(schemaData)
  const [ fields, setFields ] = useState<Array<GraphQLField<any, any> | GraphQLEnumValue | GraphQLObjectType | GraphQLInputField>>([])

  const query = (graphQLSchema.getQueryType() as GraphQLObjectType).toConfig().fields[queryName!]

  useEffect(() => {
    if (query.type instanceof GraphQLNonNull) {
      if (query.type.ofType instanceof GraphQLList) {
        if (query.type.ofType.ofType instanceof GraphQLNonNull) {
          if (query.type.ofType.ofType.ofType instanceof GraphQLObjectType) {
            setFields(Object.values(query.type.ofType.ofType.ofType.getFields()))
          }
          if (query.type.ofType.ofType.ofType instanceof GraphQLEnumType) {
            setFields(query.type.ofType.ofType.ofType.getValues())
          }
          if (query.type.ofType.ofType.ofType instanceof GraphQLUnionType) {
            setFields(query.type.ofType.ofType.ofType.getTypes())
          }
          if (query.type.ofType.ofType.ofType instanceof GraphQLInputObjectType) {
            setFields(Object.values(query.type.ofType.ofType.ofType.getFields()))
          }
        }
        if (query.type.ofType.ofType instanceof GraphQLObjectType) {
          setFields(Object.values(query.type.ofType.ofType.getFields()))
        }
        if (query.type.ofType.ofType instanceof GraphQLEnumType) {
          setFields(query.type.ofType.ofType.getValues())
        }
        if (query.type.ofType.ofType instanceof GraphQLUnionType) {
          setFields(query.type.ofType.ofType.getTypes())
        }
        if (query.type.ofType.ofType instanceof GraphQLInputObjectType) {
          setFields(Object.values(query.type.ofType.ofType.getFields()))
        }
      }
      if (query.type.ofType instanceof GraphQLObjectType) {
        setFields(Object.values(query.type.ofType.getFields()))
      }
      if (query.type.ofType instanceof GraphQLEnumType) {
        setFields(query.type.ofType.getValues())
      }
      if (query.type.ofType instanceof GraphQLUnionType) {
        setFields(query.type.ofType.getTypes())
      }
      if (query.type.ofType instanceof GraphQLInputObjectType) {
        setFields(Object.values(query.type.ofType.getFields()))
      }
    } else {
      if (query.type instanceof GraphQLObjectType) {
        setFields(Object.values(query.type.getFields()))
      }
      if (query.type instanceof GraphQLEnumType) {
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
    <Box css={{ flexGrow: 1, padding: '0 32px', overflow: 'auto' }}>
      <Flex gap="lg" css={{ marginTop: '64px', marginBottom: '16px' }}>
        <Box as="h2" css={{ margin: 0 }}>{pascalcase(queryName!)}</Box>
        <Tag name="node">{queryName}</Tag>
      </Flex>
      <p>{query?.description || 'No description'}</p>
      {query?.args
        && (
        <>
          <h3>Arguments</h3>
          <Box as="table" css={{ borderCollapse: 'separate', borderSpacing: '0 16px' }}>
            <tbody>
              {Object.entries(query.args).map(([ name, arg ]) => {
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
                      <Box as="p" css={{ margin: 0 }}>{arg.description}</Box>
                    </Box>
                    <td>{query.args && <Tag name="arg" urlParam={argTypeName}>{arg.type.toJSON()}</Tag>}</td>
                  </Box>
                )
              })}
            </tbody>
          </Box>
        </>
        )}
      {fields
        && (
        <>
          <h3>Fields</h3>
          <Box as="table" css={{ borderCollapse: 'separate', borderSpacing: '0 16px' }}>
            <tbody>
              {fields.map((field) => {
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
                  <Box key={field.name} as="tr" css={{ margin: '12px 0' }}>
                    <Box as="td" css={{ width: '500px' }}>
                      <Box as="code" css={{ fontSize: '1.125rem', marginRight: '8px' }}>{field.name}</Box>
                      <Box as="p" css={{ margin: 0 }}>{field.description}</Box>
                    </Box>
                    <td>{'type' in field && <Tag name="field" urlParam={fieldTypeName}>{field.type.toJSON()}</Tag>}</td>
                  </Box>
                )
              })}
            </tbody>
          </Box>
        </>
        )}

      <h3>Example</h3>
      <CodeBlock code={`${queryName}${query?.args && `(${Object.keys(query.args).map((arg) => (`${arg}: ${query.args?.[arg].type.toJSON()}`)).join(', ')})`} {\n${fields && fields.map((field) => (`  ${field.name}${'type' in field ? ':' : ''} ${'type' in field ? field.type.toJSON() : ''}`)).join('\n')}\n}`} />
    </Box>
  )
}

export default Query
