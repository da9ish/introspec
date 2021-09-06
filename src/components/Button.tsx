import React from "react";
import { styled } from "../stiches.config";

interface ButtonOwnProps {
  // 
}

type ButtonProps = React.ComponentProps<typeof StyledButton>

const StyledButton = styled('button', {
  transition: "all 0.3s ease",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: "pointer",
  fontSize: '14px',
  outline: 'unset',
  padding: '0 20px',
  marginX: '8px',
  borderRadius: '16px',
  fontFamily: '$body',
  fontWeight: 500,

  variants: {
    size: {
      small: {
        height: 36
      },
      normal: {
        height: 45
      }
    },
    color: {
      primary: {
        backgroundColor: '$primary',
        color: '$primary',

        '&:hover': {
          opacity: 0.8
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
        backgroundColor: '$gray12',
        color: '$gray12',

        '&:hover': {
          opacity: 0.8
        }
      }
    },
    kind: {
      filled: {
        border: "unset"
      },
      outlined: {
        borderWidth: "1px",
        borderStyle: "solid"
      }
    },
  },
  compoundVariants: [
    {
      color: "primary",
      kind: "filled",
      css: {
        border: "unset",
        color: "white"
      }
    },
    {
      color: "secondary",
      kind: "filled",
      css: {
        border: "unset",
        color: "$gray12"
      }
    },
    {
      color: "accent",
      kind: "filled",
      css: {
        border: "unset",
        color: "white"
      }
    },
    {
      color: "primary",
      kind: "outlined",
      css: {
        backgroundColor: "unset",
        color: "$primary",
        borderColor: "$primary"
      }
    },
    {
      color: "secondary",
      kind: "outlined",
      css: {
        backgroundColor: "unset",
        color: "$secondary",
        borderColor: "$secondary"
      }
    },
    {
      color: "accent",
      kind: "outlined",
      css: {
        backgroundColor: "unset",
        color: "$accent",
        borderColor: "$accent"
      }
    },
  ],
  defaultVariants: {
    kind: 'filled',
    color: 'accent',
    size: 'normal'
  }
})

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  )
}

export default Button