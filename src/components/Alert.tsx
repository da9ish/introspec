import { styled } from '@stitches/react'

import Box from 'components/Box'

const Alert = styled(Box, {
  padding: '8px 16px',
  borderRadius: '4px',

  variants: {
    kind: {
      error: {
        color: '$red10',
        backgroundColor: '$red12'
      },
      success: {
        color: '$green10',
        backgroundColor: '$green12'
      },
      warning: {
        color: '$yellow10',
        backgroundColor: '$yellow2'
      }
    }
  }
})

export default Alert
