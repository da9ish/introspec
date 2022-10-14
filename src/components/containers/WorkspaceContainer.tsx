import { Outlet, Route, Routes } from 'react-router'

import Schema from 'pages/Database/Schema'
import Overview from 'pages/Overview'
import RootPage from 'pages/RootPage'
import InternalLayout from 'layouts/InternalLayout'

const WorkspaceContainer: React.FC = () => (
  <InternalLayout>
    <Routes>
      <Route path="/" element={<RootPage />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/database">
        <Route path="/database/schema" element={<Schema />} />
      </Route>
    </Routes>
    <Outlet />
  </InternalLayout>
)

export default WorkspaceContainer
