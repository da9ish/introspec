import { Field, Form } from 'react-final-form'
import { styled } from '@stitches/react'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router'

import Box from 'components/Box'
import Button from 'components/Button'
import Flex from 'components/Flex'
import Input from 'components/Input'
import Label from 'components/Label'
import Link from 'components/Link'
import Logo from 'components/Logo'
import Text from 'components/Text'
import { UserLoginMutationVariables, useUserLoginMutation } from 'generated/schema'
import { SET_SESSION_MUTATION } from 'client/state/session'
import { colors } from 'colors'

import LoginBg from 'assets/login-gfx.png'

const Container = styled(Flex, {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: 'linear-gradient(270deg, $landingBg 20%, $landingSubtleBg)'
})

const Login: React.FC = () => {
  const navigate = useNavigate()

  const [ setSession ] = useMutation(SET_SESSION_MUTATION)
  const [ userLogin ] = useUserLoginMutation({
    onCompleted: (data) => {
      if (data.userLogin) {
        const { workspace, ...user } = data.userLogin.authenticatable
        const { uid, accessToken, expiry, client, tokenType } = data.userLogin.credentials
        setSession({ variables: {
          id: uid,
          accessToken,
          client,
          expiry,
          tokenType,
          onBoardingCompleted: !!workspace,
          workspace,
          user
        } })
          .then(() => {
            if (workspace) navigate('/overview')
            else navigate('/onboard')
          })
      }
    }
  })

  const onSubmit = (values: UserLoginMutationVariables) => {
    userLogin({ variables: values })
  }

  return (
    <Flex grow={1}>
      <Container>
        <Flex css={{ width: '336px', gap: '24px' }} direction="column" alignItems="start" justifyContent="center">
          <Flex direction="column" gap="lg">
            <Logo full size="36px" />
            <Text color={colors.landingLabelTitle} type="title3">Sign in to your Introspec account</Text>
          </Flex>
          <Form
            onSubmit={onSubmit}
            validate={() => ({})}
            render={({ handleSubmit }) => (
              <Flex css={{ width: '100%' }} direction="column" gap="md" as="form" onSubmit={handleSubmit}>
                <Field name="email">
                  {({ input, meta }) => (
                    <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
                      Email
                      <Input
                        placeholder="Email"
                        type="email"
                        size="large"
                        kind="website"
                        {...input}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
                      Password
                      <Input
                        placeholder="Password"
                        type="password"
                        size="large"
                        kind="website"
                        {...input}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Button type="submit" size="large" kind="primary">Login</Button>
                <Text color={colors.landingLabelMuted} align="center" fontSize={13}>Don&apos;t have an account?<Link to="/signup">Create an account</Link></Text>
              </Flex>
            )}
          />
        </Flex>
      </Container>
      <Box css={{ width: '100%', backgroundColor: colors.landingBg, backgroundImage: `url("${LoginBg}")`, backgroundSize: 'cover' }} />
    </Flex>
  )
}

export default Login
