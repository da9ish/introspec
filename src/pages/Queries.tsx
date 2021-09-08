import { buildClientSchema, GraphQLObjectType } from "graphql";
import fuzzysort from 'fuzzysort'
import pascalcase from "pascalcase";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Box } from "../components/Box";
import Flex from "../components/Flex";
import Tag from "../components/private/Tag";
import Searchbar from "../components/Searchbar";

const Queries: React.FC = () => {
  const navigate = useNavigate()
  const schemaData = JSON.parse(window.localStorage.getItem('graphql-schema') || '{}')
  const graphQLSchema = buildClientSchema(schemaData)
  const [searchText, setSearchText] = useState('')

  const query = (graphQLSchema.getType('Query') as GraphQLObjectType)
  const queries = (graphQLSchema.getType('Query') as GraphQLObjectType)?.toConfig().fields || {}

  const matches = fuzzysort.go(searchText, Object.keys(queries)).map(match => match.target)

  return (
    <Box css={{ flexGrow: 1, padding: '0 32px', overflow: 'auto' }}>
      <h2>Queries</h2>
      <p>{query?.description}</p>
      <Searchbar value={searchText} onChange={(value) => setSearchText(value)} />
      <Box css={{display: 'flex', flexDirection: 'column'}}>
        {Object.keys(queries || {}).filter(key => searchText ? matches.includes(key) : key).map(query => (
          <Flex key={query}  alignItems="center" justifyContent="space-between">
            <Box onClick={() => navigate(query)}>
              <h4>{pascalcase(query)}</h4>
              <p>{queries[query].description}</p>
            </Box>
            <Tag name="node">{query}</Tag>
          </Flex>
        ))}
      </Box>
    </Box>
  )
}

export default Queries