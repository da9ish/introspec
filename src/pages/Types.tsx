import { buildClientSchema } from "graphql";
import React from "react";
import { useNavigate } from "react-router";
import { Box } from "../components/Box";
import { Card } from "../components/Card";

const Types: React.FC = () => {
  const navigate = useNavigate()
  const schemaData = JSON.parse(window.localStorage.getItem('graphql-schema') || '{}')
  const graphQLSchema = buildClientSchema(schemaData)

  const types = graphQLSchema.getTypeMap() || {}

  return (
    <>
      <h2>Types</h2>
      <Box css={{display: 'flex', flexDirection: 'column'}}>
        {Object.keys(types).map(type => (
          <Card key={type} onClick={() => navigate(type)} css={{flexDirection: 'column', alignItems: 'flex-start'}}>
            <h4>{type}</h4>
            <p>{types[type].description}</p>
          </Card>
        ))}
      </Box>
    </>
  )
}

export default Types