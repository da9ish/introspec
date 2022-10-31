import Flex from 'components/Flex'
import CodeBlock from 'components/Codeblock'

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

const Error: React.FC = () => (
  <Flex css={{ width: 'calc(100vw - 220px)', height: '100%' }} direction="column" alignItems="center" justifyContent="center">
    <CodeBlock code={ERROR_OBJECT} language="json" />
  </Flex>
)

export default Error
