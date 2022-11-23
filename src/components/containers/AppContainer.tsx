import { Outlet, Route, Routes } from 'react-router'

import ExternalLayout from 'layouts/ExternalLayout'
import NotFoundPage from 'pages/NotFoundPage'
import Landing from 'pages/Landing'

const AppContainer: React.FC = () => (
  <ExternalLayout>
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route element={<NotFoundPage />} />
    </Routes>
    <Outlet />
  </ExternalLayout>
)

export default AppContainer
