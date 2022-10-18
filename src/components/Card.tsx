import { styled } from '@stitches/react'

import Flex from 'components/Flex'

const Card = styled(Flex, {
  transition: 'all 0.1s ease',

  cursor: 'pointer',
  padding: '32px',
  flexDirection: 'column',
  borderRadius: '4px',
  margin: '8px 0',
  boxShadow: 'rgb(0 0 0 / 7%) 0px 4px 44px'
})

export default Card
