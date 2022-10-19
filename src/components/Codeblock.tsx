import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import vsLight from 'prism-react-renderer/themes/vsLight'
import { styled } from '@stitches/react'

interface Props {
  code: string,
  language: Language
}

const Pre = styled('pre', {
  textAlign: 'left',
  margin: '1em 0',
  padding: '0.5em',
  overflow: 'scroll'
})

const Line = styled('div', {
  display: 'table-row'
})

const LineNo = styled('span', {
  display: 'table-cell',
  textAlign: 'right',
  paddingRight: '1em',
  userSelect: 'none',
  opacity: '0.5'
})

const LineContent = styled('span', {
  display: 'table-cell'
})

const CodeBlock: React.FC<Props> = ({ code, language }) => (
  <Highlight {...defaultProps} theme={vsLight} language={language} code={code}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre as="pre" className={className} style={style}>
        {tokens.map((line, i) => (
          <Line {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            <LineContent>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
    )}
  </Highlight>
)

export default CodeBlock
