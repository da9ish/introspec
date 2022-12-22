import { useState } from 'react'

import { createColumnHelper } from '@tanstack/react-table'

import Button from 'components/Button'
import Flex from 'components/Flex'
import IconButton from 'components/IconButton'
import Separator from 'components/Seperator'
import Titlebar from 'components/Titlebar'
import Box from 'components/Box'
import Icon from 'components/Icon'
import { User, useUsersListQuery } from 'generated/schema'
import { Table, Tbody, Td, Tfoot, Th, Thead, Tr } from 'components/Table'
import Badge from 'components/Badge'

const columnHelper = createColumnHelper<User>()

const columns = [
  columnHelper.accessor('name', {
    header: () => 'Name',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('email', {
    header: () => 'Email',
    cell: (info) => info.renderValue()
  }),
  columnHelper.accessor('username', {
    header: () => 'Username',
    cell: (info) => info.renderValue()
  })
]

const Users: React.FC = () => {
  const [ userSearch, setUserSearch ] = useState('')
  const { data, loading, error } = useUsersListQuery({
    variables: {
      id: ''
    } as any
  })

  const toolbarActions = (
    <>
      <IconButton name="filter" onClick={() => {}} />
      <Separator decorative orientation="vertical" />
      <Button kind="secondary" icon="plus">New User</Button>
    </>
  )
  return (
    <Flex direction="column" css={{ width: '100%', height: 'calc(100vh - 60px)' }}>
      <Titlebar title="Users" actions={toolbarActions} actionIcon="refresh-ccw" searchText={userSearch} onAction={() => {}} onSearch={(value) => setUserSearch(value)} />
      {/* <Table<User>
        data={data?.usersList}
        loading={loading}
        error={error}
        columns={columns}
      /> */}
      <Table>
        <Thead>
          <Tr>
            <Th css={{ width: 190 }}>Club</Th>
            <Td align="center">MP</Td>
            <Td align="center">W</Td>
            <Td align="center">D</Td>
            <Td align="center">L</Td>
            <Td align="center">GF</Td>
            <Td align="center">GA</Td>
            <Td align="center">GD</Td>
            <Td align="center">Pts</Td>
            <Td css={{ width: 100 }} align="center">
              Last 5
            </Td>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Th css={{ width: 190 }}>Man City</Th>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center"><Badge>Test</Badge></Td>
            <Td align="center">
              <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                  <Icon name="check" />
                </Box>
                <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                  <Icon name="check" />
                </Box>
                <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                  <Icon name="check" />
                </Box>
                <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                  <Icon name="check" />
                </Box>
                <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                  <Icon name="check" />
                </Box>
              </Flex>
            </Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th css={{ width: 190 }}>Leicester City</Th>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">32</Td>
            <Td align="center">
              <Flex css={{ gap: '$1', jc: 'flex-end' }}>
                <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                  <Icon name="check" />
                </Box>
                <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                  <Icon name="check" />
                </Box>
                <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                  <Icon name="check" />
                </Box>
                <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                  <Icon name="check" />
                </Box>
                <Box css={{ width: 15, height: 15, bc: '$green9', borderRadius: '$round' }}>
                  <Icon name="check" />
                </Box>
              </Flex>
            </Td>
          </Tr>
        </Tfoot>
      </Table>
    </Flex>
  )
}

export default Users
