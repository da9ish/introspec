import { styled } from "../stiches.config"
import { Box } from "../components/Box";

export const Alert = styled(Box, {
  padding: '8px 16px',
  borderRadius: '8px',

  variants: {
    kind: {
      error: {
        color: "$red10",
        backgroundColor: "$red12"
      },
      success: {
        color: "$green10",
        backgroundColor: "$green12"
      },
      warning: {
        color: "$yellow10",
        backgroundColor: "$yellow2"
      },
    }
  }
})