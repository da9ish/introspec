import * as Toast from '@radix-ui/react-toast'

import React, { ReactNode, useMemo } from 'react'

import ToastContext from 'contexts/ToastContext'

export default function ToastProvider({ children }: {children: ReactNode}) {
  const [ open, setOpen ] = React.useState(false)

  const value = useMemo(() => ({
    open,
    setOpen
  }), [ open, setOpen ])

  return (
    <ToastContext.Provider value={value}>
      <Toast.Provider swipeDirection="right">
        {children}
      </Toast.Provider>
    </ToastContext.Provider>
  )
}
