import { useNavigate } from 'react-router'

import { styled } from '@stitches/react'

import { ReactComponent as Logo } from 'assets/logo.svg'
import Button from 'components/Button'
import Flex from 'components/Flex'

const StyledNavbar = styled('nav', {
  margin: '0 10%',
  height: '72px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const AppName = styled('h3', {
  transition: 'all 0.1s ease',

  margin: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: '#313131',
  fontWeight: 600
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
        <Button size="large" kind="secondary" onClick={() => navigate('/login')}>Login</Button>
        <Button size="large" kind="primary" onClick={() => navigate('/signup')}>Get Started</Button>
      </Flex>
    </StyledNavbar>
  )
}

export { AppName }

export default Navbar
