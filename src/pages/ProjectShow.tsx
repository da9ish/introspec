import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box } from "../components/Box";
import Flex from "../components/Flex";
import { Label } from "../components/Label";
import { Project } from "../types/Project";


const ProjectShow: React.FC = () => {
  const { id } = useParams()
  const [project, setProject] = useState<Project>()

  useEffect(() => {
    fetch(`http://localhost:6500/project/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': window.localStorage.getItem('token') || ''
      },
      mode: "cors",
    }).then(res => res.json()).then(res => {
      console.log(res)
      setProject(res.data)
    })
  }, [])

  return (
    <Box css={{ flexGrow: 1, padding: '0 32px', overflow: 'auto' }}>
      <Flex direction="column" gap="lg">
        <h3>{project?.name}</h3>
        <Flex direction="column" gap="md">
          <Label htmlFor="name">Name</Label>
          <h5>{project?.name}</h5>
        </Flex>
        <Flex direction="column" gap="md">
          <Label htmlFor="description">Description</Label>
          <h5>{project?.description}</h5>
        </Flex>
        <Flex direction="column" gap="md">
          <Label htmlFor="apiEndpoint">GraphQL Endpoint</Label>
          <h5>{project?.apiEndpoint}</h5>
        </Flex>
      </Flex>
    </Box>
  )
}

export default ProjectShow