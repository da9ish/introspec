import { buildClientSchema, GraphQLEnumType, GraphQLEnumValue, GraphQLField, GraphQLInputField, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLUnionType } from 'graphql'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import pascalcase from 'pascalcase'

import Box from '../components/Box'
import Tag from '../components/private/Tag'
import CodeBlock from '../components/CodeBlock'

const Subscription: React.FC = () => {
  const { subscriptionName } = useParams()
  const schemaData = JSON.parse(window.localStorage.getItem('graphql-schema') || '{}')
  const graphQLSchema = buildClientSchema(schemaData)

  const [ fields, setFields ] = useState<Array<GraphQLObjectType | GraphQLEnumValue | GraphQLField<any, any> | GraphQLInputField>>([])

  const subscription = (graphQLSchema.getSubscriptionType() as GraphQLObjectType).toConfig().fields[subscriptionName!]

  useEffect(() => {
    if (subscription.type instanceof GraphQLNonNull) {
      if (subscription.type.ofType instanceof GraphQLList) {
        if (subscription.type.ofType.ofType instanceof GraphQLNonNull) {
          if (subscription.type.ofType.ofType.ofType instanceof GraphQLObjectType) {
            setFields(Object.values(subscription.type.ofType.ofType.ofType.getFields()))
          }
          if (subscription.type.ofType.ofType.ofType instanceof GraphQLEnumType) {
            setFields(subscription.type.ofType.ofType.ofType.getValues())
          }
          if (subscription.type.ofType.ofType.ofType instanceof GraphQLUnionType) {
            setFields(subscription.type.ofType.ofType.ofType.getTypes())
          }
          if (subscription.type.ofType.ofType.ofType instanceof GraphQLInputObjectType) {
            setFields(Object.values(subscription.type.ofType.ofType.ofType.getFields()))
          }
        }
        if (subscription.type.ofType.ofType instanceof GraphQLObjectType) {
          setFields(Object.values(subscription.type.ofType.ofType.getFields()))
        }
        if (subscription.type.ofType.ofType instanceof GraphQLEnumType) {
          setFields(subscription.type.ofType.ofType.getValues())
        }
        if (subscription.type.ofType.ofType instanceof GraphQLUnionType) {
          setFields(subscription.type.ofType.ofType.getTypes())
        }
        if (subscription.type.ofType.ofType instanceof GraphQLInputObjectType) {
          setFields(Object.values(subscription.type.ofType.ofType.getFields()))
        }
      }
      if (subscription.type.ofType instanceof GraphQLObjectType) {
        setFields(Object.values(subscription.type.ofType.getFields()))
      }
      if (subscription.type.ofType instanceof GraphQLEnumType) {
        setFields(subscription.type.ofType.getValues())
      }
      if (subscription.type.ofType instanceof GraphQLUnionType) {
        setFields(subscription.type.ofType.getTypes())
      }
      if (subscription.type.ofType instanceof GraphQLInputObjectType) {
        setFields(Object.values(subscription.type.ofType.getFields()))
      }
    } else {
      if (subscription.type instanceof GraphQLObjectType) {
        setFields(Object.values(subscription.type.getFields()))
      }
      if (subscription.type instanceof GraphQLEnumType) {
        setFields(subscription.type.getValues())
      }
      if (subscription.type instanceof GraphQLUnionType) {
        setFields(subscription.type.getTypes())
      }
      if (subscription.type instanceof GraphQLInputObjectType) {
        setFields(Object.values(subscription.type.getFields()))
      }
    }
  }, [])

  return (
    <>
      <h2>{pascalcase(subscriptionName!)} <Tag name="node">{subscriptionName}</Tag></h2>
      <p>{subscription?.description || 'No description'}</p>
      {subscription?.args
        && (
        <>
          <h3>Arguments</h3>
          <Box as="table" css={{ borderCollapse: 'separate', borderSpacing: '0 16px' }}>
            <tbody>
              {Object.entries(subscription.args).map(([ name, arg ]) => {
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
                    <td>{subscription.args && <Tag name="arg" urlParam={argTypeName}>{arg.type.toJSON()}</Tag>}</td>
                  </Box>
                )
              })}
            </tbody>
          </Box>
        </>
        )}
      {!!fields.length
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

      {!!fields.length
        && (
        <>
          <h3>Example</h3>
          <CodeBlock code={`${subscriptionName}${subscription?.args && `(${Object.keys(subscription.args).map((arg) => (`${arg}: ${subscription.args?.[arg].type.toJSON()}`)).join(', ')})`} {\n${fields && fields.map((field) => (`  ${field.name}${'type' in field ? ':' : ''} ${'type' in field ? field.type.toJSON() : ''}`)).join('\n')}\n}`} />
        </>
        )}
    </>
  )
}

export default Subscription
