import { styled, keyframes } from '@stitches/react'

const pulse = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: '100%' }
})

const Skeleton = styled('div', {
  backgroundColor: '$slate4',
  position: 'relative',
  overflow: 'hidden',

  '&::after': {
    animationName: `${pulse}`,
    animationDuration: '500ms',
    animationDirection: 'alternate',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    backgroundColor: '$slate6',
    borderRadius: 'inherit',
    bottom: 0,
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },

  variants: {
    kind: {
      avatar1: {
        borderRadius: '50%',
        height: 15,
        width: 15
      },
      avatar2: {
        borderRadius: '50%',
        height: 25,
        width: 25
      },
      avatar3: {
        borderRadius: '50%',
        height: 35,
        width: 35
      },
      avatar4: {
        borderRadius: '50%',
        height: 45,
        width: 45
      },
      avatar5: {
        borderRadius: '50%',
        height: 65,
        width: 65
      },
      avatar6: {
        borderRadius: '50%',
        height: 80,
        width: 80
      },
      text: {
        height: 5
      },
      title: {
        height: 25
      },
      heading: {
        height: 15
      },
      button: {
        borderRadius: 5,
        height: 25,
        width: 65
      }
    }
  },
  defaultVariants: {
    kind: 'text'
  }
})

export default Skeleton
