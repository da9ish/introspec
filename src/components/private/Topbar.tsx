import { styled } from '@stitches/react'
// import { useContext } from 'react'

// import Toast from 'components/Toast'
// import ToastContext from 'contexts/ToastContext'
import Clickable from 'components/Clickable'
import Flex from 'components/Flex'
import Icon from 'components/Icon'
import IconButton from 'components/IconButton'
import Select from 'components/Select'
import { colors } from 'colors'
import { useCurrentAccountContext } from 'contexts/CurrentAccountContext'

const StyledTopbar = styled('header', {
  boxSizing: 'border-box',
  height: '60px',
  flexShrink: 0,
  padding: '0 24px 0 36px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '$bgBase',
  borderBottom: '1px solid $bgBorder',
  borderTopRightRadius: 15
})

const ApiContainer = styled(Flex, {
  transition: 'all 0.3s ease',
  color: '$labelMuted',

  variants: {
    setupMode: {
      true: {
        backgroundColor: '$bgBase',
        border: '1px solid transparent',
        transform: 'scale(110%)',
        borderRadius: 4,
        boxShadow: 'rgb(62 99 221 / 90%) 0px 0px 0px 3px, rgb(0 0 0 / 7%) 0px 0px 20px 2px'
      }
    }
  }
})

const EnvironmentContainer = styled(Flex, {
  transition: 'all 0.3s ease',

  variants: {
    setupMode: {
      true: {
        backgroundColor: '$bgBase',
        border: '1px solid transparent',
        transform: 'scale(110%)',
        borderRadius: 4,
        boxShadow: 'rgb(62 99 221 / 90%) 0px 0px 0px 3px, rgb(0 0 0 / 7%) 0px 0px 20px 2px'
      }
    }
  }
})

const ApiBar = styled(Flex, {
  alignItems: 'center',
  fontSize: '$body',
  fontFamily: '$code',
  color: '$labelMuted',
  borderRadius: '4px',
  marginRight: '8px',

  '&:hover': {
    color: '$labelTitle'
  }
})

interface TopbarProps {
  setupMode?: boolean,
  formValues?: Record<string, any>
}

const Topbar: React.FC<TopbarProps> = ({
  setupMode = false, formValues
}) => {
  // const { setOpen } = useContext(ToastContext)!
  const currentAccount = useCurrentAccountContext()
  const environments = currentAccount?.workspace?.environments || []

  return (
    <StyledTopbar>
      {/* <Toast
        title="Alert heading"
        description="
        A modal dialog that interrupts the user with important content and expects a response.
        "
        kind="error"
        actionProps={{
          altText: 'Close',
          children: 'Close',
          size: 'small',
          onClick: () => setOpen(false)
        }}
      /> */}
      <ApiContainer setupMode={setupMode}>
        <Clickable size="small">
          <ApiBar>{`${currentAccount?.workspace?.identifier || formValues?.identifier}.introspec.app/graphql`}</ApiBar>
          <Icon color={colors.labelMuted} name="copy" />
        </Clickable>
        <IconButton
          name="book"
          // onClick={() => setOpen(true)}
        />
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
