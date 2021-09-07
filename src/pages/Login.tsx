import React, { useState } from "react";
import { Box } from "../components/Box";
import Button from "../components/Button";
import { Flex } from "../components/Flex";
import { Input } from "../components/Input";
import { styled } from "../stiches.config";
import { ReactComponent as Logo } from '../assets/logo-light.svg'
import { AppName } from "../components/public/Navbar";

type LoginFormValues = {
  email: string
  password: string
}

const Container = styled(Box, {
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormValues>({
    email: '',
    password: ''
  })
  const handleLogin = () => {
  }

  return (
    <Container>
      <Box css={{ padding: '32px 24px', alignItems: 'center', flexDirection: 'column' }}>
        <Flex direction="column" alignItems="center" gap="lg">
          <Flex alignItems="center" gap="md">
            <Logo />
            <AppName>Instrospec</AppName>
          </Flex>
          <h4>Login</h4>
          <Input size="small" name="email" placeholder="Email" type="email" value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} />
          <Input size="small" name="password" placeholder="Password" type="password" value={formData.password} onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))} />
          <Button css={{ marginTop: 8 }} size="small" color="primary" onClick={handleLogin}>Login</Button>
          <Box as="p" css={{ color: "$gray12", fontSize: 14 }}>Don&apos;t have an account?
            <Box
              as="a"
              css={{
                transition: "all 0.3s ease",
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
      </Box>
    </Container>

  )
}

export default Login