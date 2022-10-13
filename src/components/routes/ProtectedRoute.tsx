import { Navigate } from 'react-router-dom'
import type { RouteProps } from 'react-router-dom'

import { useCurrentAccountContext } from 'contexts/CurrentAccountContext'

enum SessionState {
  LOGGED_IN = 'logged-in',
  LOGGED_OUT = 'logged-out'
}

type ProtectedRouteProps = RouteProps & {
  component: React.JSXElementConstructor<any>,
  layout: React.JSXElementConstructor<any>,
  layoutProps?: Object,
  requiredSessionState: SessionState
}

function ProtectedRoute({
  component,
  layout: Layout,
  layoutProps,
  requiredSessionState
}: ProtectedRouteProps) {
  const currentAccount = useCurrentAccountContext()
  const Component = component

  const renderRouteChildren = () => {
    if (requiredSessionState === SessionState.LOGGED_OUT && currentAccount) {
      return <Navigate to="/" />
    }

    if (requiredSessionState === SessionState.LOGGED_IN && !currentAccount) {
      return <Navigate to="/login" />
    }

    return (
      <Layout {...layoutProps}>
        <Component />
      </Layout>
    )
  }

  return (renderRouteChildren())
}

export { SessionState }

export default ProtectedRoute
