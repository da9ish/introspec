import { styled } from "@stitches/react";
import React from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";

interface Props {
  name: 'node' | 'type' | 'field' | 'arg',
  urlParam?: string
}

const StyledTag = styled('code', {
  cursor: 'pointer',
  padding: '.1em .15em',
  borderRadius: '.3em',
  fontSize: '.9em',
  background: '#F4F6F8',

  '&:hover': {
    textDecoration: 'underline'
  },

  variants: {
    tag: {
      node: {
        color: '#832363',
      },
      type: {
        color: '#3f20ba'
      },
      field: {
        color: '#1d7b78'
      },
      arg: {
        color: '#84671d'
      }
    }
  }
})

const Tag: React.FC<Props> = ({name, urlParam, children}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const projectId = location.pathname.split("/")[2]
  return (
    <StyledTag tag={name} onClick={() => urlParam && navigate(`/docs/${projectId}/type/${urlParam}`)}>{children}</StyledTag>
  )
}

export default Tag