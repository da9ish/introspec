import type { FunctionComponent } from 'react'
import type { DialogProps } from '@radix-ui/react-dialog'

import type { View } from 'providers/ViewProvider'

export type ViewProps<P extends Record<any, any>> = DialogProps & {
  closeView: (index?: number) => void,
  openView: (view: View) => void,
  params: P,
  viewStyleComponent: FunctionComponent<DialogProps>
}

export type ViewComponent<P extends Record<any, any>> = FunctionComponent<ViewProps<P>>
