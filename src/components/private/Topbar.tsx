import React from "react";
import { styled } from "../../stiches.config";
import { Box } from "../Box";
import { ReactComponent as Notification } from '../../assets/icons/notification.svg'

const StyledTopbar = styled(Box, {
  height: '72px',
  padding: '16px 32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const Topbar: React.FC = () => {
  return (
    <StyledTopbar>
      <Box css={{flexGrow: 1}} />
      <Box>
        <Notification />
      </Box>
    </StyledTopbar>
  )
}

export default Topbar