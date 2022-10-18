import { styled } from '@stitches/react'

import Flex from 'components/Flex'
import IconButton from 'components/IconButton'
import Separator from 'components/Seperator'
import Text from 'components/Text'

interface Props {
  title: string,
  actionIcon: string,
  onAction: () => void
}

const Container = styled(Flex, {
  padding: '12px 24px 12px 36px',
  borderBottom: '1px solid #F8F9FB'
})

const Titlebar: React.FC<Props> = ({
  title, actionIcon, onAction
}) => (
  <Container alignItems="center" gap="md">
    <Text type="title1">{title}</Text>
    <Separator decorative orientation="vertical" />
    <IconButton name={actionIcon} onClick={onAction} />
  </Container>
)

export default Titlebar
