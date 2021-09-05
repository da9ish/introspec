import { styled } from "@stitches/react";
import React from "react";
import { Route, Routes } from "react-router";
import { Box } from "../components/Box";
import Sidebar from '../components/private/Sidebar'
import Topbar from "../components/private/Topbar";
import Documents from "../pages/Documents";
import Mutation from "../pages/Mutation";
import Mutations from "../pages/Mutations";
import Projects from "../pages/Projects";
import Queries from "../pages/Queries";
import Query from "../pages/Query";
import Subscription from "../pages/Subscription";
import Subscriptions from "../pages/Subscriptions";
import Type from "../pages/Type";
import Types from "../pages/Types";


const Container = styled(Box, {
  padding: '0 32px 32px 32px',
  height: 'calc(100% - 102px)',
  overflow: 'auto'
})


const Private: React.FC = () => {

  return (
    <Box as="main" css={{ display: 'flex', height: '100vh', overflow: 'hidden'}}>
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
              <Route path="/mutation">
                <Route path="" element={<Mutations />} />
                <Route path="/:mutationName" element={<Mutation />} />
              </Route>
              <Route path="/subscription">
                <Route path="" element={<Subscriptions />} />
                <Route path="/:subscriptionName" element={<Subscription />} />
              </Route>
              <Route path="/type">
                <Route path="" element={<Types />} />
                <Route path="/:typeName" element={<Type />} />
              </Route>
            </Route>
          </Routes>
        </Container>
      </Box>
    </Box>
  )
}

export default Private