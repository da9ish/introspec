import { styled } from "@stitches/react";
import React from "react";
import { Route, Routes } from "react-router";
import { Box } from "../components/Box";
import Sidebar from '../components/private/Sidebar'
import Topbar from "../components/private/Topbar";
import Documents from "../pages/Documents";
import Projects from "../pages/Projects";
import Queries from "../pages/Queries";
import Query from "../pages/Query";


const Container = styled(Box, {
  padding: '0 32px',
  height: '100vh',
  overflow: 'auto'
})


const Private: React.FC = () => {

  return (
    <Box as="main" css={{display: 'flex', height: '100vh', overflow: 'hidden'}}>
      <Sidebar />
      <Box css={{flexGrow: 1}}>
        <Topbar />
        <Container>
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/docs/:projectId">
              <Route path="" element={<Documents />} />
              <Route path="/query">
                <Route path="" element={<Queries />} />
                <Route path="/:queryName" element={<Query />} />
              </Route>
            </Route>
          </Routes>
        </Container>
      </Box>
    </Box>
  )
}

export default Private