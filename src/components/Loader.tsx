import { blue } from '@radix-ui/colors'
import { SpinnerRoundFilled } from 'spinners-react'

import Flex from 'components/Flex'
import Text from 'components/Text'

const Loader: React.FC = () => (
  <Flex css={{ width: '100%', height: '100%' }} direction="column" alignItems="center" justifyContent="center">
    <SpinnerRoundFilled color={blue.blue10} speed={50} />
    <Text>Introspecting...</Text>
  </Flex>
)

export default Loader
