import { styled } from "@stitches/react";
import { GraphQLInputType, GraphQLOutputType } from "graphql";
import React, { useState } from "react";

interface Props {
  type: GraphQLOutputType | GraphQLInputType
}

const StyledType = styled('code', {
  padding: '8px',
  fontSize: '14px',
  borderRadius: '8px',
  backgroundColor: '#fdf7ac',

})

const Type: React.FC<Props> = ({type}) => {
  // const [required, setRequired] = useState(false)
  return (
    <StyledType>{type.toJSON()}</StyledType>
  )
}

export default Type