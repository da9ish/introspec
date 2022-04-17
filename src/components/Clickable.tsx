import { grayA } from "@radix-ui/colors";
import { styled } from "../stiches.config";

const Clickable = styled('div', {
  transition: "all 0.1s ease",

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: "pointer",
  fontSize: '13px',
  outline: 'unset',
  border: 'none',
  backgroundColor: "transparent",
  borderRadius: '4px',
  padding: '7px',
  color: '#282A30',

  '&:hover': {
    backgroundColor: grayA.grayA2,
  },
})

export default Clickable