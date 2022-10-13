import { createContext } from 'react'

export type Alert = {
  preventAutoClose?: boolean,
  icon: string | null,
  isOpen: boolean,
  message: string | null,
  title: string | null,
  variant: 'success' | 'failure' | 'warning'
}

export type AlertOptions = Partial<Pick<Alert, 'icon' | 'message' | 'title'>>

export type GlobalContext = {
  openSuccessAlert: (args: AlertOptions) => void,
  openFailureAlert: (args: AlertOptions) => void,
  openWarningAlert: (args: AlertOptions) => void
}

export default createContext<GlobalContext | null>(null)
