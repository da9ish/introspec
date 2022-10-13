import { CachePersistor, LocalForageWrapper } from 'apollo3-cache-persist'
import { useState, useEffect } from 'react'
import type { ApolloClient } from '@apollo/client'

import localforage from 'localforage'

import client, { cache } from 'client'

const SCHEMA_VERSION = '3.0'
const SCHEMA_VERSION_KEY = 'introspec-schema-version'

localforage.config({
  name: 'introspec',
  storeName: 'apollo-cache',
  driver: localforage.INDEXEDDB,
  version: Number.parseFloat(SCHEMA_VERSION)
})

const storage = new LocalForageWrapper(localforage)

const persistor = new CachePersistor({
  cache,
  storage,
  // 1024 * 1024 -> 1MB is default
  maxSize: 1024 * 1024 * 100
})

type InjectedClientProviderProps = {
  apolloClient: ApolloClient<any> | null
}

type ClientProviderProps = {
  children(props: InjectedClientProviderProps): React.ReactElement
}

function ClientProvider({ children }: ClientProviderProps) {
  const [ apolloClient, setApolloClient ] = useState<ApolloClient<any> | null>(null)

  useEffect(() => {
    storage.getItem(SCHEMA_VERSION_KEY).then((schemaVersion) => {
      if (schemaVersion === SCHEMA_VERSION) {
        persistor.restore().then(() => setApolloClient(client))
      } else {
        persistor.purge().then(() => {
          storage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION)
          setApolloClient(client)
        })
      }
    }).finally(() => {
      persistor.restore().then(() => setApolloClient(client))
    })

    return () => {}
  }, [])

  return children({ apolloClient })
}

export default ClientProvider

export { persistor, storage }
