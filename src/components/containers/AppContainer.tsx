import { Route, Routes } from 'react-router'

import Box from 'components/Box'
import Landing from 'pages/Landing'
import Login from 'pages/Login'
import SignUp from 'pages/Signup'
import ProtectedRoute, { SessionState } from 'components/routes/ProtectedRoute'
import ExternalLayout from 'layouts/ExternalLayout'

const AppContainer: React.FC = () => (
  <Box as="main" css={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
    <Routes>
      <Route
        path="/"
        element={(
          <ProtectedRoute
            component={Landing}
            layout={ExternalLayout}
            requiredSessionState={SessionState.LOGGED_OUT}
          />
      )}
      />
      <Route
        path="/login"
        element={(
          <ProtectedRoute
            component={Login}
            layout={ExternalLayout}
            requiredSessionState={SessionState.LOGGED_OUT}
          />
      )}
      />
      <Route
        path="/signup"
        element={(
          <ProtectedRoute
            component={SignUp}
            layout={ExternalLayout}
            requiredSessionState={SessionState.LOGGED_OUT}
          />
      )}
      />
    </Routes>
  </Box>
)

export default AppContainer
