import React from "react";
import { styled } from "../stiches.config";
import SVG from 'react-inlinesvg'
import Flex from "./Flex";

const reqIcons = require.context('../assets/icons', true, /\.svg$/)

interface Props {
  name: string  
}

const StyledIcon = styled(Flex, {
  width: '42px',
  height: '42px',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '18px',
  color: 'rgba(98, 113, 255, 1)',
  backgroundColor: 'rgba(98, 113, 255, 0.1)'
})

const Icon: React.FC<Props & Partial<typeof Flex>> = ({ name }) => {

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

  return (
    <StyledIcon>
      <i>{renderSVG()}</i>
    </StyledIcon>
  )
}

export default Icon