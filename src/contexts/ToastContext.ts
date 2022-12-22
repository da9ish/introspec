import React, { createContext } from 'react'

export type ToastContext = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default createContext<ToastContext | null>(null)
