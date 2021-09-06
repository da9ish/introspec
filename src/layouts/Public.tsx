import React from "react";
import { useNavigate } from "react-router";
import { Box } from "../components/Box";
import Button from "../components/Button";
import Navbar from "../components/public/Navbar";

const Public: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Box css={{}}>
      <Navbar />
      <Box as="section" css={{ height: 'calc(100vh - 64px)', display: 'flex', alignItems: "center", justifyContent: 'center', flexDirection: 'column' }}>
        <h1>Create beautiful GraphQL API documentation</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button kind="filled" color="primary" onClick={() => navigate('/signup')}>Get Started</Button>
            <Button kind="outlined" color="accent">See Example</Button>
          </Box>
      </Box>
    </Box>
  )
}

export default Public