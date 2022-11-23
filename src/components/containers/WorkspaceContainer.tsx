import PrivateContainer from './PrivateContainer'
import PublicContainer from './PublicContainer'
import { useCurrentAccountContext } from 'contexts/CurrentAccountContext'

const WorkspaceContainer: React.FC = () => {
  const currentAccount = useCurrentAccountContext()

  if (currentAccount
    && currentAccount.workspace
  && currentAccount.onBoardingCompleted) return <PrivateContainer />

  // if (currentAccount) return <PrivateContainer />

  return (
    <PublicContainer currentAccount={currentAccount} />
  )
}

export default WorkspaceContainer
