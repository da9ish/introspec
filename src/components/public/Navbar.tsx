import { indigoDark } from '@radix-ui/colors'
import { styled } from '@stitches/react'
import { useNavigate } from 'react-router'

import Flex from 'components/Flex'
import Grid from 'components/Grid'
import Logo from 'components/Logo'
import { ActionButton } from 'components/ActionButton'

const StyledNavbar = styled('nav', {
  position: 'relative',

  width: '100%',
  height: '72px',

  '& [data-icon]': {
    color: '$landingButtonBg'
  }
})

const NavContent = styled('div', {
  gridColumnStart: 3,
  gridColumnEnd: 11,

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
  color: `${indigoDark.indigo12}`,
  fontWeight: 600
})

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  return (
    <StyledNavbar>
      <Grid columns={12}>
        <NavContent>
          <Logo full size={24} />
          <Flex alignItems="center" gap="lg">
            <ActionButton kind="secondary" onClick={() => navigate('/login')}>Login</ActionButton>
            <ActionButton kind="primary" onClick={() => navigate('/signup')}>Sign up</ActionButton>
          </Flex>
        </NavContent>
      </Grid>
    </StyledNavbar>
  )
}

export { AppName }

export default Navbar
