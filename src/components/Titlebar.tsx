import { styled } from '@stitches/react'
import type React from 'react'

import Flex from 'components/Flex'
import IconButton from 'components/IconButton'
import Separator from 'components/Seperator'
import Text from 'components/Text'

import Searchbar from 'components/Searchbar'

interface Props {
  title: string,
  actions?: React.ReactNode,
  actionIcon: string,
  canSearch?: boolean,
  searchText?: string,
  onAction: () => void,
  onSearch?: (value: string) => void
}

const Container = styled(Flex, {
  padding: '12px 24px 12px 36px',
  borderBottom: '1px solid $bgBorder'
})

const PrimaryContent = styled(Flex, {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-start',
  alignSelf: 'stretch'
})

const SecondaryContent = styled(Flex, {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-end'
})

const Titlebar: React.FC<Props> = ({
  title, canSearch = true, actions, actionIcon, onAction, onSearch
}) => (
  <Container alignItems="center">
    <PrimaryContent gap="md">
      <Text type="title2">{title}</Text>
      <Separator decorative orientation="vertical" />
      <IconButton name={actionIcon} onClick={onAction} />
      {canSearch && onSearch && (
        <Searchbar value="" onChange={onSearch} />
      )}
    </PrimaryContent>
    <SecondaryContent gap="md">
      {actions}
    </SecondaryContent>
  </Container>
)

export default Titlebar
