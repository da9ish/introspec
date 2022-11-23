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
        backgroundColor: '$buttonBg',
        color: '$buttonLabel',

        '&:hover': {
          backgroundColor: '$buttonBgHover'
        }
      },
      secondary: {
        backgroundColor: '$buttonBgSecondary',
        color: '$buttonLabel',
        border: '1px solid $buttonSecondaryBorder',
        boxShadow: 'rgb(0 0 0 / 7%) 0px 1px 1px',

        '&:hover:not(:disabled)': {
          backgroundColor: '$buttonSecondaryBgHover',
          border: '1px solid $buttonSecondaryBorderHover',
          boxShadow: 'rgb(201 203 205) 0px 0px 0px 1px'
        }
      },
      outlined: {
        backgroundColor: 'transparent',
        border: '1px solid $buttonBgSecondary',
        color: '$buttonLabel',

        '&:hover': {
          backgroundColor: '$buttonSecondaryBgHover',
          border: '1px solid $buttonSecondaryBorderHover',
          boxShadow: 'rgb(201 203 205) 0px 0px 0px 1px'
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

export type { ButtonProps }

export default Button
