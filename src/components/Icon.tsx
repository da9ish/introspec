import React from 'react'

import SVG from 'react-inlinesvg'

import { styled } from '../stiches.config'
import Flex from './Flex'

const reqIcons = require.context('../assets/icons', true, /\.svg$/)

export interface IconProps {
  name: string,
  feather?: boolean
}

const StyledIcon = styled(Flex, {
  width: '16px',
  height: '16px',
  alignItems: 'center',
  justifyContent: 'center'
})

const Icon: React.FC<IconProps & Partial<typeof Flex>> = ({ name, feather = true }) => {
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

export default Icon
