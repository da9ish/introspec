import React from "react";
import Clickable from "./Clickable";
import Icon, { IconProps } from "./Icon";

const IconButton: React.FC<IconProps> = (props) => {
  return (
    <Clickable>
      <Icon {...props} />
    </Clickable>
  )
}

export default IconButton