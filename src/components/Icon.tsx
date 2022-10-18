/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import SVG from 'react-inlinesvg'
import { styled } from '@stitches/react'
import type { IconProps } from 'react-feather'

import Flex from 'components/Flex'

const reqIcons = require.context('assets/icons', true, /\.svg$/)

interface StyledIconProps {
  name: string,
  feather?: boolean
}

const StyledIcon = styled(Flex, {
  alignItems: 'center',
  justifyContent: 'center'
})

const Icon = ({ name, size = '13px', feather = true }: IconProps & StyledIconProps) => {
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
    return (
      <StyledIcon><FeatherIcon size={size} /></StyledIcon>
    )
  }

  return (
    <StyledIcon>
      <i>{renderSVG()}</i>
    </StyledIcon>
  )
}

export type { StyledIconProps as IconProps }

export default Icon
