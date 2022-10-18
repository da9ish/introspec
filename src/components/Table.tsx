import type { ApolloError } from '@apollo/client'

import Flex from 'components/Flex'

interface Column {
  name: string,
  key: string,
  width?: 'auto' | string
}

interface Props {
  data: any,
  loading: boolean,
  error?: ApolloError,
  columns: Column[]
}

const Table: React.FC<Props> = ({ data, loading, error, columns }) => (
  <Flex />
)

export default Table
