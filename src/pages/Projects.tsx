import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router'

import Button from '../components/Button'
import Flex from '../components/Flex'
import { ReactComponent as Edit } from '../assets/icons/edit.svg'
import { ReactComponent as Delete } from '../assets/icons/trash.svg'
import { Project } from '../types/Project'
import Box from '../components/Box'

const Projects: React.FC = () => {
  const navigate = useNavigate()
  const [ projects, setProjects ] = useState<Project[]>([])

  useEffect(() => {
    fetch('http://localhost:6500/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': window.localStorage.getItem('token') || ''
      },
      mode: 'cors'
    }).then((res) => res.json()).then((res) => {
      console.log(res)
      setProjects(res.data)
    })
  }, [])

  return (
    <Box css={{ flexGrow: 1, padding: '0 32px', overflow: 'auto' }}>
      <Flex alignItems="center" justifyContent="space-between">
        <h3>Projects</h3>
        <Button onClick={() => navigate('/project/new')}>Create Project</Button>
      </Flex>
      <Flex>
        <table style={{ width: '100%' }}>
          <Box as="thead" css={{ width: '100%', height: '48px', display: 'flex', alignItems: 'center' }}>
            <Flex as="th" css={{ flexGrow: 1, fontSize: '12px', fontWeight: 400, color: '#545454' }}>
              <Box as="td" css={{ flexGrow: 1, textAlign: 'left' }}>Name</Box>
              <Box as="td" css={{ width: '150px', textAlign: 'left' }}>Status</Box>
              <Box as="td" css={{ width: '150px', textAlign: 'right' }}>Created At</Box>
              <Box as="td" css={{ width: '150px', textAlign: 'right' }} />
            </Flex>
          </Box>
          <Flex as="tbody" direction="column" css={{ width: '100%' }}>
            {projects.map((project) => (
              <Flex as="tr" key={project.id} alignItems="center" css={{ flexGrow: 1, height: '64px', borderBottom: '1px solid #F0EEE0' }} onClick={() => navigate(`/docs/${project.id}`)}>
                <Box as="td" css={{ flexGrow: 1, textAlign: 'left' }}>{project.name}</Box>
                <Box as="td" css={{ width: '150px', textAlign: 'left' }}>{project.status}</Box>
                <Box as="td" css={{ width: '150px', textAlign: 'right' }}>{new Date(project.createdAt).toDateString()}</Box>
                <Box as="td" css={{ width: '150px', textAlign: 'left' }}>
                  <Flex justifyContent="space-evenly">
                    <Edit />
                    <Delete />
                  </Flex>
                </Box>
              </Flex>
            ))}
          </Flex>
        </table>
      </Flex>
    </Box>
  )
}

export default Projects
