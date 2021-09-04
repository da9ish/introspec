import { buildClientSchema, getIntrospectionQuery, GraphQLSchema } from "graphql";
import React, { useEffect, useState } from "react";
import { Box } from "../components/Box";
import { Link } from "../components/Link";
import GraphQLContext from "../contexts/GraphQLContext";



const requestBody = {
  operationName: "IntrospectionQuery",
  query: getIntrospectionQuery()
};

const Documents: React.FC = () => {
  const schemaData = JSON.parse(window.localStorage.getItem('graphql-schema') || '')
  const [graphQLSchema, setGrqphQLSchema] = useState<GraphQLSchema | null>(buildClientSchema(schemaData))
  // const {projectId} = useParams()

  const fetchSchema = () => {
    fetch("https://api.spacex.land/graphql/", {
      headers: {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9",
        "content-type": "application/json",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site"
      },
      referrer: "http://localhost:3000",
      referrerPolicy: "strict-origin-when-cross-origin",
      mode: "cors",
      credentials: "omit",
      method: "POST", 
      body: JSON.stringify(requestBody)
    }).then(res => res.json()).then((res) => {
      window.localStorage.setItem('graphql-schema', JSON.stringify(res.data))
      setGrqphQLSchema(buildClientSchema(res.data))
    })
  }

  useEffect(() => {
    fetchSchema()
  }, [])

  return (
    <GraphQLContext.Provider value={{schema: graphQLSchema, reloadSchema: fetchSchema}}>
      <h2>SpaceX</h2>
      <p>Discover all the interesting details about capsules, cores, landpads, launches, missions, payloads, rockets, ships & much more. You could even check if Elon’s 🚗 Roadster has finally arrived to Mars!</p>
      <Box css={{display: 'flex', flexDirection: 'column'}}>
        <Link to="query">Query</Link>
        <Link to="mutation">Mutation</Link>
        <Link to="subscription">Subscription</Link>
        <Link to="type">Type</Link>
      </Box>
    </GraphQLContext.Provider>
  )
}

export default Documents