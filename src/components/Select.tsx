import { styled } from '@stitches/react'
import { violet, mauve, blackA } from '@radix-ui/colors'
import { ChevronUp, ChevronDown, Check } from 'react-feather'
import * as SelectPrimitive from '@radix-ui/react-select'

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: 'white',
  color: '#282A30',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: mauve.mauve3 },
  '&:focus': { boxShadow: '0 0 0 2px black' },
  '&[data-placeholder]': { color: violet.violet9 }
})

const StyledIcon = styled(SelectPrimitive.SelectIcon, {
  color: '#282A30'
})

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)'
})

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5
})

const Content = ({ children, ...props }: SelectPrimitive.SelectContentProps) => (
  <SelectPrimitive.Portal>
    <StyledContent {...props}>{children}</StyledContent>
  </SelectPrimitive.Portal>
)

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: mauve.mauve8,
    pointerEvents: 'none'
  },

  '&[data-highlighted]': {
    backgroundColor: violet.violet9,
    color: violet.violet1
  }
})

const StyledLabel = styled(SelectPrimitive.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: mauve.mauve11
})

const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: violet.violet6,
  margin: 5
})

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center'
})

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: violet.violet11,
  cursor: 'default'
}

const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonStyles)

const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton, scrollButtonStyles)

const SelectRoot = SelectPrimitive.Root
const SelectTrigger = StyledTrigger
const SelectValue = SelectPrimitive.Value
const SelectIcon = StyledIcon
const SelectContent = Content
const SelectViewport = StyledViewport
const SelectGroup = SelectPrimitive.Group
const SelectItem = StyledItem
const SelectItemText = SelectPrimitive.ItemText
const SelectItemIndicator = StyledItemIndicator
const SelectLabel = StyledLabel
const SelectSeparator = StyledSeparator
const SelectScrollUpButton = StyledScrollUpButton
const SelectScrollDownButton = StyledScrollDownButton

interface SelectProps {
  ariaLabel: string,
  placeholder: string,
  label: string,
  options: { label: string, value: string }[],
  checkSelection?: boolean
}

const Select = ({
  ariaLabel, placeholder, label, options, checkSelection = false
}: SelectProps) => (
  <SelectRoot>
    <SelectTrigger aria-label={ariaLabel}>
      <SelectValue placeholder={placeholder} />
      <SelectIcon>
        <ChevronDown />
      </SelectIcon>
    </SelectTrigger>
    <SelectContent>
      <SelectScrollUpButton>
        <ChevronUp />
      </SelectScrollUpButton>
      <SelectViewport>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((opt) => (
            <SelectItem value={opt.value}>
              <SelectItemText>{opt.label}</SelectItemText>
              {checkSelection
              && (
                <SelectItemIndicator>
                  <Check />
                </SelectItemIndicator>
              )}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectViewport>
      <SelectScrollDownButton>
        <ChevronDown />
      </SelectScrollDownButton>
    </SelectContent>
  </SelectRoot>
)

export default Select
