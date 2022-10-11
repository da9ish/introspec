import { styled } from '../stiches.config'

const Flex = styled('div', {
  display: 'flex',
  variants: {
    wrap: {
      wrap: {
        flexWrap: 'wrap'
      },
      'no-wrap': {
        flexWrap: 'nowrap'
      },
      'wrap-reverse': {
        flexWrap: 'wrap-reverse'
      }
    },
    direction: {
      row: {
        flexDirection: 'row'
      },
      column: {
        flexDirection: 'column'
      },
      'row-reverse': {
        flexDirection: 'row-reverse'
      },
      'column-reverse': {
        flexDirection: 'column-reverse'
      }
    },
    justifyContent: {
      start: {
        justifyContent: 'flex-start'
      },
      center: {
        justifyContent: 'center'
      },
      end: {
        justifyContent: 'flex-end'
      },
      stretch: {
        justifyContent: 'stretch'
      },
      'space-between': {
        justifyContent: 'space-between'
      },
      'space-around': {
        justifyContent: 'space-around'
      },
      'space-evenly': {
        justifyContent: 'space-evenly'
      }
    },
    alignItems: {
      start: {
        alignItems: 'flex-start'
      },
      center: {
        alignItems: 'center'
      },
      end: {
        alignItems: 'flex-end'
      },
      stretch: {
        alignItems: 'stretch'
      }
    },
    gap: {
      none: {
        gap: 0
      },
      sm: {
        gap: '4px'
      },
      md: {
        gap: '8px'
      },
      lg: {
        gap: '16px'
      }
    },
    grow: {
      1: {
        flexGrow: 1
      },
      0: {
        flexGrow: 0
      }
    },
    display: {
      flex: {
        display: 'flex'
      },
      inline: {
        display: 'inline-flex'
      }
    }
  }
})

export default Flex
