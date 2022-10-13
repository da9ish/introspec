import { styled } from '@stitches/react'

import type { PropsWithChildren } from 'react'

import Box from 'components/Box'
import Flex from 'components/Flex'
import Sidebar from 'components/private/Sidebar'
import Topbar from 'components/private/Topbar'

const Container = styled(Flex, {
  width: '100%',
  height: '100%'
})

const InternalLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <Box css={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
    <Sidebar />
    <Container>
      <Flex direction="column" css={{ flexGrow: 1 }}>
        <Topbar />
        <Box as="main">
          {children}
        </Box>
      </Flex>
    </Container>
  </Box>
)

export default InternalLayout
