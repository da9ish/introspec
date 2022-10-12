import { styled } from '@stitches/react'

import { Outlet, useLocation, Route, Routes } from 'react-router'

import Box from '../components/Box'
import Flex from '../components/Flex'
import Sidebar from '../components/private/Sidebar'
import Topbar from '../components/private/Topbar'
import Schema from '../pages/Database/Schema'
import Overview from '../pages/Overview'

const Container = styled(Flex, {
  width: '100%',
  height: '100%'
})

const RightSidebar = styled(Flex, {
  width: '300px',
  height: '100vh',
  flexShrink: 0,
  background: '#FAFAFA',
  borderTopLeftRadius: '30px',
  borderBottomLeftRadius: '30px',
  padding: '32px',
  boxSizing: 'border-box',

  variants: {
    hidden: {
      true: {
        display: 'none'
      },
      false: {
        display: 'block'
      }
    }
  }
})

const Private: React.FC = () => {
  const location = useLocation()
  return (
    <Box css={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar />
      <Container>
        <Flex direction="column" css={{ flexGrow: 1 }}>
          <Topbar />
          <Box as="main">
            <Routes>
              <Route path="/overview" element={<Overview />} />
              <Route path="/database">
                <Route path="/database/schema" element={<Schema />} />
              </Route>
            </Routes>
            <Outlet />
          </Box>
        </Flex>
        <RightSidebar hidden={!location.pathname.includes('docs')} direction="column" justifyContent="space-between">
          <Box>
            <Box as="h4" css={{ marginTop: '64px' }}>Links</Box>
          </Box>
          <h6>Send Feedback</h6>
        </RightSidebar>
      </Container>
    </Box>
  )
}

export default Private
