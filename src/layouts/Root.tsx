import { ApolloProvider } from '@apollo/client'

import AppContainer from 'components/containers/AppContainer'
import AppLoader from 'components/AppLoader'
import ClientProvider from 'providers/ClientProvider'
import CurrentAccountProvider, { useCurrentAccountContext } from 'contexts/CurrentAccountContext'
import GlobalProvider from 'providers/GlobalProvider'
import WorkspaceContainer from 'components/containers/WorkspaceContainer'

const Containers = () => {
  const currentAccount = useCurrentAccountContext()

  return currentAccount ? <WorkspaceContainer /> : <AppContainer />
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
              <Containers />
            </CurrentAccountProvider>
          </GlobalProvider>
        </ApolloProvider>
      )
    }}
  </ClientProvider>
)

export default Root
