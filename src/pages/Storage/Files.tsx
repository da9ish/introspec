import { useEffect, useState } from 'react'

import AddColumnView from 'components/views/AddColumnView'
import AddTableView from 'components/views/AddTableView'
import DataTable from 'components/DataTable'
import Flex from 'components/Flex'
import IconButton from 'components/IconButton'
import List from 'components/List'
import Searchbar from 'components/Searchbar'
import Separator from 'components/Seperator'
import Text from 'components/Text'
import Titlebar from 'components/Titlebar'
import { colors } from 'colors'
import { UpdateTableInput, Table, useSchemaQuery, Column, UpdateColumnInput } from 'generated/schema'
import { useViewDispatch } from 'hooks/useViewContext'

const columns = [
  { name: 'Name', identifier: 'name' },
  { name: 'Size', identifier: 'size' },
  { name: 'Type', identifier: 'type' },
  { name: 'Created at', identifier: 'createAt' },
  { name: 'Last modified at', identifier: 'lastModifiedAt' }
]

const Files: React.FC = () => {
  const { openView } = useViewDispatch()
  const [ selectedTable, setSelectedTable ] = useState<Table>()
  const [ tableSearch, setTableSearch ] = useState('')
  const [ columnSearch, setColumnSearch ] = useState('')
  const { data, loading, error } = useSchemaQuery()
  // const { selectedTable, setSelectedTable } = useState()

  const onAddTable = () => openView({
    component: AddTableView,
    params: {
      initialValues: { databaseId: data?.schema?.database.id || '', name: '', identifier: '' }
    },
    style: 'PANEL'
  })

  const onEditTable = (table: Table) => openView({
    component: AddTableView,
    params: {
      initialValues: table as UpdateTableInput
    },
    style: 'PANEL'
  })

  const onAddColumn = () => openView({
    component: AddColumnView,
    params: {
      initialValues: { tableId: selectedTable?.id || '', name: '', identifier: '', dataType: 'TEXT', isIndexed: false, constraints: [] }
    },
    style: 'PANEL'
  })

  const onEditColumn = (column: Column) => openView({
    component: AddColumnView,
    params: {
      initialValues: column as UpdateColumnInput
    },
    style: 'PANEL'
  })

  useEffect(() => {
    setSelectedTable(data?.schema?.tables[1])
  }, [ data ])

  return (
    <Flex direction="column" css={{ width: '100%', height: 'calc(100vh - 60px)' }}>
      <Titlebar title="Files" actionIcon="refresh-ccw" onAction={() => {}} />
      <Flex>
        <Flex direction="column" css={{ width: '25%', height: '100%', borderRight: `1px solid ${colors.bgBorder}` }}>
          <Flex alignItems="center" justifyContent="space-between" css={{ padding: '12px 24px 12px 36px', borderBottom: `1px solid ${colors.bgBorder}` }}>
            <Text type="title4">Buckets</Text>
            <Flex gap="md" alignSelf="stretch">
              <Searchbar value={tableSearch} onChange={(value) => setTableSearch(value)} />
              <Separator decorative orientation="vertical" />
              <IconButton name="plus" onClick={onAddTable} />
            </Flex>
          </Flex>
          <Flex direction="column">
            <List
              data={data?.schema?.tables}
              loading={loading}
              error={error}
              contents={{ title: 'name', subtitle: 'identifier' }}
              actions={[
                { name: 'Edit', icon: 'edit', onClick: (table: Table) => onEditTable(table) },
                { name: 'Delete', icon: 'trash', onClick: () => {} }
              ]}
            />
          </Flex>
        </Flex>
        <Flex direction="column" grow={1}>
          <Flex alignItems="center" justifyContent="space-between" css={{ padding: '12px 24px 12px 36px', borderBottom: `1px solid ${colors.bgBorder}` }}>
            <Text type="title4">Files & Folders</Text>
            <Flex gap="md" alignSelf="stretch">
              <Searchbar value={columnSearch} onChange={(value) => setColumnSearch(value)} />
              <Separator decorative orientation="vertical" />
              <IconButton name="plus" onClick={onAddColumn} />
            </Flex>
          </Flex>
          <Flex direction="column" grow={1}>
            <DataTable actions={[]} columns={columns} data={[]} loading={false} error={undefined} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Files
