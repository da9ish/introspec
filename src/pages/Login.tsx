import { useState } from 'react'

import { useNavigate } from 'react-router'

import Box from '../components/Box'
import Button from '../components/Button'
import Flex from '../components/Flex'
import Input from '../components/Input'
import { styled } from '../stiches.config'
import { ReactComponent as Logo } from '../assets/logo-light.svg'
import { AppName } from '../components/public/Navbar'
import Alert from '../components/Alert'

type LoginFormValues = {
  email: string,
  password: string
}

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

  const [ error, setError ] = useState('')
  const [ formData, setFormData ] = useState<LoginFormValues>({
    email: '',
    password: ''
  })
  const handleLogin = () => {
    fetch('http://localhost:6500/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(formData)
    }).then((res) => res.json()).then((res) => {
      if (res.success) {
        window.localStorage.setItem('token', res.data.token)
        navigate('/')
      } else {
        setError(`${res.message}: ${res.error.message}`)
      }
    }).catch((err) => setError(err.message))
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
          {error && <Alert kind="error">{error}</Alert>}
          <Input css={{ width: '100%' }} name="email" placeholder="Email" type="email" value={formData.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} />
          <Input css={{ width: '100%' }} name="password" placeholder="Password" type="password" value={formData.password} onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))} />
          <Button css={{ width: '100%' }} color="primary" onClick={handleLogin}>Login</Button>
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
      </Card>
    </Container>
  )
}

export default Login
