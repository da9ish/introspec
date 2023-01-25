import * as TabsPrimitive from '@radix-ui/react-tabs'
import React from 'react'
import { styled, CSS } from '@stitches/react'

const Tabs = styled(TabsPrimitive.Root, {
  display: 'flex',

  '&[data-orientation="horizontal"]': {
    flexDirection: 'column'
  }
})

const TabsTrigger = styled(TabsPrimitive.Trigger, {
  fontFamily: 'Fractul, sans-serif',
  height: 25,
  boxSizing: 'border-box',
  display: 'inline-flex',
  lineHeight: 1,
  fontSize: 12,
  padding: '0 10px',
  userSelect: 'none',
  outline: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$slate11',
  borderRadius: 5,
  zIndex: '10',
  backgroundColor: 'transparent',

  '&:hover': {
    color: '$slate12'
  },

  '&[data-state="active"]': {
    color: '$slate12',
    backgroundColor: '$indigo9'
  },

  '&[data-orientation="vertical"]': {
    justifyContent: 'flex-start',

    '&[data-state="active"]': {
      color: '$slate12',
      backgroundColor: '$indigo9'
    }
  }
})

const StyledTabsList = styled(TabsPrimitive.List, {
  width: 'fit-content',
  display: 'flex',
  marginBottom: 16,
  borderRadius: 5,
  backgroundColor: '$landingInputBg',

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $slate8, 0 0 0 1px $slate8'
  },
  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    boxShadow: 'inset -1px 0 0 $slate6'
  }
})

type TabsListPrimitiveProps = React.ComponentProps<typeof TabsPrimitive.List>;
type TabsListProps = TabsListPrimitiveProps & { css?: CSS };

const TabsList = React.forwardRef<React.ElementRef<typeof StyledTabsList>, TabsListProps>(
  (props, forwardedRef) => (
    <StyledTabsList {...props} ref={forwardedRef} />
  )
)

const TabsContent = styled(TabsPrimitive.Content, {
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,

  '&:focus': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $slate8, 0 0 0 1px $slate8'
  }
})

export { TabsTrigger, TabsList, TabsContent }
export default Tabs
