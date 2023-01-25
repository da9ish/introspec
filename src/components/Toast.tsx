import * as ToastPrimitive from '@radix-ui/react-toast'
import { keyframes, styled, VariantProps } from '@stitches/react'
import { useContext } from 'react'

import ToastContext from 'contexts/ToastContext'
import type { ButtonProps } from 'components/Button'
import Button from 'components/Button'

import Flex from './Flex'
import Icon from './Icon'

interface ToastProps extends VariantProps<typeof ToastRoot> {
  title: string,
  description: string,
  actionProps: ToastPrimitive.ToastActionProps & ButtonProps
}

type ToastType = 'default' | 'info' | 'success' |'warning' | 'error'

const VIEWPORT_PADDING = 25
const TOAST_ICON_MAP: Record<ToastType, string> = {
  default: 'info',
  info: 'info',
  success: 'check-circle',
  warning: 'alert-circle',
  error: 'x-octagon'
}

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 }
})

const slideRight = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` }
})

const slideLeft = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(-100% - ${VIEWPORT_PADDING}px))` }
})

const slideUp = keyframes({
  from: { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
  to: { transform: `translateY(calc(-100% - ${VIEWPORT_PADDING}px))` }
})

const slideDown = keyframes({
  from: { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
  to: { transform: `translateY(calc(100% + ${VIEWPORT_PADDING}px))` }
})

const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: 25,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zZndex: 2147483647,
  outline: 'none'
})

const ToastHeader = styled(Flex, {
  gridArea: 'title',
  alignItems: 'center',
  gap: 8
})

const ToastTitle = styled(ToastPrimitive.Title, {
  color: 'inherit',
  fontWeight: 500,
  fontSize: 15
})

const ToastDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$slate11',
  fontSize: 13,
  lineHeight: 1.3
})

const ToastAction = styled(ToastPrimitive.Action, {
  gridArea: 'action'
})

const ToastRoot = styled(ToastPrimitive.Root, {
  // backgroundColor: '$bgSubtle',
  borderRadius: 6,
  boxShadow: 'rgb(0 0 0 / 10%) 0px 2px 4px',
  border: '1px solid',
  padding: 15,
  display: 'grid',
  gridTemplateAreas: '\'title action\' \'description action\'',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  rowGap: 8,
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${fadeIn} 200ms ease-out`
  },
  '&[data-state="closed"]': {
    animation: `${fadeOut} 200ms ease-out`
  },
  '&[data-swipe="move"]': {
    transform: 'translate(var(--radix-toast-swipe-move-x), var(--radix-toast-swipe-move-y))'
  },
  '&[data-swipe="cancel"]': {
    transform: 'translate(0, 0)',
    transition: 'transform 200ms ease-out'
  },
  '&[data-swipe="end"]': {
    animationDuration: '300ms',
    animationTimingFunction: 'ease-out',
    '&[data-swipe-direction="right"]': {
      animationName: slideRight
    },
    '&[data-swipe-direction="left"]': {
      animationName: slideLeft
    },
    '&[data-swipe-direction="up"]': {
      animationName: slideUp
    },
    '&[data-swipe-direction="down"]': {
      animationName: slideDown
    }
  },

  variants: {
    kind: {
      default: {
        backgroundColor: '$slate1',
        borderColor: '$slate6',

        [`& > ${ToastHeader} > [data-icon], ${ToastTitle}`]: {
          color: '$slate11'
        },
        [`& > ${ToastDescription}`]: {
          color: '$slate8'
        }
      },
      info: {
        backgroundColor: '$indigo2',
        borderColor: '$indigo6',

        [`& > ${ToastHeader} > [data-icon], ${ToastTitle}`]: {
          color: '$indigo11'
        },
        [`& > ${ToastDescription}`]: {
          color: '$indigo8'
        }
      },
      success: {
        backgroundColor: '$green2',
        borderColor: '$green6',

        [`& > ${ToastHeader} > [data-icon], ${ToastTitle}`]: {
          color: '$green11'
        },
        [`& > ${ToastDescription}`]: {
          color: '$green8'
        }
      },
      warning: {
        backgroundColor: '$amber2',
        borderColor: '$amber6',

        [`& > ${ToastHeader} > [data-icon], ${ToastTitle}`]: {
          color: '$amber11'
        },
        [`& > ${ToastDescription}`]: {
          color: '$amber8'
        }
      },
      error: {
        backgroundColor: '$red2',
        borderColor: '$red6',

        [`& > ${ToastHeader} > [data-icon], ${ToastTitle}`]: {
          color: '$red11'
        },
        [`& > ${ToastDescription}`]: {
          color: '$red8'
        }
      }
    }
  }
})

const Toast: React.FC<ToastProps> = ({ title, description, actionProps, kind = 'info' }) => {
  const { open, setOpen } = useContext(ToastContext)!
  const { altText, ...buttonProps } = actionProps
  return (
    <>
      <ToastRoot kind={kind} open={open} onOpenChange={setOpen}>
        <ToastHeader>
          <Icon data-icon name={TOAST_ICON_MAP[kind as ToastType]} size={16} />
          <ToastTitle>{title}</ToastTitle>
        </ToastHeader>
        <ToastDescription>{description}</ToastDescription>
        <ToastAction asChild altText={altText}>
          <Button {...buttonProps} kind={kind as ButtonProps['kind']} />
        </ToastAction>
      </ToastRoot>
      <ToastViewport />
    </>
  )
}

export default Toast
