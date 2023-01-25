import { styled } from '@stitches/react'

export const Caption = styled('caption', {
  textAlign: 'start',
  marginBottom: 25
})

export const Tbody = styled('tbody', {
  width: '100%',
  color: '$labelTitle',

  variants: {
    actionable: {
      true: {
        '& tr:hover': {
          cursor: 'pointer',
          backgroundColor: '$slate2'
        }
      }
    }
  },
  defaultVariants: {
    actionable: false
  }
})

export const Tfoot = styled('tfoot', {
  color: '$labelBase'
})

export const Tr = styled('tr', {
  '& > :first-child': {
    padding: '10px 8px 10px 10px'
  },
  '& > :last-child': {
    padding: '10px 10px 10px 8px'
  }
})

export const Th = styled('th', {
  truncate: true,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontWeight: 'unset',
  textAlign: 'start',
  fontSize: 13,
  padding: '10px 8px',
  variants: {
    align: {
      start: {
        textAlign: 'start'
      },
      center: {
        textAlign: 'center'
      },
      end: {
        textAlign: 'end'
      }
    },
    border: {
      none: {
        borderBottom: 'none'
      },
      solid: {
        borderBottom: '1px solid $slate4'
      },
      dashed: {
        borderBottom: '1px dashed $slate8'
      }
    }
  },
  defaultVariants: {
    align: 'start',
    border: 'solid'
  }
})

export const Td = styled('td', {
  truncate: true,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  padding: '10px 8px',
  fontSize: 13,
  variants: {
    align: {
      start: {
        textAlign: 'start'
      },
      center: {
        textAlign: 'center'
      },
      end: {
        textAlign: 'end'
      }
    },
    border: {
      none: {
        borderBottom: 'none'
      },
      solid: {
        borderBottom: '1px solid $slate4'
      },
      dashed: {
        borderBottom: '1px dashed $slate8'
      }
    }
  },
  defaultVariants: {
    align: 'start',
    border: 'solid'
  }
})

export const Thead = styled('thead', {
  [`& ${Th}`]: {
    fontSize: 12,
    fontWeight: 500,
    color: '$labelBase'
  },
  [`& ${Td}`]: {
    fontSize: 12,
    fontWeight: 500,
    color: '$labelBase'
  }
})

export const Table = styled('table', {
  width: '100%',
  tableLayout: 'fixed',
  borderSpacing: 0,
  variants: {
    striped: {
      true: {
        [`& ${Tbody}`]: {
          [`& ${Tr}`]: {
            '&:nth-child(odd)': {
              backgroundColor: '$slate2'
            }
          }
        }
      }
    }
  }
})
