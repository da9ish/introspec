import { styled } from '@stitches/react'
import { SpinnerRoundFilled } from 'spinners-react'
import { blue } from '@radix-ui/colors'

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
      <SpinnerRoundFilled color={blue.blue10} />
    </StyledAppLoader>
  )
}

export default AppLoader
