import { styled, VariantProps } from '@stitches/react'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import Icon, { IconProps } from 'components/Icon'

import Flex from 'components/Flex'

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
      default: {
        backgroundColor: '$slate2',
        border: '1px solid $slate9',
        color: '$slate11',

        '&:hover': {
          backgroundColor: '$slate3',
          border: '1px solid $slate10',
          boxShadow: 'rgb(201 203 205) 0px 0px 0px 1px',
          color: '$slate12'
        }
      },
      info: {
        backgroundColor: '$indigo2',
        border: '1px solid $indigo9',
        color: '$indigo11',

        '&:hover': {
          backgroundColor: '$indigo3',
          border: '1px solid $indigo10',
          boxShadow: 'rgb(201 203 205) 0px 0px 0px 1px',
          color: '$indigo12'
        }
      },
      success: {
        backgroundColor: '$green2',
        border: '1px solid $green9',
        color: '$green11',

        '&:hover': {
          backgroundColor: '$green3',
          border: '1px solid $green10',
          boxShadow: 'rgb(201 203 205) 0px 0px 0px 1px',
          color: '$green12'
        }
      },
      warning: {
        backgroundColor: '$amber2',
        border: '1px solid $amber9',
        color: '$amber11',

        '&:hover': {
          backgroundColor: '$amber3',
          border: '1px solid $amber10',
          boxShadow: 'rgb(201 203 205) 0px 0px 0px 1px',
          color: '$amber12'
        }
      },
      error: {
        backgroundColor: '$red2',
        border: '1px solid $red9',
        color: '$red11',

        '&:hover': {
          backgroundColor: '$red3',
          border: '1px solid $red10',
          boxShadow: 'rgb(201 203 205) 0px 0px 0px 1px',
          color: '$red12'
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
        fontSize: '11px'
      },
      normal: {
        height: 32,
        fontSize: '12px'
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
