import { styled, VariantProps } from '@stitches/react'
import type { InputHTMLAttributes } from 'react'

import Flex from './Flex'

import type { IconProps } from './Icon'
import Icon from './Icon'
import Text from './Text'

interface InputProps extends VariantProps<typeof InputContainer>,
Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  icon?: IconProps['name'],
  iconPlacement?: 'left' | 'right'
}

const StyledIconLeft = styled(Icon, {
  position: 'absolute',
  left: '8px',
  top: '50%',
  transform: 'translateY(-50%)'
})

const StyledIconRight = styled(Icon, {
  position: 'absolute',
  right: '8px',
  top: '50%',
  transform: 'translateY(50%)'
})

const InputContainer = styled(Flex, {
  position: 'relative',
  width: '100%',
  gap: 'sm',
  all: 'unset',
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  fontSize: 15,
  lineHeight: 1,
  backgroundColor: '$controlSecondary',
  color: '$labelBase',
  border: '1px solid $buttonBorder',
  boxShadow: 'rgb(0 0 0 / 7%) 0px 1px 1px',

  '&:hover': {
    border: '1px solid $buttonBorderHover'
  },

  '&:focus': {
    border: '1px solid $controlSelectLabel'
  },

  '&:focus-within': {
    border: '1px solid $controlSelectLabel'
  },

  [`& > ${StyledIconLeft}, & > ${StyledIconRight}`]: {
    position: 'absolute',
    left: '8px',
    top: '50%'
  },

  variants: {
    size: {
      small: {
        height: 28,
        padding: '0 12px',
        fontSize: '12px'

      },
      normal: {
        height: 32,
        padding: '6px 12px',
        fontSize: '13px'
      },
      large: {
        height: 44,
        padding: 12,
        fontSize: '13px'
      }
    }
  },
  defaultVariants: {
    size: 'small'
  }
})

const StyledInput = styled('input', {
  border: 'none',
  outline: 'none',
  width: '100%',
  height: '100%',
  background: 'transparent',
  marginLeft: '8px',
  fontSize: 13,

  '::placeholder': {
    color: '$labelFaint'
  }
})

const Input: React.FC<InputProps> = ({ icon = null, iconPlacement = 'left', size = 'small', prefix, ...props }) => (
  <InputContainer size={size}>
    {icon && iconPlacement === 'left' && <StyledIconLeft name={icon} />}
    {prefix && <Text type="body" color="muted">{prefix}</Text>}
    <StyledInput {...props} />
    {icon && iconPlacement === 'right' && <StyledIconRight name={icon} />}
  </InputContainer>
)

export default Input
