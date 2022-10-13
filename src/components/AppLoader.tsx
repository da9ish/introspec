import { styled } from '@stitches/react'

import Flex from './Flex'
import Text from './Text'

const StyledAppLoader = styled(Flex, {
  fullscreen: true,
  backgroundColor: 'light400',
  zIndex: 'appScreen'
})

function AppLoader() {
  return (
    <StyledAppLoader alignItems="center" justifyContent="center">
      <Text>Loading...</Text>
    </StyledAppLoader>
  )
}

export default AppLoader
