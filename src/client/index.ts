import { ApolloClient, from, InMemoryCache } from '@apollo/client'

const cache = new InMemoryCache()

const { REACT_APP_API_BASE_URL } = process.env

const apiUrl = `${REACT_APP_API_BASE_URL}/graphql`

const client = new ApolloClient({
  cache,
  uri: apiUrl,
  name: 'Introspec',
  version: '1.0',
  link: from([]),
  resolvers: {},
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
      fetchPolicy: 'cache-and-network',
      nextFetchPolicy: 'cache-first'
    },
    query: {
      errorPolicy: 'all'
    },
    mutate: {
      errorPolicy: 'none'
    }
  }
})

export { cache }

export default client
