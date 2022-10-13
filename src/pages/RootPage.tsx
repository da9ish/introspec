import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import AppLoader from 'components/AppLoader'
import Box from 'components/Box'
import { useCurrentAccountContext } from 'contexts/CurrentAccountContext'

const RootPage = () => {
  const navigate = useNavigate()
  const currentAccount = useCurrentAccountContext()

  useEffect(() => {
    if (currentAccount) navigate('/overview')
    else navigate('/login')
  }, [ currentAccount, navigate ])

  return (
    <Box css={{ width: '100%' }}>
      <AppLoader />
    </Box>
  )
}

export default RootPage
