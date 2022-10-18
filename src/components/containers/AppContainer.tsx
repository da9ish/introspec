import { Outlet, Route, Routes } from 'react-router'

import Landing from 'pages/Landing'
import Login from 'pages/Login'
import SignUp from 'pages/Signup'
import Onboard from 'pages/Onboard'
import ExternalLayout from 'layouts/ExternalLayout'

const AppContainer: React.FC = () => (
  <ExternalLayout>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/onboard" element={<Onboard />} />
    </Routes>
    <Outlet />
  </ExternalLayout>
)

export default AppContainer
