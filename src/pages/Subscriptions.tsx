import { buildClientSchema, GraphQLObjectType } from "graphql";
import React from "react";
import { useNavigate } from "react-router";
import { Box } from "../components/Box";
import { Card } from "../components/Card";

const Subscriptions: React.FC = () => {
  const navigate = useNavigate()
  const schemaData = JSON.parse(window.localStorage.getItem('graphql-schema') || '{}')
  const graphQLSchema = buildClientSchema(schemaData)

  const subscription = (graphQLSchema.getType('Subscription') as GraphQLObjectType)
  const subscriptions = (graphQLSchema.getType('Subscription') as GraphQLObjectType)?.toConfig().fields || {}

  return (
    <>
      <h2>{subscription?.name}</h2>
      <p>{subscription?.description}</p>
      <Box css={{display: 'flex', flexDirection: 'column'}}>
        {Object.keys(subscriptions).map(subscription => (
          <Card key={subscription} onClick={() => navigate(subscription)} css={{flexDirection: 'column', alignItems: 'flex-start'}}>
            <h4>{subscription}</h4>
            <p>{subscriptions[subscription].description}</p>
          </Card>
        ))}
      </Box>
    </>
  )
}

export default Subscriptions