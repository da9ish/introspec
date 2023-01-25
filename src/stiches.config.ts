import {
  amber,
  amberDark,
  blackA,
  green,
  greenDark,
  indigo,
  indigoDark,
  mauve,
  mauveDark,
  red,
  redDark,
  sand,
  sandDark,
  slate,
  slateDark,
  tomato,
  tomatoDark,
  yellow,
  yellowDark
} from '@radix-ui/colors'

import { createStitches, createTheme } from '@stitches/react'

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
      ...blackA,
      ...amberDark,
      ...slateDark,
      ...mauveDark,
      ...sandDark,
      ...indigoDark,
      ...redDark,
      ...tomatoDark,
      ...greenDark,
      ...yellowDark
    },
    fonts: {
      body: 'Fractul, sans-serif',
      code: "'Fira Code', monospace"
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
    }),
    truncate: (value: boolean) => (value ? ({
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }) : {})
  }
})

export const darkTheme = createTheme('dark-theme', {
  colors: {
    secondary: '#64FFDA',
    danger: '#EE5459',
    dangetHighlight: '#DB4340',
    background: '#FCFBF4',
    border: '#eee',
    ...colors,
    ...blackA,
    ...amber,
    ...slate,
    ...mauve,
    ...sand,
    ...indigo,
    ...red,
    ...tomato,
    ...green,
    ...yellow
  }
})

export { styled, css, keyframes, theme }
