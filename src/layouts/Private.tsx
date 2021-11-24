import { styled } from "@stitches/react";
import React from "react";
import { useLocation } from "react-router";
import { Navigate, Route, Routes } from "react-router";
import { Box } from "../components/Box";
import Flex from "../components/Flex";
import Sidebar from '../components/private/Sidebar'
import Topbar from "../components/private/Topbar";
import CreateProject from "../pages/CreateProject";
import Documents from "../pages/Documents";
import Mutation from "../pages/Mutation";
import Mutations from "../pages/Mutations";
import Overview from "../pages/Overview";
import Projects from "../pages/Projects";
import ProjectShow from "../pages/ProjectShow";
import Queries from "../pages/Queries";
import Query from "../pages/Query";
import Subscription from "../pages/Subscription";
import Subscriptions from "../pages/Subscriptions";
import Type from "../pages/Type";
import Types from "../pages/Types";

const Container = styled(Flex, {
  width: '100%',
  height: '100%',
})

const RightSidebar = styled(Flex, {
  width: '300px',
  height: '100vh',
  flexShrink: 0,
  background: "#FAFAFA",
  borderTopLeftRadius: '30px',
  borderBottomLeftRadius: '30px',
  padding: '32px',
  boxSizing: 'border-box',

  variants: {
    hidden: {
      true: {
        display: 'none'
      },
      false: {
        display: 'block'
      }
    }
  }
})

const Private: React.FC = () => {
  const location = useLocation()
  return (
    <Box as="main" css={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar />
      <Container>
        <Flex direction="column" css={{flexGrow: 1}}>
          <Topbar />
          <Routes>
            <Navigate to="/overview" />
            <Route path="/overview" element={<Overview />} />
            <Route path="/project/:id" element={<ProjectShow />} />
            <Route path="/project/new" element={<CreateProject />} />
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
        </Flex>
        <RightSidebar hidden={!location.pathname.includes('docs')} direction="column" justifyContent="space-between">
          <Box>
            <Box as="h4" css={{marginTop: '64px'}}>Links</Box>
          </Box>
          <h6>Send Feedback</h6>
        </RightSidebar>
      </Container>
    </Box>
  )
}

export default Private