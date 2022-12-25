import { styled } from '@stitches/react'

const Code = styled('code', {
  fontFamily: '$code',
  fontSize: 'max(12px, 85%)',
  whiteSpace: 'nowrap',
  padding: '4px 8px',
  borderRadius: 4,

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

export default Code
