import { useCurrentAccountContext } from 'contexts/CurrentAccountContext'

import PrivateContainer from 'components/containers/PrivateContainer'
import PublicContainer from 'components/containers/PublicContainer'

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
