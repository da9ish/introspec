import { gray } from '@radix-ui/colors'

import { styled } from '@stitches/react'

const Input = styled('input', {
  width: '100% !important',
  all: 'unset',
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  padding: '0 16px',
  margin: '4px 0',
  fontSize: 15,
  lineHeight: 1,
  backgroundColor: gray.gray2,
  boxShadow: `0 0 0 1px ${gray.gray5}`,

  '::placeholder': {
    color: gray.gray12
  },

  '&:focus': {
    boxShadow: `0 0 0 2px ${gray.gray7}`
  },

  variants: {
    size: {
      small: {
        height: 36
      },
      normal: {
        height: 45
      }
    }
  },
  defaultVariants: {
    size: 'normal'
  }
})

export default Input
