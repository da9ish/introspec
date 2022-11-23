import { indigo, indigoDark } from '@radix-ui/colors'
import { styled } from '@stitches/react'

import Flex from 'components/Flex'
import Icon, { IconProps } from 'components/Icon'

interface Props {
  full?: boolean,
  mode?: 'light' | 'dark',
  size?: IconProps['size']
}

const LogoContainer = styled(Flex, {
  variants: {
    mode: {
      light: {
        '& [data-icon]': {
          color: indigo.indigo9
        }
      },
      dark: {
        '& [data-icon]': {
          color: indigoDark.indigo9
        }
      }
    }
  }
})

const AppName = styled('h3', {
  transition: 'all 0.1s ease',

  margin: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  color: `${indigoDark.indigo12}`,
  fontWeight: 600,

  variants: {
    mode: {
      light: {
        color: indigo.indigo12
      },
      dark: {
        color: indigoDark.indigo12
      }
    }
  }
})

const Logo: React.FC<Props> = ({ full = false, mode = 'dark', size }) => (
  <LogoContainer alignItems="center" gap="md" mode={mode}>
    <Icon data-icon name="logo" size={size} feather={false} />
    {full && <AppName mode={mode}>Instrospec</AppName>}
  </LogoContainer>
)

export default Logo
