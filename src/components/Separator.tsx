import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { styled } from '@stitches/react'

const Separator = styled(SeparatorPrimitive.Root, {
  border: 'none',
  margin: 0,
  flexShrink: 0,
  cursor: 'default',

  variants: {
    kind: {
      app: {
        background: '$slate6'
      },
      website: {
        background: 'linear-gradient(90deg, #5A71DF, rgba(90, 113, 223, 0.1))'
      }
    },
    size: {
      1: {
        '&[data-orientation="horizontal"]': {
          height: '1px',
          width: '$3'
        },

        '&[data-orientation="vertical"]': {
          width: '1px',
          height: '$3'
        }
      },
      2: {
        '&[data-orientation="horizontal"]': {
          height: '1px',
          width: '$7'
        },

        '&[data-orientation="vertical"]': {
          width: '1px',
          height: '$7'
        }
      }
    }
  },
  defaultVariants: {
    size: '1',
    kind: 'app'
  }
})

export default Separator
