import React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { styled, CSS, VariantProps } from '@stitches/react'

import Icon from 'components/Icon'

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',

  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  },

  alignItems: 'center',
  appearance: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  color: '$slate12',
  border: '1px solid $slate7',
  boxShadow: 'inset 0 0 0 1px $slate7',
  overflow: 'hidden',

  '@hover': {
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px $slate8'
    }
  },
  '&:focus': {
    outline: 'none',
    borderColor: '$slate9',
    boxShadow: 'inset 0 0 0 1px $blue9, 0 0 0 1px $blue9'
  },

  '& [data-state="checked"]': {
    background: '$buttonBg',
    color: '$buttonLabel',
    borderColor: '$buttonBgHover'
  },

  variants: {
    size: {
      small: {
        width: 15,
        height: 15,
        borderRadius: 4
      },
      normal: {
        width: 25,
        height: 25,
        borderRadius: 8
      },
      large: {
        width: 30,
        height: 30,
        borderRadius: 10
      }
    }
  },
  defaultVariants: {
    size: '1'
  }
})

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%'
})

type CheckboxPrimitiveProps = React.ComponentProps<typeof CheckboxPrimitive.Root>;
type CheckboxVariants = VariantProps<typeof StyledCheckbox>;
type CheckboxProps = CheckboxPrimitiveProps & CheckboxVariants & { css?: CSS };

type CheckboxSize = 'small' | 'normal' | 'large'

const ICON_SIZE_MAP: Record<CheckboxSize, number> = {
  small: 10,
  normal: 12,
  large: 16
}

const Checkbox = React.forwardRef<React.ElementRef<typeof StyledCheckbox>, CheckboxProps>(
  ({ size = 'small', ...props }, forwardedRef) => (
    <StyledCheckbox {...props} size={size} ref={forwardedRef}>
      <StyledIndicator>
        <Icon name="check" size={ICON_SIZE_MAP[size as CheckboxSize]} />
      </StyledIndicator>
    </StyledCheckbox>
  )
)

export default Checkbox
