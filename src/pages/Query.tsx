import { buildClientSchema, GraphQLObjectType } from "graphql";
import React from "react";
import { useParams } from "react-router";
import { Box } from "../components/Box";

const Query: React.FC = () => {
  const {queryName} = useParams()
  const schemaData = window.localStorage.getItem('graphql-schema') || ""
  const graphQLSchema = buildClientSchema(JSON.parse(schemaData))

  const query = (graphQLSchema.getQueryType() as GraphQLObjectType).toConfig().fields[queryName]
  const fields = (graphQLSchema.getType(queryName) as GraphQLObjectType)?.getFields()

  console.log(query.args);
  console.log(fields);

  return (
    <>
      <h2>{queryName}</h2>
      <p>{query?.description}</p>
      {query.args && 
        <>
          <h3>Arguments</h3>
          {Object.keys(query.args).map(arg => (
            <Box>
              <code>{arg}</code>
              <p>{query.args?.[arg].description}</p>
            </Box>
          ))}
        </>
      }
      {fields && 
        <>
          <h3>Fields</h3>
          {Object.keys(fields).map(field => (
          <Box>
            <code>{field}</code>
            <p>{fields[field].description}</p>
          </Box>
        ))}
        </>
      }
    </>
  )
}

export default Query