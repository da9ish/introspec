import get from 'lodash/get'
import type { ApolloError } from '@apollo/client'
import type { CSSProperties } from '@stitches/react'

import Flex from 'components/Flex'
import IconButton from 'components/IconButton'
import Text from 'components/Text'
import { Table, Tbody, Td, Th, Thead, Tr } from 'components/Table'
import Input from './Input'
import Checkbox from './Checkbox'

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
  // actions: Action<P>[],
  // columns: Column[],
  // data: P[],
  // loading: boolean,
  // error?: ApolloError,
  // onRowClick?: (record: P, e: React.FormEvent<any>) => void
}

function FormTable<P extends any>() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th border="none" style={{ width: '24px' }} />
          <Th border="none">Name</Th>
          <Th border="none">Type</Th>
          <Th border="none">Default Value</Th>
          <Th border="none">Primary</Th>
          <Th border="none" style={{ width: '60px' }} align="end" />
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td border="none" width="24px">
            <IconButton name="menu" size={16} />
          </Td>
          <Td border="none">
            <Input name="identifier" placeholder="column_name" />
          </Td>
          <Td border="none">
            <Input name="dataType" placeholder="int" />
          </Td>
          <Td border="none">
            <Input name="defaultValue" placeholder="NULL" />
          </Td>
          <Td border="none">
            <Checkbox />
          </Td>
          <Td border="none" align="end">
            <Flex gap="md" justifyContent="end">
              <IconButton name="settings" size={16} />
              <IconButton name="x" size={16} />
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Td border="none" width="24px">
            <IconButton name="menu" size={16} />
          </Td>
          <Td border="none">
            <Input name="identifier" placeholder="column_name" />
          </Td>
          <Td border="none">
            <Input name="dataType" placeholder="int" />
          </Td>
          <Td border="none">
            <Input name="defaultValue" placeholder="NULL" />
          </Td>
          <Td border="none">
            <Checkbox />
          </Td>
          <Td border="none" align="end">
            <Flex gap="md" justifyContent="end">
              <IconButton name="settings" size={16} />
              <IconButton name="x" size={16} />
            </Flex>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  )
}

export default FormTable
