import { buildClientSchema, GraphQLObjectType } from "graphql";
import React from "react";
import { useNavigate } from "react-router";
import { Box } from "../components/Box";
import { Card } from "../components/Card";

const Queries: React.FC = () => {
  const navigate = useNavigate()
  const schemaData = window.localStorage.getItem('graphql-schema') || ""
  const graphQLSchema = buildClientSchema(JSON.parse(schemaData))

  const query = (graphQLSchema.getType('Query') as GraphQLObjectType)
  const queries = (graphQLSchema.getType('Query') as GraphQLObjectType)?.toConfig().fields

  return (
    <>
      <h2>{query.name}</h2>
      <p>{query.description}</p>
      <Box css={{display: 'flex', flexDirection: 'column'}}>
        {Object.keys(queries).map(query => (
          <Card key={query} onClick={() => navigate(query)} css={{flexDirection: 'column', alignItems: 'flex-start'}}>
            <h4>{query}</h4>
            <p>{queries[query].description}</p>
          </Card>
        ))}
      </Box>
    </>
  )
}

export default Queries