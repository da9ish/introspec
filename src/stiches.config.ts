import {
  gray,
  blue,
  red,
  green,
  yellow,
  grayDark,
  blueDark,
  redDark,
  greenDark,
} from "@radix-ui/colors";

import { createStitches } from "@stitches/react";

const { styled, css, keyframes, theme } = createStitches({
  theme: {
    colors: {
      primary: "#3D5AFE",
      secondary: "#64FFDA",
      background: "#FCFBF4",
      border: "#eee",
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...yellow,
      ...grayDark,
      ...blueDark,
      ...redDark,
      ...greenDark,
    },
    fonts: {
      body: "Poppins, sans-serif",
    },
  },
  media: {
    mobile: "(min-width: 480px)",
    tab: "(min-width: 720px)",
    desktop: "(min-width: 1024px)",
  },
  utils: {
    marginX: () => (value: number | string) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: () => (value: number | string) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: () => (value: number | string) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: () => (value: number | string) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

export { styled, css, keyframes, theme };
