import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

import AppLoader from 'components/AppLoader'
import ClientProvider from 'providers/ClientProvider'
import CurrentAccountProvider, { useCurrentAccountContext } from 'contexts/CurrentAccountContext'
import GlobalProvider from 'providers/GlobalProvider'
import WorkspaceContainer from 'components/containers/WorkspaceContainer'
import AppContainer from 'components/containers/AppContainer'

const AppRoot = () => {
  const currentAccount = useCurrentAccountContext()
  const isLoggedIn = currentAccount && currentAccount.onBoardingCompleted
  if (isLoggedIn) return <WorkspaceContainer />
  return <AppContainer currentAccount={currentAccount} />
}

const Root: React.FC = () => (
  <ClientProvider>
    {({ apolloClient }) => {
      if (!apolloClient) {
        return <AppLoader />
      }

      return (
        <ApolloProvider client={apolloClient}>
          <GlobalProvider>
            <CurrentAccountProvider>
              <BrowserRouter>
                <AppRoot />
              </BrowserRouter>
            </CurrentAccountProvider>
          </GlobalProvider>
        </ApolloProvider>
      )
    }}
  </ClientProvider>
)

export default Root
