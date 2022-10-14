import { Outlet, Route, Routes, useNavigate } from 'react-router'

import Landing from 'pages/Landing'
import Login from 'pages/Login'
import SignUp from 'pages/Signup'
import ExternalLayout from 'layouts/ExternalLayout'
import { useCurrentAccountContext } from 'contexts/CurrentAccountContext'

const AppContainer: React.FC = () => {
  const navigate = useNavigate()
  const currentAccount = useCurrentAccountContext()
  if (currentAccount) {
    navigate('/')
  }
  if (!currentAccount) {
    navigate('/login')
  }

  return (
    <ExternalLayout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Outlet />
    </ExternalLayout>
  )
}

export default AppContainer
