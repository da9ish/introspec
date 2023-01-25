import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { styled, CSS } from '@stitches/react'

import Box from 'components/Box'
import Flex from 'components/Flex'
import Icon, { IconProps } from 'components/Icon'
import Button, { ButtonProps } from 'components/Button'
import { menuCss, separatorCss, itemCss, labelCss } from 'components/Menu'
import { panelStyles } from 'components/Panel'

type DropdownMenuContentPrimitiveProps = React.ComponentProps<typeof DropdownMenuPrimitive.Content>;
type DropdownMenuContentProps = DropdownMenuContentPrimitiveProps & { css?: CSS };

interface DropdownProps extends ButtonProps {
  label: string,
  value: string,
  labelKey?: string,
  valueKey?: string,
  iconKey?: string,
  icon?: IconProps['name'],
  options: Record<string, any>
}

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const StyledContent = styled(DropdownMenuPrimitive.Content, menuCss, panelStyles)

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  DropdownMenuContentProps
>((props, forwardedRef) => (
  <DropdownMenuPrimitive.Portal>
    <StyledContent {...props} ref={forwardedRef} />
  </DropdownMenuPrimitive.Portal>
))

const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemCss)
const DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {})
const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, labelCss)
const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, separatorCss)

const StyledDropdownMenuCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, itemCss)

type DialogMenuCheckboxItemPrimitiveProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.CheckboxItem
>;
type DialogMenuCheckboxItemProps = DialogMenuCheckboxItemPrimitiveProps & { css?: CSS };

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof StyledDropdownMenuCheckboxItem>,
  DialogMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownMenuCheckboxItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: 5 }}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Icon name="check" />
      </DropdownMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledDropdownMenuCheckboxItem>
))

const DropdownMenuRadioGroup = styled(DropdownMenuPrimitive.RadioGroup, {})
const StyledDropdownMenuRadioItem = styled(DropdownMenuPrimitive.RadioItem, itemCss)

type DialogMenuRadioItemPrimitiveProps = React.ComponentProps<
  typeof DropdownMenuPrimitive.RadioItem
>;
type DialogMenuRadioItemProps = DialogMenuRadioItemPrimitiveProps & { css?: CSS };

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof StyledDropdownMenuRadioItem>,
  DialogMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: 5 }}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Flex css={{ width: 15, height: 15, alignItems: 'center', justifyContent: 'center' }}>
          <Box
            css={{
              width: 5,
              height: 5,
              backgroundColor: 'currentColor',
              borderRadius: '50%'
            }}
          />
        </Flex>
      </DropdownMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledDropdownMenuRadioItem>
))

const Dropdown = ({
  label,
  placeholder = 'Select...',
  labelKey = 'label',
  valueKey = 'value',
  options
}: DropdownProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild placeholder={placeholder}>
      <Button>{label}</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuGroup>
        <DropdownMenuLabel>Choose one</DropdownMenuLabel>
        {options.map((opt: any) => (
          <DropdownMenuRadioItem value={opt[valueKey]}>{opt[labelKey]}</DropdownMenuRadioItem>
        ))}
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
)

// <DropdownMenuItem>Item</DropdownMenuItem>
// <DropdownMenuItem>Item</DropdownMenuItem>
// <DropdownMenuItem>Item</DropdownMenuItem>
// <DropdownMenuSeparator />
// <DropdownMenuCheckboxItem>Item</DropdownMenuCheckboxItem>
// <DropdownMenuCheckboxItem checked>Item</DropdownMenuCheckboxItem>
// <DropdownMenuCheckboxItem>Item</DropdownMenuCheckboxItem>
// <DropdownMenuSeparator />
// <DropdownMenuLabel>Choose one</DropdownMenuLabel>
// <DropdownMenuRadioGroup value="one">
//   <DropdownMenuRadioItem value="one">Item</DropdownMenuRadioItem>
//   <DropdownMenuRadioItem value="two">Item</DropdownMenuRadioItem>
//   <DropdownMenuRadioItem value="three">Item</DropdownMenuRadioItem>
// </DropdownMenuRadioGroup>

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
}

export default Dropdown
