import merge from 'lodash/merge'
import type { Resolvers } from '@apollo/client'

import sessionState from 'client/state/session'

export const defaultQueries = [
  sessionState.defaults
]

export const resolvers: Resolvers = merge(
  sessionState.resolvers
)
