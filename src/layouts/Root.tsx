import React, { useEffect, useState } from "react";
import SessionContext, { User } from '../contexts/SessionContext'
import Private from './Private'
import Public from './Public'

interface Props {
  
}

const Root: React.FC<Props> = () => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    fetch('http://localhost:6500/session', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': window.localStorage.getItem('token') || ''
      },
      mode: "cors",
    }).then(res => res.json()).then(res => {
      setUser(res.user)
    })
  }, [])

  console.log(!user);

  return (
    <SessionContext.Provider
      value={{
        user: user,
        isLoggedIn: !user,
        reloadSession: () => {}
      }}
    >
      {!user ? <Private /> : <Public />}
    </SessionContext.Provider>
  )
}

export default Root