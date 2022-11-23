import type { ApolloError } from '@apollo/client'
import { styled } from '@stitches/react'
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'

import Error from 'components/Error'
import Loader from 'components/Loader'

interface Props<T> {
  data: any,
  loading: boolean,
  error?: ApolloError,
  columns: ColumnDef<T, string>[]
}

const StyledTable = styled('table', {
  borderSpacing: 0,
  boxSizing: 'border-box',
  width: '100%'
})

const THead = styled('thead', {
  height: 36
})

const TBody = styled('tbody', {
  tr: {
    height: 48,

    '&:hover': {
      backgroundColor: '$bgBaseHover'
    }
  }
})

const TRow = styled('tr', {
  boxSizing: 'content-box',
  fontSize: 12,
  color: '$labelMuted',
  fontWeight: 'normal',
  textAlign: 'left',
  borderBottom: '0.5px solid $bgBorderSolid',

  '& > :nth-child(1)': {
    paddingLeft: '36px'
  },

  '& > :last-child': {
    paddingRight: '22px'
  }
})

const TH = styled('th', {
  boxSizing: 'content-box',
  fontSize: 12,
  color: '$labelMuted',
  fontWeight: 'normal',
  textAlign: 'left'
})

const TD = styled('td', {
  fontSize: 13,
  color: '$labelBase',
  fontWeight: 'normal',
  textAlign: 'left'
})

function Table<T>({ data = [], loading, error, columns }: Props<T>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  if (loading) return <Loader />
  if (error) return <Error error={error} />

  return (
    <StyledTable>
      <THead>
        {table.getHeaderGroups().map((headerGroup) => (
          <TRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TH key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </TH>
            ))}
          </TRow>
        ))}
      </THead>
      <TBody>
        {table.getRowModel().rows.map((row) => (
          <TRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TD key={cell.id} style={{ width: cell.column.getSize() }}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TD>
            ))}
          </TRow>
        ))}
      </TBody>
    </StyledTable>
  )
}

export default Table
