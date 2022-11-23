import { useState } from 'react'

import IconButton from 'components/IconButton'
import Searchbar from 'components/Searchbar'
import Text from 'components/Text'
import Titlebar from 'components/Titlebar'
import Flex from 'components/Flex'
import Separator from 'components/Seperator'
import { useSchemaQuery } from 'generated/schema'
import List from 'components/List'
import { colors } from 'colors'

const Schema: React.FC = () => {
  const [ tableSearch, setTableSearch ] = useState('')
  const [ columnSearch, setColumnSearch ] = useState('')
  const { data, loading, error } = useSchemaQuery()
  // const { selectedTable, setSelectedTable } = useState()

  return (
    <Flex direction="column" css={{ width: '100%', height: 'calc(100vh - 60px)' }}>
      <Titlebar title="Schema" actionIcon="refresh-ccw" onAction={() => {}} />
      <Flex>
        <Flex direction="column" css={{ width: '25%', height: '100%', borderRight: `1px solid ${colors.bgBorder}` }}>
          <Flex alignItems="center" justifyContent="space-between" css={{ padding: '12px 24px 12px 36px' }}>
            <Text type="title4">Tables</Text>
            <Flex gap="md" alignSelf="stretch">
              <Searchbar value={tableSearch} onChange={(value) => setTableSearch(value)} />
              <Separator decorative orientation="vertical" />
              <IconButton name="plus" onClick={() => {}} />
            </Flex>
          </Flex>
          <Flex direction="column">
            <List
              data={data?.schema?.tables}
              loading={loading}
              error={error}
              contents={{ title: 'name', subtitle: 'identifier' }}
              actions={[
                { name: 'Edit', icon: 'edit', onClick: () => {} },
                { name: 'Delete', icon: 'trash', onClick: () => {} }
              ]}
            />
          </Flex>
        </Flex>
        <Flex direction="column" grow={1}>
          <Flex alignItems="center" justifyContent="space-between" css={{ padding: '12px 24px 12px 36px' }}>
            <Text type="title4">Columns</Text>
            <Flex gap="md" alignSelf="stretch">
              <Searchbar value={columnSearch} onChange={(value) => setColumnSearch(value)} />
              <Separator decorative orientation="vertical" />
              <IconButton name="plus" onClick={() => {}} />
            </Flex>
          </Flex>
          <Flex direction="column">
            <List
              data={data?.schema?.tables[0].columns}
              loading={loading}
              error={error}
              contents={{ title: 'name', subtitle: 'identifier' }}
              actions={[
                { name: 'Edit', icon: 'edit', onClick: () => {} },
                { name: 'Delete', icon: 'trash', onClick: () => {} }
              ]}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Schema
