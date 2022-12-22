import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

import AppLoader from 'components/AppLoader'
import ClientProvider from 'providers/ClientProvider'
import CurrentAccountProvider, { useCurrentAccountContext } from 'contexts/CurrentAccountContext'
import GlobalProvider from 'providers/GlobalProvider'
import PortalContainer from 'components/containers/PortalContainer'
import WorkspaceContainer from 'components/containers/WorkspaceContainer'
import ThemeProvider from 'providers/ThemeProvider'
import ToastProvider from 'providers/ToastProvider'
import ViewProvider from 'providers/ViewProvider'

const AppRoot = () => {
  const currentAccount = useCurrentAccountContext()
  const isLoggedIn = currentAccount && currentAccount.onBoardingCompleted
  if (isLoggedIn) return <WorkspaceContainer />
  return <PortalContainer currentAccount={currentAccount} />
}

const Root: React.FC = () => (
  <ClientProvider>
    {({ apolloClient }) => {
      if (!apolloClient) {
        return <AppLoader />
      }

      return (
        <ApolloProvider client={apolloClient}>
          <ThemeProvider>
            <ToastProvider>
              <GlobalProvider>
                <CurrentAccountProvider>
                  <ViewProvider>
                    <BrowserRouter>
                      <AppRoot />
                    </BrowserRouter>
                  </ViewProvider>
                </CurrentAccountProvider>
              </GlobalProvider>
            </ToastProvider>
          </ThemeProvider>
        </ApolloProvider>
      )
    }}
  </ClientProvider>
)

export default Root
