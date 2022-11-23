import { useNavigate } from 'react-router'

import { styled } from '@stitches/react'

import Flex from 'components/Flex'
import Button from 'components/Button'
import Box from 'components/Box'
import Text from 'components/Text'
import Label from 'components/Label'
import Clickable from 'components/Clickable'

import { useCreateEnvironmentsMutation } from 'generated/schema'

import { ReactComponent as Logo } from 'assets/logo.svg'

const Container = styled(Flex, {
  width: '100%',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
})

const RECOMMENDED_ENVIRONMENTS = [
  { name: 'Staging', identifier: 'staging' },
  { name: 'Develop', identifier: 'develop' },
  { name: 'Test', identifier: 'test' }
]

const WorkspaceSetup: React.FC = () => {
  const navigate = useNavigate()

  const [ createEnvironment ] = useCreateEnvironmentsMutation({
    onCompleted: () => navigate('/overview')
  })

  const onSubmit = () => {
    createEnvironment({ variables: { input: { environments: RECOMMENDED_ENVIRONMENTS } } })
  }

  return (
    <Flex grow={1}>
      <Container>
        <Flex css={{ width: '336px' }} direction="column" alignItems="start" justifyContent="center" gap="lg">
          <Logo style={{ width: '84px', height: '84px' }} />
          <Text type="title3">Choose your Environments</Text>
          <Text>
            Workspaces have multiple environments.
            It make sure your data is isolated across environments for
            development and testing purpose
          </Text>
          <Label>We&apos;ve already created a default environment `live`</Label>
          <Clickable>Live</Clickable>
          <Label>Add recommended environments</Label>
          {RECOMMENDED_ENVIRONMENTS.map((env) => (
            <Clickable key={env.identifier}>{env.name}</Clickable>
          ))}
          <Flex css={{ width: '100%' }} justifyContent="space-between">
            <Button onClick={() => navigate('/overview')}>Skip</Button>
            <Button onClick={onSubmit}>Add Environments</Button>
          </Flex>
        </Flex>
      </Container>
      <Box css={{ width: '100%', backgroundColor: '#448aff' }} />
    </Flex>
  )
}

export default WorkspaceSetup
