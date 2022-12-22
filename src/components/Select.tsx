import { styled, VariantProps } from '@stitches/react'

import * as SelectPrimitive from '@radix-ui/react-select'

import Icon, { IconProps } from 'components/Icon'

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
VariantProps<typeof StyledTrigger> {
  label: string,
  value: string,
  labelKey?: string,
  valueKey?: string,
  iconKey?: string,
  icon?: IconProps['name'],
  options: Record<string, any>
}

const StyledSelect = styled(SelectPrimitive.Root, {
  position: 'relative'
})

const DropdownIcon = styled(SelectPrimitive.SelectIcon, {
  position: 'absolute',
  right: 10,
  color: '$labelBase'
})

const StyledIcon = styled(SelectPrimitive.SelectIcon, {
  position: 'absolute',
  left: 8,
  color: '$labelBase'
})

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  position: 'relative !important',
  all: 'unset',
  gap: 5,
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 15px',
  borderRadius: 4,
  fontSize: 13,
  lineHeight: 1,
  backgroundColor: '$inputBg',
  color: '$inputColor',
  border: '1px solid $inputBorder',
  boxShadow: 'rgb(0 0 0 / 7%) 0px 1px 1px',

  '& > [data-placeholder]': {
    color: '$inputLabelFaint'
  },

  '&:hover:not(:disabled)': {
    transition: 'none 0s ease 0s',
    border: '1px solid $inputBorderHover'
  },

  '&:focus': {
    border: '1px solid $inputBorderFocus'
  },

  '&:focus-within': {
    border: '1px solid $inputBorderFocus'
  },

  variants: {
    size: {
      small: {
        height: 28,
        padding: '1px 40px 1px 28px',
        fontSize: '12px'
      },
      normal: {
        height: 32,
        padding: '1px 48px 1px 30px',
        fontSize: '13px'
      },
      large: {
        height: 35,
        padding: 12,
        fontSize: '1px 52px 1px 32px'
      }
    }
  },
  defaultVariants: {
    size: 'normal'
  }
})

const StyledContent = styled(SelectPrimitive.Content, {
  width: 'min-content',
  borderRadius: 4,
  padding: 0,
  backgroundColor: '$inputBgSubtle',
  border: '1px solid $inputBgBorder',
  boxShadow: 'rgb(0 0 0 / 6%) 0px 7px 24px',
  overflow: 'hidden'
})

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
  backgroundColor: '$inputBgSubtle'
})

function Content({ children, ...props }: SelectPrimitive.SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <StyledContent {...props}>{children}</StyledContent>
    </SelectPrimitive.Portal>
  )
}

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: '$labelBase',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 32,
  padding: '0px 35px 0px 25px',
  position: 'relative',
  userSelect: 'none',

  '& [data-disabled]': {
    color: '$inputLabelMuted',
    pointerEvents: 'none'
  },

  '& [data-highlighted]': {
    backgroundColor: '$bgBaseHover',
    color: '$inputLabel'
  },

  variants: {
    size: {
      small: {
        height: 28
      },
      normal: {
        height: 32
      },
      large: {
        height: 44
      }
    }
  }
})

const StyledLabel = styled(SelectPrimitive.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: '$inputLabel'
})

const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: '$bgBorder',
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
  backgroundColor: '$bgBase',
  color: '$inputLabel',
  cursor: 'default'
}

const StyledScrollUpButton = styled(SelectPrimitive.ScrollUpButton, scrollButtonStyles)

const StyledScrollDownButton = styled(SelectPrimitive.ScrollDownButton, scrollButtonStyles)

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

const Select: React.FC<SelectProps> = ({
  name,
  label,
  value,
  icon,
  placeholder = 'Select...',
  options,
  labelKey = 'label',
  valueKey = 'value',
  size = 'normal',
  ...props
}) => (
  <StyledSelect
    value={value}
    name={name}
    onValueChange={(value) => props.onChange?.({ target: { value } } as any)}
  >
    <SelectTrigger size={size} aria-label={label} value={value}>
      {icon && (
        <SelectIcon>
          <Icon name={icon} />
        </SelectIcon>
      )}
      <SelectValue placeholder={placeholder} />
      <DropdownIcon>
        <Icon name="chevron-down" />
      </DropdownIcon>
    </SelectTrigger>
    <SelectPrimitive.SelectPortal>
      <SelectContent>
        <SelectScrollUpButton>
          <Icon name="chevron-up" />
        </SelectScrollUpButton>
        <SelectViewport>
          {options.map((opt: any) => (
            <SelectItem size={size} value={opt[valueKey]}>
              <SelectItemText>{opt[labelKey]}</SelectItemText>
              <SelectItemIndicator>
                <Icon name="check" />
              </SelectItemIndicator>
            </SelectItem>
          ))}
        </SelectViewport>
        <SelectScrollDownButton>
          <Icon name="chevron-down" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPrimitive.SelectPortal>
  </StyledSelect>
)

export default Select
