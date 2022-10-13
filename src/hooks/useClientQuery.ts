import { useQuery } from '@apollo/client'
import type { DocumentNode, QueryHookOptions, QueryResult, WatchQueryFetchPolicy } from '@apollo/client'

function useClientQuery<TData, TVariables = Record<string, any>>(
  query: DocumentNode,
  options?: QueryHookOptions<TData, TVariables>
) {
  const newOptions = { fetchPolicy: 'cache-only' as WatchQueryFetchPolicy, ...options }

  return useQuery<TData, TVariables>(query, newOptions) as QueryResult<TData> & { data: TData }
}

export default useClientQuery
