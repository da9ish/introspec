import { buildClientSchema, GraphQLObjectType } from 'graphql'
import fuzzysort from 'fuzzysort'
import pascalcase from 'pascalcase'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

import Box from '../components/Box'
import Flex from '../components/Flex'
import Tag from '../components/private/Tag'
import Searchbar from '../components/Searchbar'

const Mutations: React.FC = () => {
  const navigate = useNavigate()
  const schemaData = JSON.parse(window.localStorage.getItem('graphql-schema') || '{}')
  const graphQLSchema = buildClientSchema(schemaData)
  const [ searchText, setSearchText ] = useState('')

  const mutation = (graphQLSchema.getType('Mutation') as GraphQLObjectType)
  const mutations = (graphQLSchema.getType('Mutation') as GraphQLObjectType)?.toConfig().fields || {}

  const matches = fuzzysort.go(searchText, Object.keys(mutations)).map((match) => match.target)

  return (
    <Box css={{ flexGrow: 1, padding: '0 32px', overflow: 'auto' }}>
      <h2>Mutations</h2>
      <p>{mutation?.description}</p>
      <Box css={{ display: 'flex', flexDirection: 'column' }}>
        <Searchbar value={searchText} onChange={(value) => setSearchText(value)} />
        {Object.keys(mutations || {}).filter((key) => (searchText ? matches.includes(key) : key)).map((mutation) => (
          <Flex key={mutation} alignItems="center" justifyContent="space-between">
            <Box onClick={() => navigate(mutation)}>
              <h4>{pascalcase(mutation)}</h4>
              <p>{mutations[mutation].description}</p>
            </Box>
            <Tag name="node">{mutation}</Tag>
          </Flex>
        ))}
      </Box>
    </Box>
  )
}

export default Mutations
