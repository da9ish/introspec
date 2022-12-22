import React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { styled, VariantProps, CSS } from '@stitches/react'

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  position: 'absolute',
  left: 0,
  width: 13,
  height: 13,
  backgroundColor: '$bgBase',
  borderRadius: '50%',
  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px;',
  transition: 'transform 100ms cubic-bezier(0.22, 1, 0.36, 1)',
  transform: 'translateX(1px)',
  willChange: 'transform',

  '&[data-state="checked"]': {
    transform: 'translateX(11px)'
  }
})

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },

  // Reset
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  backgroundColor: '$slate5',
  borderRadius: '9999px',
  position: 'relative',
  '&:focus': {
    boxShadow: '0 0 0 2px $slate8'
  },

  '&[data-state="checked"]': {
    backgroundColor: '$indigo9',
    '&:focus': {
      boxShadow: '0 0 0 2px $indigo8'
    }
  },

  variants: {
    size: {
      small: {
        width: 25,
        height: 13
      },
      normal: {
        width: 36,
        height: 20,
        [`& ${StyledThumb}`]: {
          width: 18,
          height: 18,
          transform: 'translateX(2px)',
          '&[data-state="checked"]': {
            transform: 'translateX(16px)'
          }
        }
      },
      large: {
        width: 45,
        height: 25,
        [`& ${StyledThumb}`]: {
          width: 21,
          height: 21,
          transform: 'translateX(2px)',
          '&[data-state="checked"]': {
            transform: 'translateX(22px)'
          }
        }
      }
    }
  },
  defaultVariants: {
    size: 'normal'
  }
})

type SwitchVariants = VariantProps<typeof StyledSwitch>;
type SwitchPrimitiveProps = React.ComponentProps<typeof SwitchPrimitive.Root>;
type SwitchProps = SwitchPrimitiveProps & SwitchVariants & { css?: CSS };

const Switch = React.forwardRef<React.ElementRef<typeof StyledSwitch>, SwitchProps>(
  (props, forwardedRef) => (
    <StyledSwitch {...props} ref={forwardedRef}>
      <StyledThumb />
    </StyledSwitch>
  )
)

export default Switch
