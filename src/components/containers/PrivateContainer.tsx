import { Outlet, Route, Routes } from 'react-router'

import InternalLayout from 'layouts/InternalLayout'
import Schema from 'pages/Database/Schema'
import Overview from 'pages/Overview'
import Data from 'pages/Database/Data'
import Users from 'pages/Authentication/Users'
import NotFoundPage from 'pages/NotFoundPage'

const PrivateContainer: React.FC = () => (
  <InternalLayout>
    <Routes>
      <Route path="/overview" element={<Overview />} />
      <Route path="/authentication">
        <Route path="/authentication/users" element={<Users />} />
        {/* <Route path="/authentication/data" element={<Data />} /> */}
      </Route>
      <Route path="/database">
        <Route path="/database/schema" element={<Schema />} />
        <Route path="/database/data" element={<Data />} />
      </Route>

      <Route element={<NotFoundPage />} />
    </Routes>
    <Outlet />
  </InternalLayout>
)

export default PrivateContainer
