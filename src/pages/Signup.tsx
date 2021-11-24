import React, { useState } from "react";
import Flex from "../components/Flex";
import { AppName } from "../components/public/Navbar";
import { ReactComponent as Logo } from '../assets/logo-light.svg'
import { Input } from "../components/Input";
import Button from "../components/Button";
import { Box } from "../components/Box";
import { Alert } from "../components/Alert";
import { styled } from "../stiches.config";
import { useNavigate } from "react-router";

type SignupFormValues = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const Container = styled(Box, {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})

const Ellipse1 = styled(Box, {
  zIndex: -1,
  position: 'absolute',
  width: '647px',
  height: '647px',
  left: '674px',
  top: '153px',

  background: 'rgba(245, 255, 187, 0.5)',
  filter: 'blur(205px)',
})

const Card = styled(Flex, {
  zIndex: 10,
  width: '100%',
  boxSizing: 'border-box',
  padding: "50px 32px",
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

const SignUp: React.FC = () => {
  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [formData, setFormData] = useState<SignupFormValues>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const handleCreateUser = async () => {
    const { confirmPassword, ...data } = formData
    if (confirmPassword === data.password) {
      fetch('http://localhost:6500/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: "cors",
        body: JSON.stringify(formData)
      }).then(res => res.json()).then(res => {
        if (res.success) {
          window.localStorage.setItem('token', res.data.token)
          navigate('/')
        } else {
          setError(`${res.message}: ${res.error.message}`)
        }
      }).catch(err => setError(err.message))
    } else setError("Password don't match")
  }

  return (
    <Container css={{ position: 'relative', overflow: 'auto' , background: 'rgba(255, 255, 255, 0.38)', backdropFilter: 'blur(50px)' }}>
      <Ellipse1 />
      <Card shadow={true} direction="column" alignItems="center" css={{ width: '400px' }}>
        <Flex direction="column" alignItems="center" gap="lg" css={{ width: '100%'}}>
          <Flex alignItems="center" gap="md">
            <Logo />
            <AppName>Instrospec</AppName>
          </Flex>
          <h4>Create a new account</h4>
          {error && <Alert kind="error">{error}</Alert>}
          <Input css={{ width: '100%' }} name="firstName" placeholder="First Name" type="text" value={formData.firstName} onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))} />
          <Input css={{ width: '100%' }} name="lastName" placeholder="Last Name" type="text" value={formData.lastName} onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))} />
          <Input css={{ width: '100%' }} name="email" placeholder="Email" type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} />
          <Input css={{ width: '100%' }} name="password" placeholder="Password" type="password" value={formData.password} onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))} />
          <Input css={{ width: '100%' }} name="confirmPassword" placeholder="Confirm Password" type="password" value={formData.confirmPassword} onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))} />
          <Button css={{ width: '100%' }} color="primary"  onClick={handleCreateUser}>Sign up</Button>
          <Box as="p" css={{ color: "$gray4", fontSize: 14 }}>Already have an account?
            <Box
              as="a"
              css={{
                transition: "all 0.1s ease",
                cursor: 'pointer',
                padding: '0 8px',
                '&:hover': { textDecoration: 'underline', textDecorationColor: '$primary', textDecorationWidth: 2 }
              }}
              href="/login"
            >
              Login
            </Box>
          </Box>
        </Flex>
      </Card>
    </Container>
  )
}

export default SignUp