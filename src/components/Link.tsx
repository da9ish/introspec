import { Link as RouterLink } from "react-router-dom";
import { styled } from "../stiches.config";

export const Link = styled(RouterLink, {
  textDecoration: 'none',
  color: '#313131',
  margin: '4px 0'
})