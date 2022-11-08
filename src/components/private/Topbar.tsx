import { styled } from '@stitches/react'

import Clickable from 'components/Clickable'
import Flex from 'components/Flex'
import Icon from 'components/Icon'
import IconButton from 'components/IconButton'
import Select from 'components/Select'
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

const ApiContainer = styled(Flex, {
  transition: 'all 0.3s ease',

  variants: {
    setupMode: {
      true: {
        backgroundColor: 'white',
        border: '1px solid transparent',
        transform: 'scale(110%)',
        borderRadius: 4,
        boxShadow: 'rgb(68 138 255 / 90%) 0px 0px 0px 2px, rgb(0 0 0 / 7%) 0px 0px 20px 2px'
      }
    }
  }
})

const EnvironmentContainer = styled(Flex, {
  transition: 'all 0.3s ease',

  variants: {
    setupMode: {
      true: {
        backgroundColor: 'white',
        border: '1px solid transparent',
        transform: 'scale(110%)',
        borderRadius: 4,
        boxShadow: 'rgb(68 138 255 / 90%) 0px 0px 0px 2px, rgb(0 0 0 / 7%) 0px 0px 20px 2px'
      }
    }
  }
})

const ApiBar = styled(Flex, {
  alignItems: 'center',
  fontSize: '$body',
  fontFamily: '$code',
  borderRadius: '4px',
  marginRight: '8px'
})

interface TopbarProps {
  setupMode?: boolean,
  formValues?: Record<string, any>
}

const Topbar: React.FC<TopbarProps> = ({
  setupMode = false, formValues
}) => {
  const currentAccount = useCurrentAccountContext()
  const environments = currentAccount?.workspace?.environments || []

  return (
    <StyledTopbar>
      <ApiContainer setupMode={setupMode}>
        <Clickable size="small">
          <ApiBar>{`${currentAccount?.workspace?.identifier || formValues?.identifier}.introspec.app/graphql`}</ApiBar>
          <Icon name="copy" />
        </Clickable>
        <IconButton name="book" onClick={() => {}} />
      </ApiContainer>
      <EnvironmentContainer setupMode={setupMode}>
        <Select
          label="Live"
          value="live"
          icon="layers"
          labelKey="name"
          valueKey="identifier"
          size="small"
          options={formValues?.environments || environments}
        />
      </EnvironmentContainer>
    </StyledTopbar>
  )
}

export default Topbar
