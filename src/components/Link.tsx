import { Link as RouterLink } from 'react-router-dom'

import { styled } from '@stitches/react'

const Link = styled(RouterLink, {
  textDecoration: 'none',
  color: '#313131',
  margin: '4px 0',
  transition: 'all 0.1s ease',
  cursor: 'pointer',
  padding: '0 8px',
  '&:hover': { textDecoration: 'underline', textDecorationColor: '$primary', textDecorationWidth: 2 }
})

export default Link
