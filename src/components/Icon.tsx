/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import SVG from 'react-inlinesvg'
import { styled } from '@stitches/react'
import type { IconProps } from 'react-feather'

import Flex from 'components/Flex'

const reqIcons = require.context('assets', true, /\.svg$/)

interface StyledIconProps extends IconProps {
  name: string,
  feather?: boolean
}

const StyledIcon = styled(Flex, {
  alignItems: 'center',
  justifyContent: 'center'
})

const Icon: React.FC<StyledIconProps> = ({ name, size = '13px', feather = true, ...props }) => {
  const renderSVG = () => {
    try {
      return (
        <SVG
          style={{
            display: 'block',
            height: size,
            width: size
          }}
          src={reqIcons(`./${name}.svg`)}
        />
      )
    } catch (e) {
      return null
    }
  }

  if (feather) {
    const FeatherIcon = require(`react-feather/dist/icons/${name}`).default
    return (
      <StyledIcon {...props as any}><FeatherIcon size={size} /></StyledIcon>
    )
  }

  return (
    <StyledIcon {...props as any}>
      <i>{renderSVG()}</i>
    </StyledIcon>
  )
}

export type { StyledIconProps as IconProps }

export default Icon
