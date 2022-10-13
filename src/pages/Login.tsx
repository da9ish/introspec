import { useNavigate } from 'react-router'
import { useMutation } from '@apollo/client'
import { Field, Form } from 'react-final-form'

import Box from '../components/Box'
import Button from '../components/Button'
import Flex from '../components/Flex'
import Input from '../components/Input'
import { styled } from '../stiches.config'
import { ReactComponent as Logo } from '../assets/logo-light.svg'
import { AppName } from '../components/public/Navbar'
import { UserLoginMutationVariables, useUserLoginMutation } from 'generated/schema'
import { SET_SESSION_MUTATION } from 'client/state/session'

const Container = styled(Box, {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
})

const Ellipse1 = styled(Box, {
  zIndex: -1,
  position: 'absolute',
  width: '647px',
  height: '647px',
  left: '674px',
  top: '153px',

  background: 'rgba(255, 187, 216, 0.5)',
  filter: 'blur(205px)'
})

const Card = styled(Flex, {
  zIndex: 10,
  width: '100%',
  boxSizing: 'border-box',
  padding: '50px 32px',
  variants: {
    shadow: {
      true: {
        backgroundColor: 'white',
        boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.15), 0px 20px 30px rgba(0, 0, 0, 0.05), 0px 10px 50px rgba(0, 0, 0, 0.05)'
      },
      false: {
        backgroundColor: 'transparent',
        boxShadow: 'none'
      }
    }
  }
})

const Login: React.FC = () => {
  const navigate = useNavigate()

  const [ setSession ] = useMutation(SET_SESSION_MUTATION)
  const [ userLogin ] = useUserLoginMutation({
    onCompleted: (data) => {
      if (data.userLogin) {
        const { uid, accessToken, expiry, client, tokenType } = data.userLogin.credentials
        setSession({ variables: { id: uid, accessToken, client, expiry, tokenType } })
          .then(() => navigate('/'))
      }
    }
  })

  const onSubmit = (values: UserLoginMutationVariables) => {
    userLogin({ variables: values })
  }

  return (
    <Container css={{ position: 'relative', overflow: 'auto', background: 'rgba(255, 255, 255, 0.38)', backdropFilter: 'blur(50px)' }}>
      <Ellipse1 />
      <Card shadow direction="column" alignItems="center" css={{ width: '400px' }}>
        <Flex direction="column" alignItems="center" gap="lg" css={{ width: '100%' }}>
          <Flex alignItems="center" gap="md">
            <Logo />
            <AppName>Instrospec</AppName>
          </Flex>
          <h4>Login</h4>
          <Form
            onSubmit={onSubmit}
            validate={() => ({})}
            render={({ handleSubmit }) => (
              <Flex direction="column" gap="sm" as="form" onSubmit={handleSubmit}>
                <Field name="email">
                  {({ input, meta }) => (
                    <Box>
                      <Input
                        placeholder="Email"
                        type="email"
                        css={{ width: '100%' }}
                        {...input}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Box>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <Box>
                      <Input
                        placeholder="Password"
                        type="password"
                        css={{ width: '100%' }}
                        {...input}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Box>
                  )}
                </Field>
                <Button type="submit" css={{ width: '100%' }} color="primary">Login</Button>
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
      </Card>
    </Container>
  )
}

export default Login
