import Clickable from 'components/Clickable'
import Icon, { IconProps } from 'components/Icon'

import type { ButtonProps } from './Button'

const IconButton: React.FC<IconProps> = ({ onClick, ...props }) => (
  <Clickable
    as="button"
    role="button"
    onClick={onClick as ButtonProps['onClick']}
  >
    <Icon {...props} />
  </Clickable>
)

export default IconButton
