import {
  gray,
  red,
  green,
  yellow,
  indigo,
  indigoDark,
  yellowDark,
  grayDark,
  redDark,
  greenDark
} from '@radix-ui/colors'

import { createStitches } from '@stitches/react'

import { colors } from 'colors'

const { styled, css, keyframes, theme } = createStitches({
  theme: {
    colors: {
      secondary: '#64FFDA',
      danger: '#EE5459',
      dangetHighlight: '#DB4340',
      background: '#FCFBF4',
      border: '#eee',
      ...colors,
      // ...gray,
      ...grayDark,
      // ...indigo,
      ...indigoDark,
      // ...red,
      ...redDark,
      // ...green,
      ...greenDark,
      // ...yellow,
      ...yellowDark
    },
    fonts: {
      body: 'Poppins, sans-serif',
      code: "'Fira Code', monospace;"
    },
    fontSizes: {
      body: '13px',
      heading: '18px',
      button: '12px'
    }
  },
  media: {
    mobile: '(min-width: 480px)',
    tab: '(min-width: 720px)',
    desktop: '(min-width: 1024px)'
  },
  utils: {
    marginX: () => (value: number | string) => ({
      marginLeft: value,
      marginRight: value
    }),
    marginY: () => (value: number | string) => ({
      marginTop: value,
      marginBottom: value
    }),
    paddingX: () => (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    paddingY: () => (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value
    })
  }
})

export { styled, css, keyframes, theme }
