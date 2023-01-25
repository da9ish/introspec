import get from 'lodash/get'
import type { ApolloError } from '@apollo/client'
import type { CSSProperties } from '@stitches/react'

import type { ReactNode } from 'react'

import Flex from 'components/Flex'
import IconButton from 'components/IconButton'
import Skeleton from 'components/Skeleton'
import BlankState from 'components/BlankState'
import { Table, Tbody, Td, Th, Thead, Tr } from 'components/Table'
import TextRenderer from 'components/renderers/TextRenderer'

interface Action<P extends any> {
  name: string,
  icon: string,
  onClick: (record: P) => void
}

interface RendererOptions<T = any>{
  identifier: string,
  isHovered?: boolean,
  rowData: T,
  selection?: (number | string)[],
  style?: CSSProperties
}

interface Column<T = any>{
  name: string,
  identifier: string,
  style?: CSSProperties,
  renderer?: (options: RendererOptions<T>) => ReactNode
}

interface Props<P extends any> {
  actions: Action<P>[],
  columns: Column[],
  data: P[],
  loading: boolean,
  error?: ApolloError,
  onRowClick?: (record: P, e: React.FormEvent<any>) => void
}

function DataTable<P extends any>({
  actions = [], columns, data, loading, error, onRowClick
}:Props<P>) {
  return (
    <>
      {error && <BlankState heading={`Error: ${error.message}`} />}
      {!loading && data.length === 0 ? <BlankState heading="No records" /> : (
        <Table>
          <Thead>
            <Tr>
              {columns.map((col, idx) => {
                if (idx === 0) {
                  return (
                    <Th
                      key={col.identifier}
                      style={{ width: 190, ...col.style }}
                    >
                      {col.name}
                    </Th>
                  )
                }
                return <Th key={col.identifier} align="start">{col.name}</Th>
              })}
              {actions.length > 0 && <Td css={{ width: 100 }} align="end" />}
            </Tr>
          </Thead>
          <Tbody actionable={Boolean(onRowClick)}>
            {loading && Array.from(Array(5)).map((el) => (
              <Tr key={el}>
                {columns.map((col) => <Td><Skeleton kind="heading" key={col.identifier} /></Td>)}
              </Tr>
            ))}

            {data.map((d) => {
              const getCellData = (col: any, idx: number) => {
                const { renderer = TextRenderer } = col
                const rendererOptions = {
                  identifier: col.identifier,
                  rowData: d
                }

                if (idx === 0) return <Th key={get(d, col.name)} style={{ width: 190, ...col.style }}>{renderer(rendererOptions) || '--'}</Th>
                return <Td key={get(d, col.name)} align="start">{renderer(rendererOptions) || '--'}</Td>
              }
              return (
                <Tr onClick={(e) => onRowClick?.(d, e)}>
                  {columns.map((col, idx) => getCellData(col, idx))}
                  {actions.length > 0 && (
                  <Td css={{ width: 100 }} align="end">
                    <Flex gap="md" justifyContent="end">
                      {actions.map((act) => (
                        <IconButton
                          key={act.name}
                          name={act.icon}
                          size={16}
                          onClick={() => act.onClick(d)}
                        />
                      ))}
                    </Flex>
                  </Td>
                  )}
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      )}
    </>
  )
}

export type {
  Column,
  RendererOptions
}

export default DataTable
