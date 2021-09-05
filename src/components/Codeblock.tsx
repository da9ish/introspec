import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { Box } from "./Box";


const Codeblock: React.FC = ({children}) => {

  useEffect(() => Prism.highlightAll(), [])

  return (
    <Box as="pre" css={{borderRadius: '20px'}}>
      <code className="language-graphql">
        {children}
      </code>
    </Box>
  )
}

export default Codeblock