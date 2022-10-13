import { ApolloProvider } from '@apollo/client'

import AppContainer from 'components/containers/AppContainer'
import AppLoader from 'components/AppLoader'
import ClientProvider from 'providers/ClientProvider'
import CurrentAccountProvider from 'contexts/CurrentAccountContext'
import GlobalProvider from 'providers/GlobalProvider'
import WorkspaceContainer from 'components/containers/WorkspaceContainer'
import { isAppHostname } from 'libs/hostname'

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
              {isAppHostname ? <AppContainer /> : <WorkspaceContainer />}
            </CurrentAccountProvider>
          </GlobalProvider>
        </ApolloProvider>
      )
    }}
  </ClientProvider>
)

export default Root
