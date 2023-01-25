import { styled } from '@stitches/react'

import Flex from 'components/Flex'
import Text from 'components/Text'

interface Props {
  visual?: React.ReactNode,
  heading: string,
  description?: string,
  actions?: React.ReactNode
}

const Container = styled(Flex, {
  padding: 32
})

const BlankState: React.FC<Props> = ({ visual, heading, description, actions }) => (
  <Container direction="column" alignItems="center" justifyContent="center">
    {visual}
    <Text type="title2">{heading}</Text>
    <Text type="body">{description}</Text>
    {actions}
  </Container>
)

export type { Props as BlankStateProps }

export default BlankState
