import { useNavigate } from 'react-router'
import { Field, Form } from 'react-final-form'
import { useMutation } from '@apollo/client'

import { styled } from '@stitches/react'

import Flex from 'components/Flex'
import Input from 'components/Input'
import Button from 'components/Button'
import Box from 'components/Box'
import Text from 'components/Text'
import Label from 'components/Label'
import { ReactComponent as Logo } from 'assets/logo.svg'
import { CreateWorkspaceInput, useCreateWorkspaceMutation } from 'generated/schema'
import { SessionQuery, SESSION_QUERY, SET_SESSION_MUTATION } from 'client/state/session'
import { cache } from 'client'
import { useCurrentAccountContext } from 'contexts/CurrentAccountContext'

const Container = styled(Flex, {
  width: '100%',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
})

const AccountContext = styled(Flex, {
  padding: '24px 32px',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const Onboard: React.FC = () => {
  const navigate = useNavigate()

  const currentAccount = useCurrentAccountContext()

  const [ setSession ] = useMutation(SET_SESSION_MUTATION)
  const [ createWorkspace ] = useCreateWorkspaceMutation({
    onCompleted: (data) => {
      if (data.createWorkspace) {
        const { session } = cache.readQuery({ query: SESSION_QUERY }) as SessionQuery
        const { id, environments } = data.createWorkspace
        setSession({ variables: {
          ...session,
          workspaceId: id,
          environmentId: environments?.[0].id
        } })
          .then(() => navigate('/workspace-setup'))
      }
    }
  })

  const onSubmit = (values: CreateWorkspaceInput) => {
    createWorkspace({ variables: { input: values } })
  }

  return (
    <Flex grow={1}>
      <Flex direction="column" css={{ width: '100%' }}>
        <AccountContext>
          <Flex direction="column">
            <Label>Logged in as:</Label>
            <Text>{currentAccount?.email}</Text>
          </Flex>
          <Text>Log out</Text>
        </AccountContext>
        <Container>
          <Flex css={{ width: '336px' }} direction="column"alignItems="center" justifyContent="center" gap="lg">
            <Logo style={{ width: '84px', height: '84px' }} />
            <Text type="title3">Create a new workspace</Text>
            <Text>This is where you&apos;ll manage all the data</Text>
            <Form
              onSubmit={onSubmit}
              validate={() => ({})}
              render={({ handleSubmit }) => (
                <Flex css={{ width: '100%' }} direction="column" gap="md" as="form" onSubmit={handleSubmit}>
                  <Field name="name">
                    {({ input, meta }) => (
                      <Label>
                        Workspace Name
                        <Input placeholder="SpaceX" {...input} />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </Label>
                    )}
                  </Field>
                  <Field name="identifier">
                    {({ input, meta }) => (
                      <Label>
                        Workspace URL
                        <Input placeholder="spacex" {...input} />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </Label>
                    )}
                  </Field>
                  <Button kind="primary" onClick={handleSubmit}>Create Workspace</Button>
                </Flex>
              )}
            />
          </Flex>
        </Container>
      </Flex>
      <Box css={{ width: '100%', backgroundColor: '#448aff' }} />
    </Flex>
  )
}

export default Onboard
