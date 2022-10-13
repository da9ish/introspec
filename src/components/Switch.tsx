import * as SwitchPrimitive from '@radix-ui/react-switch'
import { blackA } from '@radix-ui/colors'
import { styled } from '@stitches/react'

import Flex from './Flex'
import Label from './Label'

interface SwitchProps {
  name: string,
  label: string,
  value: boolean,
  onChange: (checked: boolean) => void
}

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: blackA.blackA9,
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: '0 0 0 2px black' },
  '&[data-state="checked"]': { backgroundColor: 'black' }
})

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px ${blackA.blackA7}`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' }
})

const SwitchThumb = StyledThumb

const Switch: React.FC<SwitchProps> = ({ name, label, value, onChange }) => (
  <Flex alignItems="center" justifyContent="space-between">
    <Label htmlFor={name}>
      {label}
    </Label>
    <StyledSwitch id={name} onCheckedChange={onChange} checked={value}>
      <SwitchThumb />
    </StyledSwitch>
  </Flex>
)

export default Switch
