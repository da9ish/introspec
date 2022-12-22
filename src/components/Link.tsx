import { styled } from '@stitches/react'
import { Link as RouterLink } from 'react-router-dom'

import Text from 'components/Text'

const Link = styled(RouterLink, {
  alignItems: 'center',
  gap: 5,
  flexShrink: 0,
  outline: 'none',
  textDecorationLine: 'none',
  textUnderlineOffset: '3px',
  textDecorationColor: '$slate4',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: 'inherit',
  '@hover': {
    '&:hover': {
      textDecorationLine: 'underline'
    }
  },
  '&:focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    textDecorationLine: 'none'
  },
  [`& ${Text}`]: {
    color: 'inherit'
  },
  variants: {
    variant: {
      blue: {
        color: '$blue11',
        textDecorationColor: '$blue4',
        '&:focus': {
          outlineColor: '$blue8'
        }
      },
      subtle: {
        color: '$slate11',
        textDecorationColor: '$slate4',
        '&:focus': {
          outlineColor: '$slate8'
        }
      },
      contrast: {
        color: '$slate11',
        textDecoration: 'underline',
        textDecorationColor: '$slate4',
        '@hover': {
          '&:hover': {
            textDecorationColor: '$slate7'
          }
        },
        '&:focus': {
          outlineColor: '$slate8'
        }
      }
    }
  },
  defaultVariants: {
    variant: 'contrast'
  }
})

export default Link
