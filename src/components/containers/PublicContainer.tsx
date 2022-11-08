import { Outlet, Route, Routes } from 'react-router'

import Landing from 'pages/Landing'
import Login from 'pages/Login'
import SignUp from 'pages/Signup'
import ExternalLayout from 'layouts/ExternalLayout'
import NotFoundPage from 'pages/NotFoundPage'
import Onboard from 'pages/Onboard'
import type { User } from 'generated/schema'

interface Props {
  currentAccount?: User
}
const PublicContainer: React.FC<Props> = ({ currentAccount }) => (
  <ExternalLayout>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      {currentAccount && <Route path="/onboard" element={<Onboard />} />}

      <Route element={<NotFoundPage />} />
    </Routes>
    <Outlet />
  </ExternalLayout>
)

export default PublicContainer
