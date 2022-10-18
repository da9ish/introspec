import Highlight, { defaultProps } from 'prism-react-renderer'

import { styled } from '@stitches/react'

import Box from 'components/Box'

interface Props {
  code: string
}

const StyledPre = styled(Box, {
  padding: '16px',
  borderRadius: '20px',
  fontSize: '16px',
  lineHeight: '24px'
})

const CodeBlock: React.FC<Props> = ({ code }) => (
  <Highlight {...defaultProps} language="graphql" code={code}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <StyledPre as="pre" className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </StyledPre>
    )}
  </Highlight>
)

export default CodeBlock
