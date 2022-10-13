import { makeVar } from '@apollo/client'

import type { Alert } from 'contexts/GlobalContext'

/* Default Data */

const DEFAULT_ALERT_DATA: Alert = {
  preventAutoClose: false,
  variant: 'failure',
  message: '',
  title: '',
  icon: null,
  isOpen: false
}

/* Reactive Vars */

export const alertVar = makeVar<Alert>(DEFAULT_ALERT_DATA)
