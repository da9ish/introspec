import { styled } from '../stiches.config'
import Box from './Box'

const contentOptions = [ 'start', 'end', 'center', 'stretch', 'space-between', 'space-around', 'space-evenly' ] as const
const itemsOptions = [ 'start', 'end', 'center', 'stretch' ] as const
const columnOptions = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] as const
const gapOptions = [ 4, 8, 12, 16, 24, 28, 32, 40, 44, 48, 56 ] as const

const columnVariants = columnOptions
  .reduce((acc, curr) => {
    acc[curr] = { gridTemplateColumns: `repeat(${curr}, 1fr)` }
    return acc
  }, {} as Record<number, Record<string, string>>)

const rowVariants = columnOptions
  .reduce((acc, curr) => {
    acc[curr] = { gridTemplateRows: `repeat(${curr}, 1fr)` }
    return acc
  }, {} as Record<number, Record<string, string>>)

const generateVariants = (options: any, property: string) => options
  .reduce((acc: any, curr: any) => {
    acc[curr] = { [property]: curr }
    return acc
  }, {})

const Grid = styled(Box, {
  variants: {
    alignContent: generateVariants(contentOptions, 'alignContent'),
    alignItems: generateVariants(itemsOptions, 'alignItems'),
    columnGap: generateVariants(gapOptions, 'columnGap'),
    display: {
      grid: {
        display: 'grid'
      },
      'inline-grid': {
        display: 'inline-grid'
      }
    },
    gap: generateVariants(gapOptions, 'gap'),
    columns: columnVariants,
    rows: rowVariants,
    justifyContent: generateVariants(contentOptions, 'justifyContent'),
    justifyItems: generateVariants(itemsOptions, 'justifyItems'),
    rowGap: generateVariants(gapOptions, 'rowGap')
  },
  defaultVariants: {
    display: 'grid'
  }
})

export default Grid
