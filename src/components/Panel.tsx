import { css, styled } from '@stitches/react'

export const panelStyles = css({
  backgroundColor: '$bgSubtle',
  borderRadius: 15,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px'
})

export const Panel = styled('div', panelStyles)
