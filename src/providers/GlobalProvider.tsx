import { ReactNode, useMemo } from 'react'

import GlobalContext, { AlertOptions } from 'contexts/GlobalContext'
import { alertVar } from 'client/state/alert'

const openFailureAlert = ({ icon = null, title = null, message = null }: AlertOptions) => {
  alertVar({ variant: 'failure', isOpen: true, icon, title, message })
}

const openSuccessAlert = ({ icon = null, title = null, message = null }: AlertOptions) => {
  alertVar({ variant: 'success', isOpen: true, icon, title, message })
}

const openWarningAlert = ({ icon = null, title = null, message = null }: AlertOptions) => {
  alertVar({ variant: 'warning', isOpen: true, icon, title, message })
}

export default function GlobalProvider({ children }: { children: ReactNode }) {
  const values = useMemo(() => ({
    openFailureAlert,
    openSuccessAlert,
    openWarningAlert
  }), [])

  return (
    <GlobalContext.Provider value={values}>
      {children}
    </GlobalContext.Provider>
  )
}
