import compact from 'lodash/compact'
import { useState } from 'react'
import { styled } from '@stitches/react'

import AddFolderView from 'components/views/AddFolderView'
import Button from 'components/Button'
import Code from 'components/Code'
import DataTable from 'components/DataTable'
import Flex from 'components/Flex'
import Icon from 'components/Icon'
import IconButton from 'components/IconButton'
import Separator from 'components/Separator'
import Titlebar from 'components/Titlebar'
import { File, Folder, UpdateFolderInput, useStorageDirectoryQuery } from 'generated/schema'
import { useViewDispatch } from 'hooks/useViewContext'
import { useCurrentAccountContext } from 'contexts/CurrentAccountContext'
import Clickable from 'components/Clickable'

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

const StyledPath = styled(Clickable, {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  fontFamily: '$code',
  fontSize: 'max(12px, 85%)',
  whiteSpace: 'nowrap',
  backgroundColor: '$slate3',
  color: '$slate11'
})

const Path = ({
  path, setPath
}: {
  path: string, setPath: React.Dispatch<React.SetStateAction<string>>
}) => {
  const pathTokens = compact(path.split('/'))
  return (
    <PathContainer alignItems="center" gap="md">
      {pathTokens.map((token, idx) => {
        const isLastToken = idx !== pathTokens.length - 1

        return token && (
          <>
            <StyledPath onClick={() => setPath(pathTokens.slice(0, idx + 1).join('/'))}>
              {token}
            </StyledPath>
            {isLastToken && <Icon name="chevron-right" size={12} />}
          </>
        )
      })}
    </PathContainer>
  )
}

const Files: React.FC = () => {
  const { openView } = useViewDispatch()
  const currentAccount = useCurrentAccountContext()
  const [ currentPath, setCurrentPath ] = useState(currentAccount?.workspace?.identifier || '/')
  const queryVariables = {
    path: currentPath
  }
  const { data, loading, error } = useStorageDirectoryQuery({
    variables: queryVariables
  })
  const directoryData = (data?.storageDirectory?.folders || [])
    .filter((folder) => folder.relativePath === `${currentPath}/${folder.identifier}`)
    .map((folder) => ({
      id: folder.id,
      bucketId: folder.bucketId,
      name: folder.name,
      identifier: folder.identifier,
      relativePath: folder.relativePath,
      size: '',
      fileType: 'folder'
    })).concat(data?.storageDirectory?.files || [])

  const onAddFolder = () => openView({
    component: AddFolderView,
    params: {
      initialValues: {
        bucketId: data?.storageDirectory?.bucket.id || '',
        folderId: data?.storageDirectory?.folders.find((folder) => folder.relativePath === currentPath)?.id || '',
        name: '',
        identifier: '',
        relativePath: currentPath
      },
      currentPath: currentPath.split('/')[currentPath.split('/').length - 1],
      queryVariables
    },
    style: 'PANEL'
  })

  const onEditFolder = (folder: Folder) => openView({
    component: AddFolderView,
    params: {
      initialValues: folder as UpdateFolderInput,
      queryVariables
    },
    style: 'PANEL'
  })

  return (
    <Flex direction="column" css={{ width: '100%', height: 'calc(100vh - 60px)' }}>
      <Titlebar title="Files" actionIcon="refresh-ccw" onAction={() => {}} />
      <Flex>
        <Flex direction="column" grow={1}>
          <FileToolbar role="toolbar" gap="lg">
            <Flex alignItems="center" gap="md">
              <IconButton
                name="chevron-left"
                size={16}
                onClick={() => setCurrentPath((prev) => {
                  if (prev === '/') return '/'
                  const pathTokens = compact(prev.split('/'))
                  return pathTokens.slice(0, pathTokens.length - 1).join('/')
                })}
              />
              <Path path={data?.storageDirectory?.path || '/'} setPath={setCurrentPath} />
            </Flex>
            <Flex alignSelf="stretch" gap="lg">
              <Flex role="group" alignItems="center" gap="sm">
                <IconButton name="chevrons-down" size={16} />
                <IconButton name="chevrons-up" size={16} />
              </Flex>
              <Separator orientation="vertical" />
              <Flex role="group" alignItems="center" gap="md">
                <Button size="small" kind="secondary" icon="upload" iconPlacement="left">Upload Files</Button>
                <Button size="small" kind="secondary" icon="folder-plus" iconPlacement="left" onClick={onAddFolder}>Create Folder</Button>
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
              onRowClick={(r) => setCurrentPath(r.relativePath)}
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Files
