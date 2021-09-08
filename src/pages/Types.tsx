import { buildClientSchema } from "graphql";
import fuzzysort from 'fuzzysort'
import pascalcase from "pascalcase";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Box } from "../components/Box";
import Flex from "../components/Flex";
import Tag from "../components/private/Tag";
import Searchbar from "../components/Searchbar";

const Types: React.FC = () => {
  const navigate = useNavigate()
  const schemaData = JSON.parse(window.localStorage.getItem('graphql-schema') || '{}')
  const graphQLSchema = buildClientSchema(schemaData)
  const [searchText, setSearchText] = useState('')

  const types = graphQLSchema.getTypeMap() || {}

  const matches = fuzzysort.go(searchText, Object.keys(types)).map(match => match.target)


  return (
    <Box css={{ flexGrow: 1, padding: '0 32px', overflow: 'auto' }}>
      <h2>Types</h2>
      <Box css={{display: 'flex', flexDirection: 'column'}}>
      <Searchbar value={searchText} onChange={(value) => setSearchText(value)} />
      {Object.keys(types || {}).filter(key => searchText ? matches.includes(key) : key).map(type => (
          <Flex key={type}  alignItems="center" justifyContent="space-between">
            <Box onClick={() => navigate(type)}>
              <h4>{pascalcase(type)}</h4>
              <p>{types[type].description}</p>
            </Box>
            <Tag name="node">{type}</Tag>
          </Flex>
        ))}
      </Box>
    </Box>
  )
}

export default Types