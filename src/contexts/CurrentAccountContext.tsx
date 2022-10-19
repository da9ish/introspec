import { createContext, PropsWithChildren, useContext } from 'react'

import { User, useCurrentAccountQuery } from 'generated/schema'
import AppLoader from 'components/AppLoader'
import useClientQuery from 'hooks/useClientQuery'
import { SessionQuery, SESSION_QUERY } from 'client/state/session'

const currentAccountContext = createContext<User | undefined>(undefined)

const useCurrentAccountContext = () => useContext(currentAccountContext)

const CurrentAccountProvider = ({ children }: PropsWithChildren<{}>) => {
  const { data: { session: { accessToken } } } = useClientQuery<SessionQuery>(SESSION_QUERY)

  const skip = !accessToken
  const {
    data: { currentAccount } = {},
    loading
  } = useCurrentAccountQuery({
    skip,
    fetchPolicy: 'network-only'
  })

  if (!currentAccount && loading) {
    return <AppLoader />
  }

  return (
    <currentAccountContext.Provider value={currentAccount as User}>
      {children}
    </currentAccountContext.Provider>
  )
}

export { useCurrentAccountContext }
export default CurrentAccountProvider
