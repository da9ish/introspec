import { blackA } from "@radix-ui/colors";
import { styled } from "../stiches.config";

export const Input = styled('input', {
  width: '100%',
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 10px',
  margin: '4px 0',
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
