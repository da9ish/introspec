import { useState } from 'react'

import { styled } from '@stitches/react'

import compact from 'lodash/compact'

import DataTable from 'components/DataTable'
import Flex from 'components/Flex'
import Titlebar from 'components/Titlebar'
import Icon from 'components/Icon'
import Button from 'components/Button'
import IconButton from 'components/IconButton'
import Separator from 'components/Separator'
import Code from 'components/Code'
import { File, useStorageDirectoryQuery } from 'generated/schema'

const columns = [
  { name: 'Name', identifier: 'name', style: { width: '30%' } },
  { name: 'Size', identifier: 'size' },
  { name: 'Type', identifier: 'type' },
  { name: 'Created at', identifier: 'createAt' },
  { name: 'Last modified at', identifier: 'lastModifiedAt' }
]

const FileToolbar = styled(Flex, {
  padding: 12,
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid $bgBorder'
})

const PathContainer = styled(Flex, {
  color: '$labelMuted'
})

const StyledPath = styled(Code, {
  display: 'flex',
  alignItems: 'center',
  gap: 8
})

const Path = ({ path }: {path: string}) => {
  const pathTokens = compact(path.split('/'))
  return (
    <PathContainer alignItems="center" gap="md">
      {pathTokens.map((token, idx) => {
        const isLastToken = idx !== pathTokens.length - 1

        return token && (
          <StyledPath variant="gray">
            {token}
            {isLastToken && <Icon name="chevron-right" size={12} />}
          </StyledPath>
        )
      })}
    </PathContainer>
  )
}

const Files: React.FC = () => {
  const [ currentPath, setCurrentPath ] = useState('/')
  const { data, loading, error } = useStorageDirectoryQuery({
    variables: {
      path: currentPath
    }
  })
  const directoryData = (data?.storageDirectory?.folders || []).map((folder) => ({
    id: folder.id,
    bucketId: folder.bucketId,
    name: folder.name,
    identifier: folder.identifier,
    relativePath: folder.relativePath,
    size: '',
    fileType: 'folder'
  })).concat(data?.storageDirectory?.files || [])

  return (
    <Flex direction="column" css={{ width: '100%', height: 'calc(100vh - 60px)' }}>
      <Titlebar title="Files" actionIcon="refresh-ccw" onAction={() => {}} />
      <Flex>
        <Flex direction="column" grow={1}>
          <FileToolbar role="toolbar" gap="lg">
            <Flex alignItems="center" gap="md">
              <IconButton name="chevron-left" size={16} />
              <Path path={data?.storageDirectory?.path || '/'} />
            </Flex>
            <Flex alignSelf="stretch" gap="lg">
              <Flex role="group" alignItems="center" gap="sm">
                <IconButton name="align-left" size={16} />
                <IconButton name="align-right" size={16} />
              </Flex>
              <Separator orientation="vertical" />
              <Flex role="group" alignItems="center" gap="md">
                <Button size="small" kind="secondary" icon="upload" iconPlacement="left">Upload Files</Button>
                <Button size="small" kind="secondary" icon="folder-plus" iconPlacement="left">Create Folder</Button>
              </Flex>
            </Flex>
          </FileToolbar>
          <Flex direction="column" grow={1}>
            <DataTable
              actions={[]}
              columns={columns}
              data={directoryData as File[]}
              loading={loading}
              error={error}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Files
