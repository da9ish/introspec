import { useState } from 'react'

import Button from 'components/Button'
import DataTable from 'components/DataTable'
import Flex from 'components/Flex'
import IconButton from 'components/IconButton'
import Separator from 'components/Separator'
import Titlebar from 'components/Titlebar'
import { User, useUsersListQuery } from 'generated/schema'

const columns = [
  { name: 'Name', identifier: 'name' },
  { name: 'Email', identifier: 'email' },
  { name: 'Phone', identifier: 'phone' },
  { name: 'Provider', identifier: 'provider' },
  { name: 'Last Sign In', identifier: 'lastSignIn' },
  { name: 'Created', identifier: 'createdAt' }
]

const Users: React.FC = () => {
  const [ userSearch, setUserSearch ] = useState('')
  const { data: { usersList = [] } = {}, loading, error } = useUsersListQuery({
    variables: {
      id: ''
    } as any
  })

  const toolbarActions = (
    <>
      <IconButton name="filter" onClick={() => {}} />
      <Separator orientation="vertical" />
      <Button kind="secondary" icon="plus">New User</Button>
    </>
  )
  return (
    <Flex direction="column" css={{ width: '100%', height: 'calc(100vh - 60px)' }}>
      <Titlebar title="Users" actions={toolbarActions} actionIcon="refresh-ccw" searchText={userSearch} onAction={() => {}} onSearch={(value) => setUserSearch(value)} />
      <DataTable
        actions={[
          { name: 'Edit', icon: 'edit', onClick: () => {} },
          { name: 'Delete', icon: 'trash', onClick: () => {} }
        ]}
        columns={columns}
        data={usersList as User[]}
        loading={loading}
        error={error}
      />
    </Flex>
  )
}

export default Users
