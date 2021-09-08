import { buildClientSchema, GraphQLObjectType } from "graphql";
import fuzzysort from 'fuzzysort'
import pascalcase from "pascalcase";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Box } from "../components/Box";
import Flex from "../components/Flex";
import Tag from "../components/private/Tag";
import Searchbar from "../components/Searchbar";

const Subscriptions: React.FC = () => {
  const navigate = useNavigate()
  const schemaData = JSON.parse(window.localStorage.getItem('graphql-schema') || '{}')
  const graphQLSchema = buildClientSchema(schemaData)
  const [searchText, setSearchText] = useState('')

  const subscription = (graphQLSchema.getType('Subscription') as GraphQLObjectType)
  const subscriptions = (graphQLSchema.getType('Subscription') as GraphQLObjectType)?.toConfig().fields || {}

  const matches = fuzzysort.go(searchText, Object.keys(subscriptions)).map(match => match.target)

  return (
    <Box css={{ flexGrow: 1, padding: '0 32px', overflow: 'auto' }}>
      <h2>Subscriptions</h2>
      <p>{subscription?.description}</p>
      <Box css={{display: 'flex', flexDirection: 'column'}}>
      <Searchbar value={searchText} onChange={(value) => setSearchText(value)} />
      {Object.keys(subscriptions || {}).filter(key => searchText ? matches.includes(key) : key).map(subscription => (
          <Flex key={subscription}  alignItems="center" justifyContent="space-between">
            <Box onClick={() => navigate(subscription)}>
              <h4>{pascalcase(subscription)}</h4>
              <p>{subscriptions[subscription].description}</p>
            </Box>
            <Tag name="node">{subscription}</Tag>
          </Flex>
        ))}
      </Box>
    </Box>
  )
}

export default Subscriptions