import React, { useEffect, useState } from "react";
import { Box } from "../components/Box";
import { ReactComponent as ArrowRight } from '../assets/icons/arrow-right.svg'
import { Card } from "../components/Card";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { Project } from "../types/Project";

const Documents: React.FC = () => {
  const navigate = useNavigate()
  const { projectId } = useParams()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchSchema = () => {
    fetch(`http://localhost:6500/docs/${projectId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': window.localStorage.getItem('token') || ''
      },
      mode: "cors",
    }).then(res => res.json()).then(res => {
      const { schema, ...project } = res.data
      window.localStorage.setItem('graphql-schema', JSON.stringify(schema.data))
      setProject(project)
      setLoading(false)
    }).catch(e => setLoading(false))
  }

  useEffect(() => {
    fetchSchema()
  }, [])

  return (
    <>
    {loading ? <h3>Loading...</h3> : 
      <>
        <h2>{project?.name}</h2>
        <p>{project?.description}</p>
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
      </>
    }
    </>
  )
}

export default Documents