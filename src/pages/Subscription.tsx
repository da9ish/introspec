import { buildClientSchema, GraphQLObjectType } from "graphql";
import React from "react";
import { useParams } from "react-router";
import { Box } from "../components/Box";
import Tag from "../components/private/Tag";
import pascalcase from "pascalcase";
import Codeblock from "../components/Codeblock";

const Subscription: React.FC = () => {
  const {subscriptionName} = useParams()
  const schemaData = window.localStorage.getItem('graphql-schema') || ""
  const graphQLSchema = buildClientSchema(JSON.parse(schemaData))

  const subscription = (graphQLSchema.getSubscriptionType() as GraphQLObjectType).toConfig().fields[subscriptionName]
  const fields = Object.values((graphQLSchema.getType(subscriptionName) as GraphQLObjectType)?.getFields() || {})

  return (
    <>
      <h2>{pascalcase(subscriptionName)} <Tag name="node">{subscriptionName}</Tag></h2>
      <p>{subscription?.description || 'No description'}</p>
      {subscription?.args && 
        <>
          <h3>Arguments</h3>
          {Object.keys(subscription.args).map(arg => (
            <Box>
              <Box css={{display: 'flex', alignItems: 'center'}}>
                <Box as="code" css={{marginRight: '8px'}}>{arg}:</Box>
                {subscription.args && <Tag name="arg" urlParam={(subscription.args[arg].type as any).name}>{subscription.args[arg].type.toJSON()}</Tag>}
              </Box>
              <p>{subscription.args?.[arg].description}</p>
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
          <Codeblock code={`${subscriptionName}${subscription?.args && `(${Object.keys(subscription.args).map(arg => (`${arg}: ${subscription.args?.[arg].type.toJSON()}`)).join(", ")})`} {\n${fields && fields.map(field => (`  ${field.name}: ${field.type.toJSON()}`)).join("\n")}\n}`} />
        </>
      }
    </>
  )
}

export default Subscription