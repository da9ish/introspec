import React from 'react'
import * as MenuPrimitive from '@radix-ui/react-menu'
import { styled, css, CSS } from '@stitches/react'

import Box from 'components/Box'
import Flex from 'components/Flex'
import Icon from 'components/Icon'
import { panelStyles } from 'components/Panel'

const baseItemCss = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontFamily: '$body',
  fontSize: 5,
  fontVariantNumeric: 'tabular-nums',
  lineHeight: '1',
  cursor: 'default',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  height: 25,
  padding: '0 25px'
})

const itemCss = css(baseItemCss, {
  position: 'relative',
  color: '$slate12',

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$bgSelected',
    color: '$slate12'
  },

  '&[data-disabled]': {
    color: '$slate9'
  }
})

const labelCss = css(baseItemCss, {
  color: '$slate11'
})

const menuCss = css({
  boxSizing: 'border-box',
  minWidth: 120,
  padding: '5px 0'
})

const separatorCss = css({
  height: 1,
  margin: '5px 0',
  backgroundColor: '$slate6'
})

const Menu = styled(MenuPrimitive.Root, menuCss)
const MenuContent = styled(MenuPrimitive.Content, panelStyles)

const MenuSeparator = styled(MenuPrimitive.Separator, separatorCss)

const MenuItem = styled(MenuPrimitive.Item, itemCss)

const StyledMenuRadioItem = styled(MenuPrimitive.RadioItem, itemCss)

type MenuRadioItemPrimitiveProps = React.ComponentProps<typeof MenuPrimitive.RadioItem>;
type MenuRadioItemProps = MenuRadioItemPrimitiveProps & { css?: CSS };

const MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof StyledMenuRadioItem>,
  MenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: 5 }}>
      <MenuPrimitive.ItemIndicator>
        <Flex css={{ width: 15, height: 15, alignItems: 'center', justifyContent: 'center' }}>
          <Box
            css={{
              width: 5,
              height: 5,
              backgroundColor: 'currentColor',
              borderRadius: '$round'
            }}
          />
        </Flex>
      </MenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledMenuRadioItem>
))

const StyledMenuCheckboxItem = styled(MenuPrimitive.CheckboxItem, itemCss)

type MenuCheckboxItemPrimitiveProps = React.ComponentProps<typeof MenuPrimitive.CheckboxItem>;
type MenuCheckboxItemProps = MenuCheckboxItemPrimitiveProps & { css?: CSS };

const MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof StyledMenuCheckboxItem>,
  MenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledMenuCheckboxItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: 5 }}>
      <MenuPrimitive.ItemIndicator>
        <Icon name="check" />
      </MenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledMenuCheckboxItem>
))

const MenuLabel = styled(MenuPrimitive.Label, labelCss)
const MenuRadioGroup = styled(MenuPrimitive.RadioGroup, {})
const MenuGroup = styled(MenuPrimitive.Group, {})

export {
  baseItemCss,
  itemCss,
  labelCss,
  menuCss,
  separatorCss,
  Menu,
  MenuContent,
  MenuSeparator,
  MenuItem,
  StyledMenuRadioItem,
  MenuRadioItem,
  StyledMenuCheckboxItem,
  MenuCheckboxItem,
  MenuLabel,
  MenuRadioGroup,
  MenuGroup
}
