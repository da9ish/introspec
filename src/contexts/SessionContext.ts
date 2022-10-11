import { createContext } from 'react'

export interface User {
  name: string,
  email: string,
  profileUrl?: string
}

export interface SessionType {
  user: User | null,
  isLoggedIn: boolean,
  reloadSession: () => void
}

const initialSession: SessionType = {
  user: null,
  reloadSession: () => {
    /* empty */
  },
  isLoggedIn: false
}

const SessionContext = createContext<SessionType>(initialSession)

export default SessionContext
