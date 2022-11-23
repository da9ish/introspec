import { indigoDark, indigoDarkA } from '@radix-ui/colors'
import { styled } from '@stitches/react'

export const ActionButton = styled('button', {
  transition: 'all 0.1s ease',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  cursor: 'pointer',
  outline: 'unset',
  borderRadius: '4px',
  fontFamily: '$body',
  fontWeight: 500,

  variants: {
    kind: {
      primary: {
        backgroundColor: '$landingButtonBg',
        color: '$landingButtonText',

        '&:hover': {
          backgroundColor: '$landingButtonBgHover'
        }
      },
      secondary: {
        backgroundColor: 'transparent',
        color: '$landingButtonText',
        border: '1px solid transparent',

        '&:hover:not(:disabled)': {
          backgroundColor: indigoDarkA.indigoA2,
          border: `1px solid ${indigoDark.indigo9}`
        }
      }
    },
    size: {
      normal: {
        height: 44,
        padding: '0 32px'

      },
      large: {
        height: 50,
        padding: '0 36px'

      }
    }
  },
  defaultVariants: {
    size: 'normal'
  }
})
