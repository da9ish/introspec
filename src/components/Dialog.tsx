import React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { blackA } from '@radix-ui/colors'
import { CSS, keyframes, styled, VariantProps } from '@stitches/react'

import Box from 'components/Box'
import Icon from 'components/Icon'

const Dialog = DialogPrimitive.Root
const DialogTrigger = DialogPrimitive.Trigger

const overlayShow = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
})

const contentShow = keyframes({
  from: {
    opacity: 0,
    transform: 'translate(-50%, -48%) scale(0.96)'
  },
  to: {
    opacity: 1,
    transform: 'translate(-50%, -50%) scale(1)'
  }
})

const DialogOverlay = styled(DialogPrimitive.Overlay, {
  backdropFilter: 'blur(1px)',
  backgroundColor: '$blackA9',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
})

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: '$bgSubtle',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,

  '&:focus': {
    outline: 'none'
  }
})

const DialogTitle = styled(DialogPrimitive.Title, {
  margin: 0,
  fontWeight: 500,
  color: '$labelTitle',
  fontSize: 16
})

const DialogDescription = styled(DialogPrimitive.Description, {
  margin: '10px 0 20px',
  color: '$labelFaint',
  fontSize: 13,
  lineHeight: 1.5
})

const DialogClose = styled(DialogPrimitive.Close, {
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$labelMuted',
  position: 'absolute',
  top: 10,
  right: 10
})

const DialogFooter = styled(Box, {
  display: 'flex',
  marginTop: 25,
  justifyContent: 'flex-end'
})

type DialogContentVariants = VariantProps<typeof StyledContent>;
type DialogContentPrimitiveProps = React.ComponentProps<typeof DialogPrimitive.Content>;
type DialogContentProps = DialogContentPrimitiveProps & DialogContentVariants & { css?: CSS };

const DialogContent = React.forwardRef<React.ElementRef<typeof StyledContent>, DialogContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogContent {...props} ref={forwardedRef}>
        {children}
        <DialogClose>
          <Icon name="x" fontSize={12} />
        </DialogClose>
      </DialogContent>
    </DialogPrimitive.Portal>
  )
)
export type { DialogContentProps }

export {
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogFooter
}

export default Dialog
