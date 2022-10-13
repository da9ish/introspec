import type { PropsWithChildren } from 'react'

import Box from 'components/Box'

const ExternalLayout: React.FC<PropsWithChildren> = ({ children }) => (
  <Box css={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
    {children}
  </Box>
)

export default ExternalLayout
