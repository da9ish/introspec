import { buildClientSchema, GraphQLObjectType } from "graphql";
import React from "react";
import { Box } from "../components/Box";
import { Link } from "../components/Link";

const Queries: React.FC = () => {
  const schemaData = window.localStorage.getItem('graphql-schema') || ""
  const graphQLSchema = buildClientSchema(JSON.parse(schemaData))

  const query = (graphQLSchema.getType('Query') as GraphQLObjectType)
  const queries = (graphQLSchema.getType('Query') as GraphQLObjectType)?.toConfig().fields

  return (
    <>
      <h2>{query.name}</h2>
      <p>{query.description}</p>
      <Box css={{display: 'flex', flexDirection: 'column'}}>
        {Object.keys(queries).map(query => <Link key={query} to={query}>{query}</Link>)}
      </Box>
    </>
  )
}

export default Queries