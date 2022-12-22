import { useContext, useCallback, useMemo } from 'react'

import { ViewDispatchContext, ViewStateContext, View } from 'providers/ViewProvider'

export function useViewState() {
  const state = useContext(ViewStateContext)
  if (state === undefined) {
    throw new Error('useViewState must be used within a ViewProvider')
  }
  return state
}

export function useViewDispatch() {
  const dispatch = useContext(ViewDispatchContext)
  if (dispatch === undefined) {
    throw new Error('useViewDispatch must be used within a ViewProvider')
  }

  const openView = useCallback(<P extends Record<any, any>>(view: View<P>) => dispatch({ type: 'openView', view }), [ dispatch ])
  const closeView = useCallback((index?: number) => dispatch({ type: 'closeView', index }), [ dispatch ])

  return useMemo(() => ({ openView, closeView }), [ openView, closeView ])
}
