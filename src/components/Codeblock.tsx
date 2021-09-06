import React from "react";
import { Box } from "./Box";
import Highlight, { defaultProps } from "prism-react-renderer";
import { styled } from "../stiches.config";

interface Props {
  code: string
}

const StyledPre = styled(Box, {
  padding: '16px',
  borderRadius: '20px',
  fontSize: '16px',
  lineHeight: '24px'
})

const Codeblock: React.FC<Props> = ({code}) => {
  return (
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
}

export default Codeblock