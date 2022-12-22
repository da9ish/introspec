import * as DialogPrimitive from '@radix-ui/react-dialog'
import { styled, keyframes, VariantProps, CSS } from '@stitches/react'

import React from 'react'

import Box from 'components/Box'
import Flex from 'components/Flex'

const Sheet: React.FunctionComponent<DialogPrimitive.DialogProps> = DialogPrimitive.Root
const SheetTrigger = DialogPrimitive.Trigger

const slideIn = keyframes({
  from: { transform: '$$transformValue' },
  to: { transform: 'translate3d(0,0,0)' }
})

const slideOut = keyframes({
  from: { transform: 'translate3d(0,0,0)' },
  to: { transform: '$$transformValue' }
})

const overlayShow = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
})

const SheetOverlay = styled(DialogPrimitive.Overlay, {
  backdropFilter: 'blur(10px) saturate(190%) contrast(100%) brightness(130%)',
  backgroundColor: '$blackA9',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
})

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: '$bgBase',
  boxShadow: 'rgb(0 0 0 / 25%) 0px 8px 16px',
  borderLeft: '1px solid $bgBorder',
  position: 'fixed',
  top: 0,
  bottom: 0,
  width: 400,
  willChange: 'transform',

  '&:focus': {
    outline: 'none'
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`
  },

  variants: {
    side: {
      top: {
        $$transformValue: 'translate3d(0,-100%,0)',
        width: '100%',
        height: 300,
        bottom: 'auto'
      },
      right: {
        $$transformValue: 'translate3d(100%,0,0)',
        right: 0
      },
      bottom: {
        $$transformValue: 'translate3d(0,100%,0)',
        width: '100%',
        height: 300,
        bottom: 0,
        top: 'auto'
      },
      left: {
        $$transformValue: 'translate3d(-100%,0,0)',
        left: 0
      }
    }
  },

  defaultVariants: {
    side: 'right'
  }
})

const SheetHeader = styled(Flex, {
  height: 60,
  boxSizing: 'border-box',
  flexDirection: 'column',
  gap: 4,
  padding: '0 24px',
  justifyContent: 'center',
  borderBottom: '1px solid $bgBorder'
})

const SheetTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  color: '$labelTitle',
  fontSize: 16
})

const SheetDescription = styled(DialogPrimitive.Description, {
  margin: 0,
  color: '$labelFaint',
  fontSize: 13,
  lineHeight: 1.5
})

const SheetBody = styled(Flex, {
  direction: 'column',
  padding: 24
})

const SheetFooter = styled(Box, {
  display: 'flex',
  marginTop: 25,
  justifyContent: 'flex-end',
  padding: 24,
  borderTop: '1px solid $bgBorder'
})

type SheetContentVariants = VariantProps<typeof StyledContent>;
type DialogContentPrimitiveProps = React.ComponentProps<typeof DialogPrimitive.Content>;
type SheetContentProps = DialogContentPrimitiveProps & SheetContentVariants & { css?: CSS };

const SheetContent = React.forwardRef<React.ElementRef<typeof StyledContent>, SheetContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <SheetOverlay />
      <StyledContent {...props} ref={forwardedRef}>
        {children}
      </StyledContent>
    </DialogPrimitive.Portal>
  )
)

export type { SheetContentProps }

export {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetBody,
  SheetFooter
}
export default Sheet
