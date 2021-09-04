import { buildClientSchema, GraphQLObjectType } from "graphql";
import React from "react";
import { Box } from "../components/Box";
import { Link } from "../components/Link";

const Queries: React.FC = () => {
  const schemaData = window.localStorage.getItem('graphql-schema') || ""
  const graphQLSchema = buildClientSchema(JSON.parse(schemaData))

  const queries = (graphQLSchema.getType('Query') as GraphQLObjectType)?.toConfig().fields

  return (
    <>
      <h2>Queries</h2>
      <Box css={{display: 'flex', flexDirection: 'column'}}>
        {Object.keys(queries).map(query => <Link key={query} to={query}>{query}</Link>)}
      </Box>
    </>
  )
}

export default Queries