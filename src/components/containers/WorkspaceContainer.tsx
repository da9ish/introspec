import { Route, Routes } from 'react-router'

import Schema from 'pages/Database/Schema'
import Overview from 'pages/Overview'
import RootPage from 'pages/RootPage'
import Login from 'pages/Login'
import SignUp from 'pages/Signup'
import ProtectedRoute, { SessionState } from 'components/routes/ProtectedRoute'
import InternalLayout from 'layouts/InternalLayout'
import ExternalLayout from 'layouts/ExternalLayout'

const WorkspaceContainer: React.FC = () => (
  <Routes>
    <Route
      path="/"
      element={(
        <ProtectedRoute
          component={RootPage}
          layout={InternalLayout}
          requiredSessionState={SessionState.LOGGED_IN}
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

    <Route
      path="/overview"
      element={(
        <ProtectedRoute
          component={Overview}
          layout={InternalLayout}
          requiredSessionState={SessionState.LOGGED_IN}
        />
      )}
    />
    <Route path="/database">
      <Route
        path="/database/schema"
        element={(
          <ProtectedRoute
            component={Schema}
            layout={InternalLayout}
            requiredSessionState={SessionState.LOGGED_IN}
          />
      )}
      />
    </Route>
  </Routes>
)

export default WorkspaceContainer
