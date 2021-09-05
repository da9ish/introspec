import { buildClientSchema, getIntrospectionQuery, GraphQLSchema } from "graphql";
import React, { useEffect, useState } from "react";
import { Box } from "../components/Box";
import { Link } from "../components/Link";
import GraphQLContext from "../contexts/GraphQLContext";
import { ReactComponent as ArrowRight } from '../assets/icons/arrow-right.svg'
import { Card } from "../components/Card";
import { useNavigate } from "react-router";

const requestBody = {
  operationName: "IntrospectionQuery",
  query: getIntrospectionQuery()
};

const Documents: React.FC = () => {
  const navigate = useNavigate()
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
      <Card onClick={() => navigate('query')}>
        <Box css={{ flexGrow: 1 }}>
          <h4>Query</h4>
          <p>All your queries</p>
        </Box>
        <Box as={ArrowRight} css={{ color: '#BFBEB4' }} />
      </Card>
      <Card onClick={() => navigate('mutation')}>
        <Box css={{ flexGrow: 1 }}>
          <h4>Mutation</h4>
          <p>All your mutations</p>
        </Box>
        <Box as={ArrowRight} css={{ color: '#BFBEB4' }} />
      </Card>
      <Card onClick={() => navigate('subscription')}>
        <Box css={{ flexGrow: 1 }}>
          <h4>Subscription</h4>
          <p>All your subscription</p>
        </Box>
        <Box as={ArrowRight} css={{ color: '#BFBEB4' }} />
      </Card>
      <Card onClick={() => navigate('type')}>
        <Box css={{ flexGrow: 1 }}>
          <h4>Type</h4>
          <p>All your types</p>
        </Box>
        <Box as={ArrowRight} css={{ color: '#BFBEB4' }} />
      </Card>
    </GraphQLContext.Provider>
  )
}

export default Documents