import Clickable from 'components/Clickable'
import Icon, { IconProps } from 'components/Icon'

interface Props {
  onClick: () => void
}

const IconButton: React.FC<Props & IconProps> = ({ onClick, ...props }) => (
  <Clickable as="button" role="button" onClick={onClick}>
    <Icon {...props} />
  </Clickable>
)

export default IconButton
