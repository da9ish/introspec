import { styled } from '@stitches/react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router'

interface Props {
  name: 'node' | 'type' | 'field' | 'arg',
  urlParam?: string,
  children: React.ReactNode
}

const StyledTag = styled('code', {
  cursor: 'pointer',
  padding: '4px 14px',
  borderRadius: '12px',
  fontSize: '.9em',
  background: '#F4F6F8',

  '&:hover': {
    textDecoration: 'underline'
  },

  variants: {
    tag: {
      node: {
        color: 'rgba(131, 35, 99, 1)',
        backgroundColor: 'rgba(131, 35, 99, 0.1)'
      },
      type: {
        color: 'rgba(98, 113, 255, 1)',
        backgroundColor: 'rgba(98, 113, 255, 0.1)'
      },
      field: {
        color: 'rgba(29,123,120, 1)',
        backgroundColor: 'rgba(29,123,120, 0.1)'
      },
      arg: {
        color: 'rgba(255, 50, 173, 1)',
        backgroundColor: 'rgba(255, 50, 173, 0.1)'
      }
    }
  }
})

const Tag: React.FC<Props> = ({ name, urlParam, children }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const projectId = location.pathname.split('/')[2]
  return (
    <StyledTag tag={name} onClick={() => urlParam && navigate(`/docs/${projectId}/type/${urlParam}`)}>{children}</StyledTag>
  )
}

export default Tag
