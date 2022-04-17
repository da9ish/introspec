import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SessionContext, { User } from '../contexts/SessionContext'
import Private from './Private'
import Public from './Public'

const Root: React.FC = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>({
    name: 'John Doe',
    email: 'john.doe@gmail.com',
  })

  useEffect(() => {
    fetch('http://localhost:6500/session', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'access-token': window.localStorage.getItem('token') || ''
      },
      mode: "cors",
    }).then(res => res.json()).then(res => {
      if (res.success) setUser(res.data)
      else navigate('/')
    }).catch(res => console.log(res))
  }, [])

  return (
    <SessionContext.Provider
      value={{
        user: user,
        isLoggedIn: !!user,
        reloadSession: () => {}
      }}
    >
      {!user ? <Public /> : <Private />}
    </SessionContext.Provider>
  )
}

export default Root