/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import SVG from 'react-inlinesvg'

import Flex from './Flex'
import { styled } from '../stiches.config'

const reqIcons = require.context('../assets/icons', true, /\.svg$/)

interface IconProps {
  name: string,
  feather?: boolean
}

const StyledIcon = styled(Flex, {
  width: '16px',
  height: '16px',
  alignItems: 'center',
  justifyContent: 'center'
})

const Icon = ({ name, feather = true }: IconProps & Partial<typeof Flex>) => {
  const renderSVG = () => {
    try {
      return (
        <SVG
          style={{
            display: 'block',
            height: '24px',
            width: '24px'
          }}
          src={reqIcons(`./${name}.svg`).default}
        />
      )
    } catch (e) {
      return null
    }
  }

  if (feather) {
    const FeatherIcon = require(`react-feather/dist/icons/${name}`).default
    return <StyledIcon><FeatherIcon /></StyledIcon>
  }

  return (
    <StyledIcon>
      <i>{renderSVG()}</i>
    </StyledIcon>
  )
}

export type { IconProps }

export default Icon
