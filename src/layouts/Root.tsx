import { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router'

import SessionContext, { User } from '../contexts/SessionContext'
import Private from './Private'
import Public from './Public'

const Root: React.FC = () => {
  const navigate = useNavigate()
  const user = useMemo(() => ({
    name: '',
    email: ''
  }), [])
  const contextValues = useMemo(() => ({
    user,
    isLoggedIn: !!user,
    reloadSession: () => {}
  }), [ user ])
  // const [ user, setUser ] = useState<User | null>({
  //   name: 'John Doe',
  //   email: 'john.doe@gmail.com'
  // })

  // useEffect(() => {
  //   fetch('http://localhost:3000/session', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'access-token': window.localStorage.getItem('token') || ''
  //     },
  //     mode: 'cors'
  //   }).then((res) => res.json()).then((res) => {
  //     if (res.success) setUser(res.data)
  //     else navigate('/')
  //   }).catch((res) => console.log(res))
  // }, [])

  return (
    <SessionContext.Provider
      value={contextValues}
    >
      {!user ? <Public /> : <Private />}
    </SessionContext.Provider>
  )
}

export default Root
