import React from "react";
import { styled } from "../stiches.config";
import Flex from "./Flex";
import { ReactComponent as Search } from '../assets/icons/search.svg'
import { blackA } from "@radix-ui/colors";

interface Props {
  value: string
  onChange: (value: string) => void
}

const StyledContainer = styled(Flex, {
  color: '#757575',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  padding: '10px',
  margin: '4px 0',
  fontSize: 15,
  lineHeight: 1,
  backgroundColor: 'transparent',
  fontFamily: '$body',
  '&:focus-within': {
    color: '#313131',
    boxShadow: `0 0 0 1px ${blackA.blackA5}`
  },
})

const StyledSearchbar = styled('input', {
  border: 'none',
  outline: 'none',
  width: '100%',
  height: '100%',
  background: 'transparent',
  marginLeft: '8px',
  fontSize: '16px'
})

const Searchbar: React.FC<Props> = ({value, onChange}) => {
  return (
    <StyledContainer>
      <Search />
      <StyledSearchbar placeholder="Search" value={value} onChange={(e) => onChange(e.target.value)} />
    </StyledContainer>
  )
}

export default Searchbar