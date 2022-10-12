import Titlebar from 'components/Titlebar'

import Flex from '../../components/Flex'

const Schema: React.FC = () => (
  <Flex direction="column" css={{ width: '100%', height: 'calc(100vh - 60px)' }}>
    <Titlebar title="Schema" actionIcon="refresh-ccw" onAction={() => {}} />
  </Flex>
)

export default Schema
