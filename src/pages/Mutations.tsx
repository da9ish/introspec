import { buildClientSchema, GraphQLObjectType } from "graphql";
import React from "react";
import { useNavigate } from "react-router";
import { Box } from "../components/Box";
import { Card } from "../components/Card";

const Mutations: React.FC = () => {
  const navigate = useNavigate()
  const schemaData = window.localStorage.getItem('graphql-schema') || ""
  const graphQLSchema = buildClientSchema(JSON.parse(schemaData))

  const mutation = (graphQLSchema.getType('Mutation') as GraphQLObjectType)
  const mutations = (graphQLSchema.getType('Mutation') as GraphQLObjectType)?.toConfig().fields

  return (
    <>
      <h2>{mutation.name}</h2>
      <p>{mutation.description}</p>
      <Box css={{display: 'flex', flexDirection: 'column'}}>
        {Object.keys(mutations).map(mutation => (
          <Card key={mutation} onClick={() => navigate(mutation)} css={{flexDirection: 'column', alignItems: 'flex-start'}}>
            <h4>{mutation}</h4>
            <p>{mutations[mutation].description}</p>
          </Card>
        ))}
      </Box>
    </>
  )
}

export default Mutations