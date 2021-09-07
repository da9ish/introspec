import { blackA } from "@radix-ui/colors";
import { styled } from "../stiches.config";

export const Input = styled('input', {
  all: 'unset',
  width: 200,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 10px',
  marginY: 4,
  fontSize: 15,
  lineHeight: 1,
  backgroundColor: blackA.blackA5,
  boxShadow: `0 0 0 1px ${blackA.blackA5}`,
  '&:focus': {
    boxShadow: `0 0 0 2px black`
  },

  variants: {
    size: {
      small: {
        height: 36
      },
      normal: {
        height: 45
      }
    }
  },
  defaultVariants: {
    size: 'normal'
  }
});