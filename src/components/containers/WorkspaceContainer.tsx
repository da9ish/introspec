import { Outlet, Route, Routes } from 'react-router'

import RootPage from 'pages/RootPage'
import Onboard from 'pages/Onboard'
import WorkspaceSetup from 'pages/WorkspaceSetup'
import ExternalLayout from 'layouts/ExternalLayout'

const WorkspaceContainer: React.FC = () => (
  <ExternalLayout>
    <Routes>
      <Route path="/" element={<RootPage />} />
      <Route path="/onboard" element={<Onboard />} />
      <Route path="/workspace-setup" element={<WorkspaceSetup />} />
    </Routes>
    <Outlet />
  </ExternalLayout>
)

export default WorkspaceContainer
