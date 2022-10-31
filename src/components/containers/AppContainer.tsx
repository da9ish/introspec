import { Navigate, Outlet, Route, Routes } from 'react-router'

import Schema from 'pages/Database/Schema'
import Overview from 'pages/Overview'
import InternalLayout from 'layouts/InternalLayout'
import Data from 'pages/Database/Data'
import Users from 'pages/Authentication/Users'

const AppContainer: React.FC = () => (
  <InternalLayout>
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/overview" replace />}
      />
      <Route path="/overview" element={<Overview />} />
      <Route path="/authentication">
        <Route path="/authentication/users" element={<Users />} />
        {/* <Route path="/authentication/data" element={<Data />} /> */}
      </Route>
      <Route path="/database">
        <Route path="/database/schema" element={<Schema />} />
        <Route path="/database/data" element={<Data />} />
      </Route>
    </Routes>
    <Outlet />
  </InternalLayout>
)

export default AppContainer
