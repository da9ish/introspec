import { styled } from "../stiches.config";
import { Box } from "./Box";

export const Card = styled(Box, {
  transition: "all 0.3s ease",

  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  padding: '16px 32px',
  border: '1px solid #F0EEE0',
  borderRadius: '20px',
  margin: '8px 0',

  "&:hover": {
    borderColor: '#BFBEB4'
  }
})