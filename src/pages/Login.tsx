import { useNavigate } from 'react-router'
import { useMutation } from '@apollo/client'
import { Field, Form } from 'react-final-form'

import { styled } from '@stitches/react'

import Box from 'components/Box'
import Button from 'components/Button'
import Flex from 'components/Flex'
import Input from 'components/Input'
import { ReactComponent as Logo } from 'assets/logo.svg'
import { UserLoginMutationVariables, useUserLoginMutation } from 'generated/schema'
import { SET_SESSION_MUTATION } from 'client/state/session'
import Label from 'components/Label'
import Text from 'components/Text'

const Container = styled(Flex, {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
})

const Login: React.FC = () => {
  const navigate = useNavigate()

  const [ setSession ] = useMutation(SET_SESSION_MUTATION)
  const [ userLogin ] = useUserLoginMutation({
    onCompleted: (data) => {
      if (data.userLogin) {
        const { workspace } = data.userLogin.authenticatable
        const { uid, accessToken, expiry, client, tokenType } = data.userLogin.credentials
        setSession({ variables: {
          id: uid,
          accessToken,
          client,
          expiry,
          tokenType,
          workspaceId: workspace ? workspace.id : null,
          environmentId: workspace ? workspace.environments?.[0].id : null
        } })
          .then(() => {
            if (workspace) navigate('/')
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
        <Flex css={{ width: '336px' }} direction="column"alignItems="center" justifyContent="center" gap="lg">
          <Logo />
          <Text type="title3">Sign in to your Introspec account</Text>
          <Form
            onSubmit={onSubmit}
            validate={() => ({})}
            render={({ handleSubmit }) => (
              <Flex css={{ width: '100%' }} direction="column" gap="md" as="form" onSubmit={handleSubmit}>
                <Field name="email">
                  {({ input, meta }) => (
                    <Label>
                      Email
                      <Input
                        placeholder="Email"
                        type="email"
                        css={{ width: '100%' }}
                        {...input}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <Label>
                      Password
                      <Input
                        placeholder="Password"
                        type="password"
                        css={{ width: '100%' }}
                        {...input}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Button type="submit" kind="primary">Login</Button>
                <Box as="p" css={{ color: '$gray10', fontSize: 14 }}>Don&apos;t have an account?
                  <Box
                    as="a"
                    css={{
                      transition: 'all 0.1s ease',
                      cursor: 'pointer',
                      padding: '0 8px',
                      '&:hover': { textDecoration: 'underline', textDecorationThickness: 2 }
                    }}
                    href="/signup"
                  >
                    Create an account
                  </Box>
                </Box>
              </Flex>
            )}
          />
        </Flex>
      </Container>
      <Box css={{ width: '100%', backgroundColor: '#448aff' }} />
    </Flex>
  )
}

export default Login
