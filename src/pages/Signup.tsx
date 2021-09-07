import React, { useState } from "react";
import Flex from "../components/Flex";
import { AppName } from "../components/public/Navbar";
import { ReactComponent as Logo } from '../assets/logo-light.svg'
import { Input } from "../components/Input";
import Button from "../components/Button";
import { Box } from "../components/Box";
import { styled } from "../stiches.config";

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


const SignUp: React.FC = () => {

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
    }).then(res => res.json()).then(res => console.log(res))
    } else setError("Password don't match")
  }


  return (
    <Container>
      <Flex direction="column" alignItems="center" gap="lg">
        <Flex alignItems="center" gap="md">
          <Logo />
          <AppName>Instrospec</AppName>
        </Flex>
        <h4>Create a new account</h4>
        <Input size="small" name="firstName" placeholder="First Name" type="text" value={formData.firstName} onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))} />
        <Input size="small" name="lastName" placeholder="Last Name" type="text" value={formData.lastName} onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))} />
        <Input size="small" name="email" placeholder="Email" type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} />
        <Input size="small" name="password" placeholder="Password" type="password" value={formData.password} onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))} />
        <Input size="small" name="confirmPassword" placeholder="Confirm Password" type="password" value={formData.confirmPassword} onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))} />
        <Button css={{ marginTop: 8 }} size="small" onClick={handleCreateUser}>Sign up</Button>
        <Box as="p" css={{ color: "$gray12", fontSize: 14 }}>Already have an account?
          <Box
            as="a"
            css={{
              transition: "all 0.3s ease",
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
    </Container>
  )
}

export default SignUp