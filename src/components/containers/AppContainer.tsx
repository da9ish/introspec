import { Navigate, Outlet, Route, Routes } from 'react-router'

import Schema from 'pages/Database/Schema'
import Overview from 'pages/Overview'
import InternalLayout from 'layouts/InternalLayout'

const AppContainer: React.FC = () => (
  <InternalLayout>
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/overview" replace />}
      />
      <Route path="/overview" element={<Overview />} />
      <Route path="/database">
        <Route path="/database/schema" element={<Schema />} />
      </Route>
    </Routes>
    <Outlet />
  </InternalLayout>
)

export default AppContainer
