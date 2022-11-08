import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'

import AppLoader from 'components/AppLoader'
import ClientProvider from 'providers/ClientProvider'
import CurrentAccountProvider from 'contexts/CurrentAccountContext'
import GlobalProvider from 'providers/GlobalProvider'
import WorkspaceContainer from 'components/containers/WorkspaceContainer'
import AppContainer from 'components/containers/AppContainer'
import { hasWorkspaceHostname } from 'libs/hostname'

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
                {hasWorkspaceHostname ? <WorkspaceContainer /> : <AppContainer />}
              </BrowserRouter>
            </CurrentAccountProvider>
          </GlobalProvider>
        </ApolloProvider>
      )
    }}
  </ClientProvider>
)

export default Root
