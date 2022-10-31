import { styled, VariantProps } from '@stitches/react'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import Icon, { IconProps } from 'components/Icon'
import Flex from './Flex'

interface ButtonProps extends PropsWithChildren,
VariantProps<typeof StyledButton>,
ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconProps['name'],
  iconPlacement?: 'left' | 'right'
}

const StyledButton = styled('button', {
  transition: 'all 0.1s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  cursor: 'pointer',
  outline: 'unset',
  padding: '0 8px',
  borderRadius: '4px',
  fontFamily: '$body',
  fontWeight: 500,

  variants: {
    kind: {
      primary: {
        backgroundColor: '$controlBase',
        color: '$controlLabel',

        '&:hover': {
          backgroundColor: '$controlBaseHighlight'
        }
      },
      secondary: {
        backgroundColor: '$controlSecondary',
        color: '$labelBase',
        border: '1px solid $buttonBorder',
        boxShadow: 'rgb(0 0 0 / 7%) 0px 1px 1px',

        '&:hover': {
          backgroundColor: '$buttonHoverBg',
          border: '1px solid $buttonBorderHover'
        }
      },
      outlined: {
        backgroundColor: 'transparent',
        border: '1px solid $buttonBorder',
        color: '$bgBorderSolid',

        '&:hover': {
          color: '$labelBase'
        }
      },
      dangerous: {
        backgroundColor: '$danger',
        color: '$bgBase',
        boxShadow: 'rgb(0 0 0 / 7%) 0px 1px 1px',

        '&:hover': {
          color: '$dangetHighlight'
        }
      }
    },
    size: {
      small: {
        height: 28,
        fontSize: '12px'
      },
      normal: {
        height: 32,
        fontSize: '13px'
      },
      large: {
        height: 44,
        fontSize: '13px'
      }
    }
  },
  defaultVariants: {
    kind: 'primary',
    size: 'small'
  }
})

const Button: React.FC<ButtonProps> = ({ children, icon = null, iconPlacement = 'left', ...props }) => (
  <StyledButton {...props}>
    <Flex gap="sm">
      {icon && iconPlacement === 'left' && <Icon name={icon} />}
      {children}
      {icon && iconPlacement === 'right' && <Icon name={icon} />}
    </Flex>
  </StyledButton>
)

export default Button
