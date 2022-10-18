import { blackA } from '@radix-ui/colors'
import { styled } from '@stitches/react'

const Button = styled('button', {
  transition: 'all 0.1s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  outline: 'unset',
  padding: '12px 16px',
  marginX: '8px',
  borderRadius: '4px',
  fontFamily: '$body',
  fontWeight: 500,

  variants: {
    color: {
      primary: {
        backgroundColor: '$primary',
        color: '$primary',

        '&:hover': {
          backgroundColor: '#0057DA'
        }
      },
      secondary: {
        backgroundColor: '$secondary',
        color: '$secondary',

        '&:hover': {
          opacity: 0.8
        }
      },
      accent: {
        backgroundColor: '$gray1',
        color: '$gray1',

        '&:hover': {
          opacity: 0.8
        }
      }
    },
    kind: {
      filled: {
        border: 'unset'
      },
      outlined: {
        borderWidth: '1px',
        borderStyle: 'solid',

        '&:hover': {
          backgroundColor: blackA.blackA2
        }
      },
      ghost: {
        border: 'unset',
        backgroundColor: 'unset',

        '&:hover': {
          backgroundColor: blackA.blackA2
        }
      }
    }
  },
  compoundVariants: [
    {
      color: 'primary',
      kind: 'filled',
      css: {
        border: 'unset',
        color: 'white'
      }
    },
    {
      color: 'secondary',
      kind: 'filled',
      css: {
        border: 'unset',
        color: '$gray1'
      }
    },
    {
      color: 'accent',
      kind: 'filled',
      css: {
        border: 'unset',
        color: 'white'
      }
    },
    {
      color: 'primary',
      kind: 'outlined',
      css: {
        backgroundColor: 'unset',
        color: '$primary',
        borderColor: '$primary'
      }
    },
    {
      color: 'secondary',
      kind: 'outlined',
      css: {
        backgroundColor: 'unset',
        color: '$secondary',
        borderColor: '$secondary'
      }
    },
    {
      color: 'accent',
      kind: 'outlined',
      css: {
        backgroundColor: 'unset',
        color: '$accent',
        borderColor: '$accent'
      }
    }
  ],
  defaultVariants: {
    kind: 'filled',
    color: 'accent'
  }
})

export default Button
