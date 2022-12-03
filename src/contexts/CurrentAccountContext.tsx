import { createContext, PropsWithChildren, useContext, useMemo } from 'react'

import { User, useCurrentAccountQuery } from 'generated/schema'
import AppLoader from 'components/AppLoader'
import useClientQuery from 'hooks/useClientQuery'
import { SessionQuery, SESSION_QUERY } from 'client/state/session'

type CurrentAccountContextType = User & {onBoardingCompleted?: boolean}
const currentAccountContext = createContext<CurrentAccountContextType | undefined>(undefined)

const useCurrentAccountContext = () => useContext(currentAccountContext)

const CurrentAccountProvider = ({ children }: PropsWithChildren<{}>) => {
  const {
    data: { session: { accessToken, workspace, onBoardingCompleted, user } }
  } = useClientQuery<SessionQuery>(SESSION_QUERY)

  const skip = Boolean(accessToken && workspace)
  const {
    data: { currentAccount: currentAccountData } = {},
    loading
  } = useCurrentAccountQuery({
    skip,
    fetchPolicy: 'network-only'
  })

  const currentUser = currentAccountData || user

  const currentAccount = useMemo(() => ({
    ...currentUser,
    workspace: currentAccountData?.workspace || workspace,
    onBoardingCompleted
  }), [ currentUser, currentAccountData, workspace, onBoardingCompleted ])

  if (!currentAccountData && loading) {
    return <AppLoader />
  }

  return (
    <currentAccountContext.Provider value={currentAccount as User}>
      {children}
    </currentAccountContext.Provider>
  )
}

export { useCurrentAccountContext }
export type { CurrentAccountContextType }
export default CurrentAccountProvider
