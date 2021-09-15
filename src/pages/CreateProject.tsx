import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Box } from "../components/Box";
import Button from "../components/Button";
import Flex from "../components/Flex";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import Switch from "../components/Switch";
import { CreateProjectInput } from "../types/Project";


const CreateProject: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<CreateProjectInput>({
    name: '',
    description: '',
    apiEndpoint: '',
    visibility: false,
    apiConfig: {},
    themeConfig: {},
    domainConfig: {}
  })

  const handleSubmit = () => {
    fetch('http://localhost:6500/project/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': window.localStorage.getItem('token') || ''
      },
      mode: "cors",
      body: JSON.stringify(formData)
    }).then(res => res.json()).then(res => {
      navigate(`/docs/${res.data.nameß}`)
    })
  }

  return (
    <Box css={{ flexGrow: 1, padding: '0 32px', overflow: 'auto' }}>
      <Flex direction="column" gap="lg">
        <h3>Create a new project</h3>
        <Flex direction="column" gap="md">
          <Label htmlFor="name">Name</Label>
          <Input id="name" size="small" name="name" placeholder="SpaceX" type="text" value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} />
        </Flex>
        <Flex direction="column" gap="md">
          <Label htmlFor="description">Description</Label>
          <Input id="description" size="small" name="description" placeholder="Description" type="text" value={formData.description} onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))} />
        </Flex>
        <Flex direction="column" gap="md">
          <Label htmlFor="apiEndpoint">GraphQL Endpoint</Label>
          <Input id="apiEndpoint" size="small" name="apiEndpoint" placeholder="https://api.spacex.land/graphql/" type="text" value={formData.apiEndpoint} onChange={(e) => setFormData(prev => ({ ...prev, apiEndpoint: e.target.value }))} />
        </Flex>
        <Switch label="Mark this project as private" name="visibility" value={formData.visibility} onChange={(checked) => setFormData(prev => ({...prev, visibility: checked }))} />
        <Button onClick={handleSubmit}>Submit</Button>
      </Flex>
    </Box>
  )
}

export default CreateProject