import React from "react";
import { styled } from "../../stiches.config";
import { ReactComponent as Logo } from '../../assets/logo-light.svg'
import Button from "../Button";
import { Flex } from "../Flex";

const StyledNavbar = styled('nav', {
  margin: '0 10%',
  height: '72px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const AppName = styled('h3', {
  transition: "all 0.3s ease",

  margin: 0,
  marginLeft: '16px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: '#313131',
  fontWeight: 600,
})

const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
      <Flex css={{alignItems: 'center'}}>
        <Logo />
        <AppName>Instrospec</AppName>
      </Flex>
      <Button kind="filled" color="accent">Get Started</Button>
    </StyledNavbar>
  )
}

export default Navbar