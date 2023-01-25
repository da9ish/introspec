import { styled, VariantProps } from '@stitches/react'

import * as SelectPrimitive from '@radix-ui/react-select'

import Icon, { IconProps } from 'components/Icon'

interface SelectProps extends VariantProps<typeof StyledTrigger>,
SelectPrimitive.SelectProps, Pick<SelectPrimitive.SelectValueProps, 'placeholder'> {
  label: string,
  labelKey?: string,
  valueKey?: string,
  metaKey?: string,
  iconKey?: string,
  icon?: IconProps['name'],
  options: Record<string, any>
}

const SelectItemText = SelectPrimitive.ItemText
const SelectItemMeta = SelectPrimitive.ItemText

const StyledSelect = styled(SelectPrimitive.Root, {})

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
  width: '100%',
  position: 'relative !important',
  all: 'unset',
  gap: 5,
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'start',
  padding: '0 15px',
  borderRadius: 4,
  fontSize: 13,
  lineHeight: 1,
  backgroundColor: '$inputBg',
  color: '$inputColor',
  border: '1px solid $inputBorder',
  boxShadow: 'rgb(0 0 0 / 7%) 0px 1px 1px',

  '& > span': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },

  '&[data-placeholder]': {
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
        padding: '0px 40px 0px 12px',
        fontSize: '12px'
      },
      normal: {
        height: 32,
        padding: '0px 48px 0px 12px',
        fontSize: '13px'
      },
      large: {
        height: 44,
        padding: 12,
        fontSize: '0px 52px 0px 12px'
      }
    }
  },
  defaultVariants: {
    size: 'normal'
  }
})

const StyledContent = styled(SelectPrimitive.Content, {
  // width: 'min-content',
  zIndex: 1001,
  borderRadius: 4,
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
  color: '$slate12',
  borderRadius: 3,
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  height: 32,
  padding: '0px 25px 0px 12px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$inputLabelMuted',
    pointerEvents: 'none',

    '& > [data-icon]': {
      color: '$inputLabelMuted'
    },

    '& > [data-description]': {
      color: '$inputLabelMuted'
    }

  },

  '&[data-state="checked"]': {
    backgroundColor: '$indigo3'
  },

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$indigo3',
    color: '$slate12'
  },

  '& > [data-icon]': {
    color: '$slate12'
  },

  '& > [data-description]': {
    color: '$slate11'
  },

  [`& > ${SelectItemText}`]: {
    color: 'inherit'
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

const StyledValue = styled(SelectPrimitive.Value, {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
})

const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: '$bgBorder',
  margin: 5
})

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  right: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& > [data-check]': {
    color: '$primary'
  }
})

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: '$slate6',
  color: '$indigo11',
  cursor: 'default'
}

const SelectScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
)

const SelectScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
)

const StyledInput = styled('input', {
  background: 'transparent',
  border: 'none',
  outline: 'none',
  color: '$inputColor',
  width: '100%',

  variants: {
    icon: {
      true: {
        paddingLeft: 24
      }
    }
  }
})

const SelectTrigger = StyledTrigger
const SelectValue = StyledValue
const SelectIcon = StyledIcon
const SelectContent = Content
const SelectViewport = StyledViewport
const SelectGroup = SelectPrimitive.Group
const SelectItem = StyledItem
const SelectItemIndicator = StyledItemIndicator
const SelectLabel = StyledLabel
const SelectSeparator = StyledSeparator

const Select: React.FC<SelectProps> = ({
  name,
  label,
  value,
  icon,
  placeholder = 'Select...',
  options,
  labelKey = 'label',
  valueKey = 'value',
  metaKey = 'meta',
  iconKey = 'icon',
  size = 'normal',
  ...props
}) => (
  <StyledSelect value={value} name={name} {...props}>
    <SelectTrigger size={size} aria-label={label} value={value}>
      {icon && (
        <SelectIcon>
          <Icon name={icon} />
        </SelectIcon>
      )}
      <SelectValue aria-label={value}>
        <StyledInput icon={Boolean(icon)} placeholder={placeholder as string} value={value} />
      </SelectValue>
      <DropdownIcon>
        <Icon name="chevron-down" />
      </DropdownIcon>
    </SelectTrigger>
    <SelectPrimitive.SelectPortal>
      <SelectContent>
        <SelectScrollUpButton className="SelectScrollButton">
          <Icon name="chevron-up" />
        </SelectScrollUpButton>
        <SelectViewport>
          <SelectGroup>
            {options.map((opt: any, idx: number) => (
              <SelectItem
                // eslint-disable-next-line react/no-array-index-key
                key={`${opt[valueKey]}-${idx}`}
                disabled={opt.disabled}
                size={size}
                value={opt[valueKey]}
              >
                {opt[iconKey] && <Icon data-icon name={opt[iconKey]} size={12} feather />}
                <SelectItemText>{opt[labelKey]}</SelectItemText>
                <SelectItemMeta data-description>{opt[metaKey]}</SelectItemMeta>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectViewport>
        <SelectScrollDownButton className="SelectScrollButton">
          <Icon name="chevron-down" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPrimitive.SelectPortal>
  </StyledSelect>
)

export default Select
