import { styled } from '../stiches.config'

const Text = styled('span', {
  variants: {
    type: {
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
      }
    },
    color: {
      primary: {
        color: '#282A30'
      },
      muted: {
        color: '#6b6f76'
      }
    }
  },
  defaultVariants: {
    type: 'body',
    color: 'primary'
  }
})

export default Text
