import React from "react";
import { styled } from "../../stiches.config";
import { Box } from "../Box";
import Clickable from "../Clickable";
import Flex from "../Flex";
import Icon from "../Icon";
import IconButton from "../IconButton";

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
  fontSize: '$body',
})


const Topbar: React.FC = () => {
  return (
    <StyledTopbar>
      <Flex>
        <Clickable>
          <ApiBar>keepworks.introspec.app/graphql</ApiBar>
          <Icon name="copy" />
        </Clickable>
        <IconButton name="book" />
      </Flex>
      <Clickable>
        <Icon name="layers" />
        <Environment>Staging</Environment>
      </Clickable>
    </StyledTopbar>
  )
}

export default Topbar