import get from 'lodash/get'
import type { ApolloError } from '@apollo/client'
import type { CSSProperties } from '@stitches/react'

import Flex from 'components/Flex'
import IconButton from 'components/IconButton'
import Text from 'components/Text'
import { Table, Tbody, Td, Th, Thead, Tr } from 'components/Table'

interface Action<P extends any> {
  name: string,
  icon: string,
  onClick: (record: P) => void
}

interface Column {
  name: string,
  identifier: string,
  style?: CSSProperties
}

interface Props<P extends any> {
  actions: Action<P>[],
  columns: Column[],
  data: P[],
  loading: boolean,
  error?: ApolloError
}

function DataTable<P extends any>({
  actions = [], columns, data, loading, error
}:Props<P>) {
  return (
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
            return <Td key={col.identifier} align="start">{col.name}</Td>
          })}
          {actions.length > 0 && <Td css={{ width: 100 }} align="end" />}
        </Tr>
      </Thead>
      <Tbody>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
        {data.length === 0 && <Text>No Records</Text>}
        {data.map((d) => {
          const getCellData = (col: any, idx: number) => {
            if (idx === 0) return <Th key={get(d, col.identifier)} style={{ width: 190, ...col.style }}>{get(d, col.identifier) || '--'}</Th>
            return <Td key={get(d, col.identifier)} align="start">{get(d, col.identifier) || '--'}</Td>
          }
          return (
            <Tr>
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
  )
}

export default DataTable
