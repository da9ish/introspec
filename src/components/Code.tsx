import { styled } from '@stitches/react'

export const Code = styled('code', {
  fontFamily: '$mono',
  fontSize: 'max(12px, 85%)',
  whiteSpace: 'nowrap',
  padding: '0 3px 2px 3px',
  borderRadius: 2,

  variants: {
    variant: {
      gray: {
        backgroundColor: '$slate3',
        color: '$slate11'
      },
      primary: {
        backgroundColor: '$indigo3',
        color: '$indigo11'
      }
    }
  },
  defaultVariants: {
    variant: 'gray'
  }
})
