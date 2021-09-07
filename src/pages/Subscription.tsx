import { buildClientSchema, GraphQLEnumType, GraphQLEnumValue, GraphQLField, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLUnionType } from "graphql";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box } from "../components/Box";
import Tag from "../components/private/Tag";
import pascalcase from "pascalcase";
import Codeblock from "../components/Codeblock";

const Subscription: React.FC = () => {
  const {subscriptionName} = useParams()
  const schemaData = JSON.parse(window.localStorage.getItem('graphql-schema') || '{}')
  const graphQLSchema = buildClientSchema(schemaData)

  const [fields, setFields] = useState<Array<GraphQLObjectType | GraphQLEnumValue | GraphQLField<any, any>>>([])

  const subscription = (graphQLSchema.getSubscriptionType() as GraphQLObjectType).toConfig().fields[subscriptionName]
  
  useEffect(() => {
    if (subscription.type instanceof GraphQLNonNull) {
      if (subscription.type.ofType instanceof GraphQLObjectType){
        setFields(Object.values(subscription.type.ofType.getFields()))
      }
      if (subscription.type.ofType instanceof GraphQLEnumType){
        setFields(subscription.type.ofType.getValues())
      }
      if (subscription.type.ofType instanceof GraphQLUnionType) {
        setFields(subscription.type.ofType.getTypes())
      }
      if (subscription.type.ofType instanceof GraphQLInputObjectType) {
        setFields(Object.values(subscription.type.ofType.getFields()))
      }
    } else {
      if (subscription.type instanceof GraphQLObjectType){
        setFields(Object.values(subscription.type.getFields()))
      }
      if (subscription.type instanceof GraphQLEnumType){
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
      <h2>{pascalcase(subscriptionName)} <Tag name="node">{subscriptionName}</Tag></h2>
      <p>{subscription?.description || 'No description'}</p>
      {subscription?.args && 
        <>
          <h3>Arguments</h3>
          {Object.entries(subscription.args).map(([name, arg]) => {
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
                  {subscription.args && <Tag name="arg" urlParam={argTypeName}>{arg.type.toJSON()}</Tag>}
                </Box>
                <p>{arg.description}</p>
              </Box>
            )
          })}
        </>
      }
      {!!fields.length && 
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

      {!!fields.length && 
        <>
          <h3>Example</h3>
          <Codeblock code={`${subscriptionName}${subscription?.args && `(${Object.keys(subscription.args).map(arg => (`${arg}: ${subscription.args?.[arg].type.toJSON()}`)).join(", ")})`} {\n${fields && fields.map(field => (`  ${field.name}${'type' in field ? ':' : ''} ${'type' in field ? field.type.toJSON() : ''}`)).join("\n")}\n}`} />
        </>
      }
    </>
  )
}

export default Subscription