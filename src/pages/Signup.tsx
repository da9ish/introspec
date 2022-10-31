import { useNavigate } from 'react-router'
import { Field, Form } from 'react-final-form'
import { useMutation } from '@apollo/client'
import { styled } from '@stitches/react'

import Box from 'components/Box'
import Button from 'components/Button'
import Flex from 'components/Flex'
import Input from 'components/Input'
import Label from 'components/Label'
import Link from 'components/Link'
import Text from 'components/Text'
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
          workspaceId: null,
          environmentId: null
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
            validate={() => ({})}
            render={({ handleSubmit }) => (
              <Flex css={{ width: '100%' }} direction="column" gap="md" as="form" onSubmit={handleSubmit}>
                <Field name="email">
                  {({ input, meta }) => (
                    <Label>
                      Email
                      <Input placeholder="elon.musk@spacex.com" type="email" size="large" {...input} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <Label>
                      Password
                      <Input placeholder="WeAreGoing@M4rs" type="password" size="large" {...input} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Field name="passwordConfirmation">
                  {({ input, meta }) => (
                    <Label>
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
