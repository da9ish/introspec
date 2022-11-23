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
import Logo from 'components/Logo'
import Text from 'components/Text'
import { SET_SESSION_MUTATION } from 'client/state/session'
import { UserRegisterMutationVariables, useUserRegisterMutation } from 'generated/schema'
import { colors } from 'colors'

import SignUpBg from 'assets/signup-gfx.png'

const Container = styled(Flex, {
  width: '100%',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: 'linear-gradient(270deg, $landingBg 20%, $landingSubtleBg)'
})

const SignUp: React.FC = () => {
  const navigate = useNavigate()

  const [ setSession ] = useMutation(SET_SESSION_MUTATION)
  const [ userRegistration ] = useUserRegisterMutation({
    onCompleted: (data) => {
      if (data.userRegister && data.userRegister.credentials) {
        const user = data.userRegister.authenticatable
        const { uid, accessToken, expiry, client, tokenType } = data.userRegister.credentials
        setSession({ variables: {
          id: uid,
          accessToken,
          client,
          expiry,
          tokenType,
          workspace: null,
          user
        } })
          .then(() => navigate('/onboard'))
      }
    }
  })

  const onSubmit = (values: UserRegisterMutationVariables) => {
    userRegistration({ variables: values })
  }

  return (
    <Flex grow={1}>
      <Container>
        <Flex css={{ width: '336px', gap: '24px' }} direction="column" alignItems="start" justifyContent="center" gap="lg">
          <Flex direction="column" gap="lg">
            <Logo full size="36px" />
            <Text type="title3">Create your Introspec account</Text>
          </Flex>
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
                      <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
                        First Name
                        <Input kind="website" placeholder="Elon" type="text" size="large" {...input} />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </Label>
                    )}
                  </Field>
                  <Field name="lastName">
                    {({ input, meta }) => (
                      <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
                        Last Name
                        <Input kind="website" placeholder="Musk" type="text" size="large" {...input} />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </Label>
                    )}
                  </Field>
                </Flex>
                <Field name="username">
                  {({ input, meta }) => (
                    <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
                      Username
                      <Input kind="website" placeholder="elon.musk" type="text" size="large" {...input} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Field name="email">
                  {({ input, meta }) => (
                    <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
                      Email
                      <Input kind="website" placeholder="elon.musk@spacex.com" type="email" size="large" {...input} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
                      Password
                      <Input kind="website" placeholder="WeAreGoing@M4rs" type="password" size="large" {...input} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Field name="passwordConfirmation">
                  {({ input, meta }) => (
                    <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
                      Confirm Password
                      <Input kind="website" placeholder="Confirm Password" type="password" size="large" {...input} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Button kind="primary" size="large" onClick={handleSubmit}>Sign up</Button>
                <Text align="center" fontSize={13}>Already have an account?<Link to="/login">Login</Link></Text>
              </Flex>
            )}
          />
          <Text color={colors.landingLabelMuted} align="center">
            By signing up, you agree to the Terms of Service
            and Data Processing Agreement.
          </Text>
        </Flex>
      </Container>
      <Box css={{ width: '100%', backgroundColor: colors.landingBg, backgroundImage: `url("${SignUpBg}")`, backgroundSize: 'cover' }} />
    </Flex>
  )
}

export default SignUp
