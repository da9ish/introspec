import { useNavigate } from 'react-router'
import { Field, Form } from 'react-final-form'
import { useMutation } from '@apollo/client'
import { styled } from '@stitches/react'

import { UserRegisterMutationVariables, useUserRegisterMutation } from 'generated/schema'

import Box from 'components/Box'
import Button from 'components/Button'
import Flex from 'components/Flex'
import Input from 'components/Input'
import Label from 'components/Label'
import Link from 'components/Link'
import Text from 'components/Text'
import { ReactComponent as Logo } from 'assets/logo.svg'
import { SET_SESSION_MUTATION } from 'client/state/session'

const Container = styled(Flex, {
  width: '100%',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
})

const SignUp: React.FC = () => {
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
          tokenType,
          workspace: null
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
          <Text type="title3">Create your Introspec account</Text>
          <Form
            onSubmit={onSubmit}
            initialValues={{
              role: 'WORKSPACE_MEMBER'
            }}
            validate={() => ({})}
            render={({ handleSubmit }) => (
              <Flex css={{ width: '100%' }} direction="column" gap="md" as="form" onSubmit={handleSubmit}>
                <Flex gap="md">
                  <Field name="firstName">
                    {({ input, meta }) => (
                      <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                        First Name
                        <Input placeholder="Elon" type="text" size="large" {...input} />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </Label>
                    )}
                  </Field>
                  <Field name="lastName">
                    {({ input, meta }) => (
                      <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                        Last Name
                        <Input placeholder="Musk" type="text" size="large" {...input} />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </Label>
                    )}
                  </Field>
                </Flex>
                <Field name="username">
                  {({ input, meta }) => (
                    <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      Username
                      <Input placeholder="elon.musk" type="text" size="large" {...input} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Field name="email">
                  {({ input, meta }) => (
                    <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      Email
                      <Input placeholder="elon.musk@spacex.com" type="email" size="large" {...input} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      Password
                      <Input placeholder="WeAreGoing@M4rs" type="password" size="large" {...input} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Field name="passwordConfirmation">
                  {({ input, meta }) => (
                    <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      Confirm Password
                      <Input placeholder="Confirm Password" type="password" size="large" {...input} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Button kind="primary" size="large" onClick={handleSubmit}>Sign up</Button>
                <Text align="center" fontSize={13}>Already have an account?<Link to="/login">Login</Link></Text>
              </Flex>
            )}
          />
          <Text align="center">
            By signing up, you agree to the Terms of Service
            and Data Processing Agreement.
          </Text>
        </Flex>
      </Container>
      <Box css={{ width: '100%', backgroundColor: '#448aff' }} />
    </Flex>
  )
}

export default SignUp
