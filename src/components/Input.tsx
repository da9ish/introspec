import { indigoDark } from '@radix-ui/colors'
import { styled, VariantProps } from '@stitches/react'

import type { InputHTMLAttributes } from 'react'

import { colors } from 'colors'

import Flex from './Flex'

import type { IconProps } from './Icon'
import Icon from './Icon'
import Text from './Text'

interface InputProps extends VariantProps<typeof InputContainer>,
Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  icon?: IconProps['name'],
  iconPlacement?: 'left' | 'right'
}

const Prefix = styled(Text, {
  paddingLeft: 12
})

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

const StyledInput = styled('input', {
  position: 'relative',
  border: 'none',
  outline: 'none',
  width: '100%',
  height: '100%',
  background: 'transparent',
  borderRadius: '4px',
  fontSize: 13,
  color: '$inputColor',
  padding: '0 12px',

  '::placeholder': {
    color: '$inputPlaceholder'
  },

  '&:-webkit-autofill': {
    backgroundColor: `${indigoDark.indigo9} !important`
  },

  variants: {
    prefix: {
      true: {
        padding: 0
      }
    },
    icon: {
      true: {
        paddingLeft: 32
      }
    }
  }
})

const InputContainer = styled(Flex, {
  position: 'relative !important',
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
  backgroundColor: '$inputBg',
  border: '1px solid $inputBorder',
  boxShadow: 'rgb(0 0 0 / 7%) 0px 1px 1px',

  '&:hover': {
    border: '1px solid $inputBorderHover'
  },

  '&:focus': {
    border: '1px solid $inputBorderFocus'
  },

  '&:focus-within': {
    border: '1px solid $inputBorderFocus'
  },

  [`& > ${StyledIconLeft}, & > ${StyledIconRight}`]: {
    color: '$inputPlaceholder',
    position: 'absolute',
    left: '8px',
    top: '50%'
  },

  variants: {
    size: {
      small: {
        fontSize: '12px',

        [`& ${StyledInput}`]: {
          height: 28
        }

      },
      normal: {
        fontSize: '13px',

        [`& ${StyledInput}`]: {
          height: 32
        }
      },
      large: {
        fontSize: '13px',

        [`& ${StyledInput}`]: {
          height: 44
        }
      }
    }
  },
  defaultVariants: {
    size: 'small'
  }
})

const Input: React.FC<InputProps> = ({ icon = null, iconPlacement = 'left', size = 'small', prefix, ...props }) => (
  <InputContainer size={size}>
    {icon && iconPlacement === 'left' && <StyledIconLeft name={icon} />}
    {prefix && <Prefix type="body" color="muted">{prefix}</Prefix>}
    <StyledInput prefix={Boolean(prefix)} icon={Boolean(icon)} {...props} />
    {icon && iconPlacement === 'right' && <StyledIconRight name={icon} />}
  </InputContainer>
)

export default Input
