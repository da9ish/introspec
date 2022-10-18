import { styled } from '@stitches/react'

import Flex from 'components/Flex'
import Text from 'components/Text'

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
