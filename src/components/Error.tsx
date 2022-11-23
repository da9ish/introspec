import type { ApolloError } from '@apollo/client'

import Flex from 'components/Flex'
import CodeBlock from 'components/Codeblock'

interface Props {
  error: ApolloError
}

const ERROR_OBJECT = `{
  "data": {
    "schema": null
  },
  "errors": [
    {
      "message": "Introspection Failed!!",
      "locations": [
        {
          "line":2,
          "column":3
        }
      ],
      "path": [ "schema" ],
      "extensions": {
        "code":"Internal Server Error"
      }
    }
  ]
}`

const Error: React.FC<Props> = ({ error }) => (
  <Flex css={{ width: 'calc(100vw - 220px)', height: '100%' }} direction="column" alignItems="center" justifyContent="center">
    <CodeBlock code={JSON.stringify(error)} language="json" />
  </Flex>
)

export default Error
