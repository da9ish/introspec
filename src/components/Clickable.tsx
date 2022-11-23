import { styled } from '@stitches/react'

const Clickable = styled('div', {
  transition: 'all 0.1s ease',

  display: 'flex',
  boxSizing: 'border-box',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: '13px',
  outline: 'unset',
  border: 'none',
  backgroundColor: '$bgBase',
  borderRadius: '4px',
  padding: '8px',
  color: '$labelMuted',

  '&:hover': {
    backgroundColor: '$bgBaseHover'
  },

  '&:hover > *': {
    color: '$labelTitle'
  },

  variants: {
    size: {
      small: {
        height: 30
      },
      normal: {
        height: 32
      },
      large: {
        height: 36
      }
    }
  },
  defaultVariants: {
    size: 'small'
  }
})

export default Clickable
