import { blackA } from '@radix-ui/colors'
import { styled } from '@stitches/react'

import Flex from 'components/Flex'
import Icon from 'components/Icon'

interface Props {
  value: string,
  onChange: (value: string) => void
}

const StyledContainer = styled(Flex, {
  color: '#757575',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '4px',
  padding: '4px 8px',
  fontSize: 13,
  lineHeight: 1,
  backgroundColor: 'transparent',
  fontFamily: '$body',
  '&:focus-within': {
    color: '#313131',
    boxShadow: `0 0 0 1px ${blackA.blackA5}`
  },

  '::placeholder': {
    fontSize: 13
  }
})

const StyledSearchbar = styled('input', {
  border: 'none',
  outline: 'none',
  width: '100%',
  height: '100%',
  background: 'transparent',
  marginLeft: '8px',
  fontSize: 13
})

const Searchbar: React.FC<Props> = ({ value, onChange }) => (
  <StyledContainer>
    <Icon name="search" />
    <StyledSearchbar placeholder="Search" value={value} onChange={(e) => onChange(e.target.value)} />
  </StyledContainer>
)

export default Searchbar
