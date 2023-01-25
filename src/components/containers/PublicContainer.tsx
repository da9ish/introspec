import { Outlet, Route, Routes } from 'react-router'

import ExternalLayout from 'layouts/ExternalLayout'
import Landing from 'pages/Landing'
import Login from 'pages/Login'
import NotFoundPage from 'pages/NotFoundPage'
import Onboard from 'pages/Onboard/Onboard'
import SignUp from 'pages/Signup'
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
