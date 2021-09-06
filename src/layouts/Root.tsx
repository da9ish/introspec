import React from "react";
import SessionContext from '../contexts/SessionContext'
import Private from './Private'
import Public from './Public'

interface Props {
  
}

const Root: React.FC<Props> = ({}) => {
  const isLoggedIn = false
  return (
    <SessionContext.Provider
      value={{
        user: {
          name: 'John Doe',
          email: 'john@example.com'
        },
        isLoggedIn: isLoggedIn,
        reloadSession: () => {}
      }}
    >
      {isLoggedIn ? <Private /> : <Public />}
    </SessionContext.Provider>
  )
}

export default Root