import { createContext } from 'react'

interface User {
  name: string,
  email: string,
  profileUrl?: string
}

interface SessionType {
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

export type { User, SessionType }

export default SessionContext
