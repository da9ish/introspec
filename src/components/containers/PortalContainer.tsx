import PublicContainer from 'components/containers/PublicContainer'
import type { CurrentAccountContextType } from 'contexts/CurrentAccountContext'

interface Props {
  currentAccount?: CurrentAccountContextType
}

const PortalContainer: React.FC<Props> = ({ currentAccount }) => (
  <PublicContainer currentAccount={currentAccount} />
)

export default PortalContainer
