import { styled } from '@stitches/react'

import type { PropsWithChildren } from 'react'

import Box from 'components/Box'
import Flex from 'components/Flex'
import Sidebar from 'components/private/Sidebar'
import Topbar from 'components/private/Topbar'
import { colors } from 'colors'
import ViewStack from 'components/view/ViewStack'

const Container = styled(Flex, {
  width: '100%',
  height: '100%',
  backgroundColor: '$bgBase'
})

const InternalLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <Box css={{ display: 'flex', height: '100vh', overflow: 'hidden', backgroundColor: colors.bgBase }}>
    <Sidebar />
    <Container>
      <Flex direction="column" css={{ flexGrow: 1 }}>
        <Topbar />
        <Box as="main">
          {children}
          <ViewStack />
        </Box>
      </Flex>
    </Container>
  </Box>
)

export default InternalLayout
