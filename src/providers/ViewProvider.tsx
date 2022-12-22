import React, { createContext, useReducer } from 'react'
import type { PropsWithChildren } from 'react'

import type { ViewComponent } from 'components/views'

type View<P extends Record<any, any> = {}> = {
  component: ViewComponent<P>,
  params?: P,
  style: 'PANEL' | 'DIALOG'
}

type ViewState<P extends Record<any, any>> = {
  viewStack: View<P>[]
}

type Action<P extends Record<any, any>> = {type: 'openView', view: View<P>} | {type: 'closeView', index?: number}
type Dispatch<P extends Record<any, any>> = (action: Action<P>) => void

const ViewStateContext = createContext<ViewState<any> | undefined>(undefined)
const ViewDispatchContext = createContext<Dispatch<any> | undefined>(undefined)

function viewReducer<P extends Record<any, any>>(state: ViewState<P>, action: Action<P>) {
  switch (action.type) {
    case 'openView': {
      return { viewStack: state.viewStack.concat([ action.view ]) }
    }
    case 'closeView': {
      return { viewStack: state.viewStack.slice(0, action.index || 0) }
    }
    default: {
      throw new Error('Unhandled action type')
    }
  }
}

export default function ViewProvider({ children }: PropsWithChildren<{}>) {
  const [ state, dispatch ] = useReducer(viewReducer, { viewStack: [] })

  return (
    <ViewStateContext.Provider value={state}>
      <ViewDispatchContext.Provider value={dispatch}>
        {children}
      </ViewDispatchContext.Provider>
    </ViewStateContext.Provider>
  )
}

export { ViewStateContext, ViewDispatchContext }

export type { View }
