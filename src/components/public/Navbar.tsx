import React from "react";
import { styled } from "../../stiches.config";
import { ReactComponent as Logo } from '../../assets/logo-light.svg'
import Button from "../Button";
import { Flex } from "../Flex";
import { useNavigate } from "react-router";

const StyledNavbar = styled('nav', {
  margin: '0 10%',
  height: '72px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const AppName = styled('h3', {
  transition: "all 0.3s ease",

  margin: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: '#313131',
  fontWeight: 600,
})

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  return (
    <StyledNavbar>
      <Flex alignItems="center" gap="md">
        <Logo />
        <AppName>Instrospec</AppName>
      </Flex>
      <Flex alignItems="center" gap="lg">
        <Button as="a" href="/login" kind="ghost">
          Login
        </Button>
        <Button kind="filled" color="primary" onClick={() => navigate('/signup')}>Get Started</Button>
      </Flex>
    </StyledNavbar>
  )
}

export default Navbar