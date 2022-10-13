import type { DataProxy, Resolvers } from '@apollo/client'

export type ClientState = {
  defaults: DataProxy.WriteQueryOptions<any, any>,
  resolvers: Resolvers
}
