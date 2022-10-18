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
import { UserRegisterMutationVariables, useUserRegisterMutation } from 'generated/schema'
import { SET_SESSION_MUTATION } from 'client/state/session'

const Container = styled(Flex, {
  width: '100%',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
})

const Onboard: React.FC = () => {
  const navigate = useNavigate()

  const [ setSession ] = useMutation(SET_SESSION_MUTATION)
  const [ userLogin ] = useUserRegisterMutation({
    onCompleted: (data) => {
      if (data.userRegister && data.userRegister.credentials) {
        const { uid, accessToken, expiry, client, tokenType } = data.userRegister.credentials
        setSession({ variables: {
          id: uid,
          accessToken,
          client,
          expiry,
          tokenType
        } })
          .then(() => navigate('/onboard'))
      }
    }
  })

  const onSubmit = (values: UserRegisterMutationVariables) => {
    userLogin({ variables: values })
  }

  return (
    <Flex grow={1}>
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
                      <Input placeholder="SpaceX" type="email" {...input} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Field name="identifier">
                  {({ input, meta }) => (
                    <Label>
                      Workspace URL
                      <Input placeholder="spacex" type="password" {...input} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Button color="primary" onClick={handleSubmit}>Create Workspace</Button>
              </Flex>
            )}
          />
        </Flex>
      </Container>
      <Box css={{ width: '100%', backgroundColor: '#448aff' }} />
    </Flex>
  )
}

export default Onboard
