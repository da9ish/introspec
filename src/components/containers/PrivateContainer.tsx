import { Outlet, Route, Routes } from 'react-router'

import Data from 'pages/Database/Data'
import Files from 'pages/Storage/Files'
import InternalLayout from 'layouts/InternalLayout'
import NotFoundPage from 'pages/NotFoundPage'
import Overview from 'pages/Overview'
import Schema from 'pages/Database/Schema'
import Users from 'pages/Authentication/Users'

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
      <Route path="/storage">
        <Route path="/storage/files" element={<Files />} />
        {/* <Route path="/storage/data" element={<Data />} /> */}
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Outlet />
  </InternalLayout>
)

export default PrivateContainer
