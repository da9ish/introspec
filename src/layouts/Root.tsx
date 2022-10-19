import { ApolloProvider } from '@apollo/client'

import PublicContainer from 'components/containers/PublicContainer'
import AppLoader from 'components/AppLoader'
import ClientProvider from 'providers/ClientProvider'
import CurrentAccountProvider, { useCurrentAccountContext } from 'contexts/CurrentAccountContext'
import GlobalProvider from 'providers/GlobalProvider'
import WorkspaceContainer from 'components/containers/WorkspaceContainer'
import AppContainer from 'components/containers/AppContainer'

const Containers = () => {
  const currentAccount = useCurrentAccountContext()
  console.log(currentAccount)
  if (currentAccount) {
    if (currentAccount.workspace) return <AppContainer />
    return <WorkspaceContainer />
  }
  return <PublicContainer />
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
