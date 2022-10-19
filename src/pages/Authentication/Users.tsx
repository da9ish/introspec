import Button from 'components/Button'
import Flex from 'components/Flex'
import IconButton from 'components/IconButton'
import Separator from 'components/Seperator'
import Titlebar from 'components/Titlebar'

const Users: React.FC = () => {
  const toolbarActions = (
    <>
      <IconButton name="filter" onClick={() => {}} />
      <Separator decorative orientation="vertical" />
      <Button kind="secondary" icon="plus">New User</Button>
    </>
  )
  return (
    <Flex direction="column" css={{ width: '100%', height: 'calc(100vh - 60px)' }}>
      <Titlebar title="Users" actions={toolbarActions} actionIcon="refresh-ccw" onAction={() => {}} onSearch={() => {}} />
    </Flex>
  )
}

export default Users
