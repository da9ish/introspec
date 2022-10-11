import React from 'react'
import { Route, Routes } from 'react-router'

import Box from '../components/Box'
import Landing from '../pages/Landing'
import Login from '../pages/Login'
import SignUp from '../pages/Signup'

const Public: React.FC = () => (
  <Box as="main" css={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </Box>
)

export default Public
