import { createContext } from 'react'
import type { GraphQLSchema } from 'graphql'

interface GraphQLType {
  schema: GraphQLSchema | null,
  reloadSchema: () => void
}

const initialValue: GraphQLType = {
  schema: null,
  reloadSchema: () => {}
}

const GraphQLContext = createContext<GraphQLType>(initialValue)

export type {
  GraphQLType
}

export default GraphQLContext
