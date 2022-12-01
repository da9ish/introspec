import { styled } from '@stitches/react'

import Box from 'components/Box'
import Logo from 'components/Logo'
import Text from 'components/Text'

const Container = styled(Box, {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  background: '$landingBg',
  gap: 18
})

const NotFoundPage: React.FC = () => (
  <Container>
    <Logo size="36px" />
    <Text type="title3">Page not found</Text>
  </Container>
)

export default NotFoundPage
