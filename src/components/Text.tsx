import { slate, slateDark } from '@radix-ui/colors'
import { styled, VariantProps } from '@stitches/react'
import type { PropsWithChildren } from 'react'

interface TextProps extends PropsWithChildren,
VariantProps<typeof StyledText> {
  color?: string
}

const sizeOptions = [ 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 24, 32, 36, 40, 48, 64 ] as const
const linHeightOptions = [ 0.5, 1, 2, 3 ] as const
const alignOptions = [ 'left', 'right', 'center', 'justify', 'initial', 'inherit' ]

const generateVariants = (options: any, property: string) => options
  .reduce((acc: any, curr: any) => {
    acc[curr] = { [property]: curr }
    return acc
  }, {})

const StyledText = styled('span', {
  variants: {
    fontWeight: {
      400: {
        fontWeight: 400
      },
      500: {
        fontWeight: 500
      },
      700: {
        fontWeight: 700
      },
      900: {
        fontWeight: 900
      }
    },
    fontSize: generateVariants(sizeOptions, 'fontSize'),
    lineHeight: generateVariants(linHeightOptions, 'lineHeight'),
    align: generateVariants(alignOptions, 'textAlign'),
    type: {
      display: {
        fontFamily: '$body',
        fontSize: '64px',
        fontWeight: 700
      },
      body: {
        fontFamily: '$body',
        fontSize: '13px',
        fontWeight: 400
      },
      code: {
        fontFamily: '$body',
        fontSize: '13px',
        fontWeight: 400
      },
      title1: {
        fontFamily: '$body',
        fontSize: '24px',
        fontWeight: 500,
        lineHeight: '32px'
      },
      title2: {
        fontFamily: '$body',
        fontSize: '20px',
        fontWeight: 500
      },
      title3: {
        fontFamily: '$body',
        fontSize: '18px',
        fontWeight: 500
      },
      title4: {
        fontFamily: '$body',
        fontSize: '16px',
        fontWeight: 500
      },
      label: {
        fontFamily: '$body',
        fontSize: '12px',
        fontWeight: 400
      }
    },
    kind: {
      primary: {
        color: slateDark.slate12
      },
      muted: {
        color: slateDark.slate11
      }
    }
  },
  defaultVariants: {
    type: 'body',
    kind: 'primary'
  }
})

const Text = ({ children, color, ...props }: TextProps) => (
  <StyledText {...props} css={{ color }}>{children}</StyledText>
)

export default Text
