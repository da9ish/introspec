import { Outlet, Route, Routes } from 'react-router'

import Landing from 'pages/Landing'
import Login from 'pages/Login'
import SignUp from 'pages/Signup'
import ExternalLayout from 'layouts/ExternalLayout'

const PublicContainer: React.FC = () => (
  <ExternalLayout>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    <Outlet />
  </ExternalLayout>
)

export default PublicContainer
