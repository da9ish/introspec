import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

import parseError from 'libs/parseError'

import { defaultQueries, resolvers } from './state'
import { alertVar } from './state/alert'

import { SessionQuery, SESSION_QUERY } from './state/session'

const cache = new InMemoryCache()

const writeDefaultsToCache = () => {
  defaultQueries.forEach((defaultQuery) => cache.writeQuery(defaultQuery))

  return Promise.resolve()
}

const { REACT_APP_API_BASE_URL } = process.env

const apiUrl = `${REACT_APP_API_BASE_URL}/graphql`

const authLink = setContext(async (_gqlContext, { headers }) => {
  const result = cache.readQuery({ query: SESSION_QUERY }) as SessionQuery

  const modifiedHeaders = { ...headers }

  if (result) {
    const { session } = result
    if (session.accessToken) {
      modifiedHeaders['access-token'] = session.accessToken
      modifiedHeaders.client = session.client
      modifiedHeaders.uid = session.id
      modifiedHeaders.expiry = session.expiry
      modifiedHeaders['token-type'] = session.tokenType
      modifiedHeaders['workspace-id'] = session.workspace?.id
      modifiedHeaders['environment-id'] = (session.workspace?.environments || [])[0]?.id
    }
  }

  return { headers: modifiedHeaders }
})

const errorLink = onError((error) => {
  const { graphQLErrors } = error
  if (!graphQLErrors) {
    return
  }
  const errorCodes = graphQLErrors.map((err) => err.extensions?.code)

  if (errorCodes.includes('UNAUTHORIZED')) {
    writeDefaultsToCache()

    const { alert } = parseError(error)
    alertVar({
      icon: alert?.icon || null,
      message: alert?.message || null,
      title: alert?.title || null,
      variant: 'failure',
      isOpen: true
    })
  }
})

const httpLink = new HttpLink({ uri: apiUrl })

const client = new ApolloClient({
  cache,
  name: 'Introspec',
  version: '1.0',
  link: from([
    authLink,
    errorLink,
    httpLink
  ]),
  resolvers,
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
      fetchPolicy: 'network-only',
      nextFetchPolicy: 'network-only'
    },
    query: {
      errorPolicy: 'all'
    },
    mutate: {
      errorPolicy: 'none'
    }
  }
})

client.onClearStore(writeDefaultsToCache)
client.onResetStore(writeDefaultsToCache)

writeDefaultsToCache()

export { cache }

export default client
