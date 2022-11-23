import { gql } from '@apollo/client'

import type { ClientState } from 'client/state/types'
import type { User, Workspace } from 'generated/schema'

/* Default Data */

const DEFAULT_SESSION: Session = {
  __typename: 'Session',
  id: null,
  accessToken: null,
  client: null,
  expiry: null,
  tokenType: null,
  onBoardingCompleted: false,
  workspace: null,
  user: null
}

/* Types */

export type Session = {
  __typename: 'Session',
  id: string | null,
  accessToken: string | null,
  client: string | null,
  expiry: number | null,
  tokenType: string | null,
  onBoardingCompleted: boolean,
  workspace: Workspace | null,
  user: User | null
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
      onBoardingCompleted
      workspace {
        id
        name
        identifier
        logo
        environments {
          id
          name
          identifier
        }
      }
      user {
        name
        username
        email
        firstName
        lastName
        username
        role
        profilePic
      }
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
  mutation setSessionMutation($id: UUID!, $accessToken: String!, $client: String!, $expiry: Integer!, $tokenType: String!, $onBoardingCompleted: Boolean!, $workspace: Workspace!, $user: User!) {
    setSession(id: $id, accessToken: $accessToken, client: $client, expiry: $expiry, tokenType: $tokenType, onBoardingCompleted: $onBoardingCompleted, workspace: $workspace, user: $user) @client
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
      setSession: (_, {
        id, accessToken, client, expiry, tokenType, onBoardingCompleted = false, workspace, user
      }, { cache }) => {
        cache.writeQuery({
          query: SESSION_QUERY,
          data: {
            session: {
              __typename: 'Session',
              id,
              accessToken,
              client,
              expiry,
              tokenType,
              onBoardingCompleted,
              workspace,
              user
            }
          }
        })

        return null
      }
    }
  }
} as ClientState
