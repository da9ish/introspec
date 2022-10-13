import { gql } from '@apollo/client'

import type { ClientState } from 'client/state/types'

/* Default Data */

const DEFAULT_SESSION: Session = {
  __typename: 'Session',
  id: null,
  accessToken: null,
  client: null,
  expiry: null,
  tokenType: null
}

/* Types */

export type Session = {
  __typename: 'Session',
  id: string | null,
  accessToken: string | null,
  client: string | null,
  expiry: number | null,
  tokenType: string | null
}

export type SessionQuery = {
  session: Session
}

/* Queries */

export const SESSION_QUERY = gql`
  query SessionQuery {
    session @client {
      id
      accessToken
      client
      expiry
      tokenType
    }
  }
`

/* Default Query */

export const writeDefaults = {
  query: SESSION_QUERY,
  data: { session: DEFAULT_SESSION }
}

/* Mutations */

export const SET_SESSION_MUTATION = gql`
  mutation SetSessionMutation($id: UUID!, $accessToken: String!, $client: String!, $expiry: Integer!, $tokenType: String!) {
    setSession(id: $id, accessToken: $accessToken, client: $client, expiry: $expiry, tokenType: $tokenType) @client
  }
`

/* ClientState */

export default {
  defaults: {
    query: SESSION_QUERY,
    data: { session: DEFAULT_SESSION }
  },

  resolvers: {
    Mutation: {
      setSession: (_, { id, accessToken, client, expiry, tokenType }, { cache }) => {
        cache.writeQuery({
          query: SESSION_QUERY,
          data: {
            session: {
              __typename: 'Session',
              id,
              accessToken,
              client,
              expiry,
              tokenType
            }
          }
        })

        return null
      }
    }
  }
} as ClientState
