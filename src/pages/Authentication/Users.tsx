import { useState } from 'react'

import { createColumnHelper } from '@tanstack/react-table'

import Button from 'components/Button'
import Flex from 'components/Flex'
import IconButton from 'components/IconButton'
import Separator from 'components/Seperator'
import Titlebar from 'components/Titlebar'
import { User, useUsersListQuery } from 'generated/schema'
import Table from 'components/Table'

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
  const { data, loading, error } = useUsersListQuery()

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
      <Table<User> data={data?.usersList} loading={loading} error={error} columns={columns} />
    </Flex>
  )
}

export default Users
