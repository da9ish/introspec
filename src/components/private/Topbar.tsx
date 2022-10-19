import { styled } from '@stitches/react'

import Box from 'components/Box'
import Clickable from 'components/Clickable'
import Flex from 'components/Flex'
import Icon from 'components/Icon'
import IconButton from 'components/IconButton'
import { useCurrentAccountContext } from 'contexts/CurrentAccountContext'

const StyledTopbar = styled('header', {
  boxSizing: 'border-box',
  height: '60px',
  flexShrink: 0,
  padding: '0 24px 0 36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #F8F9FB'
})

const ApiBar = styled(Flex, {
  alignItems: 'center',
  fontSize: '$body',
  fontFamily: '$code',
  borderRadius: '4px',
  marginRight: '8px'
})

const Environment = styled(Box, {
  marginLeft: '8px',
  fontFamily: '$body',
  fontSize: '$body'
})

const Topbar: React.FC = () => {
  const currentAccount = useCurrentAccountContext()

  return (
    <StyledTopbar>
      <Flex>
        <Clickable>
          <ApiBar>{`${currentAccount?.workspace?.identifier}.introspec.app/graphql`}</ApiBar>
          <Icon name="copy" />
        </Clickable>
        <IconButton name="book" onClick={() => {}} />
      </Flex>
      {/* <Select
      ariaLabel="environments"
      placeholder="Environment"
      label="Environments"
      options={[
        { label: 'Develop', value: 'develop' },
        { label: 'Staging', value: 'staging' },
        { label: 'Live', value: 'live' }
      ]}
    /> */}
      <Clickable>
        <Icon name="layers" />
        <Environment>Staging</Environment>
      </Clickable>
    </StyledTopbar>
  )
}

export default Topbar
