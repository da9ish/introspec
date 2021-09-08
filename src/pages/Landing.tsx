import React from "react";
import { useNavigate } from "react-router";
import { Box } from "../components/Box";
import Button from "../components/Button";
import Flex from "../components/Flex";
import Navbar from "../components/public/Navbar";
import { styled } from "../stiches.config";

const LandingGfx = styled(Box, {
  width: '80%',
  height: '500px',
  marginTop: '64px',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: 'url("./assets/images/landing.png")',
  borderLeft: '5px solid #313131',
  borderRight: '5px solid #313131',
  borderTop: '5px solid #313131',
  borderTopLeftRadius: '32px',
  borderTopRightRadius: '32px'
})

const SelfHostinGfx = styled(Box, {
  width: '500px',
  height: '400px',
  flexShrink: 0,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: 'url("./assets/images/feature.png")',
  borderLeft: '5px solid #313131',
  borderRight: '5px solid #313131',
  borderTop: '5px solid #313131',
  borderRadius: '12px'
})

const FeatureBlock = styled(Box, {
  '& > h3': {
    color: '#FFFFFF'
  },
  '& > p': {
    color: '#DADADA'
  }
})

const Landing: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Box css={{ flexGrow: 1, overflow: 'auto' }}>
      <Navbar />
      <Box as="section" css={{ height: 'calc(100vh - 72px)' }}>
        <Flex alignItems="center" justifyContent="end" direction="column" css={{height: '100%'}}>
          <h1>Create beautiful GraphQL API documentation</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Flex gap="md">
            <Button kind="filled" color="primary" onClick={() => navigate('/signup')}>Get Started</Button>
            <Button kind="outlined" color="accent">See Example</Button>
          </Flex>
          <LandingGfx />
        </Flex>
      </Box>
      <Box as="section" css={{ backgroundColor: "#313131", color: "#fff", padding: '64px 0' }}>
        <Flex direction="column" alignItems="center">
          <Flex alignItems="center" justifyContent="space-between" gap="lg" css={{ width: '80%', marginTop: '64px' }}>
            <FeatureBlock>
              <h3>Self Hosted</h3>
              <p>All your docs are self hosted once you publish</p>
            </FeatureBlock>
            <SelfHostinGfx />
          </Flex>
          <Flex alignItems="center" justifyContent="space-between" gap="lg" css={{ width: '80%', marginTop: '64px' }}>
            <SelfHostinGfx />
            <FeatureBlock>
              <h3>Clean Documentation</h3>
              <p>No more hassle with traditional GraphQL docs. Introspec is simple, easy and clean</p>
            </FeatureBlock>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between" gap="lg" css={{ width: '80%', marginTop: '64px' }}>
            <FeatureBlock>
              <h3>Global Search</h3>
              <p>Everything in one place, search for all your types, queries, mutations and subscription with magic of one command</p>
            </FeatureBlock>
            <SelfHostinGfx />
          </Flex>
          <Flex alignItems="center" justifyContent="space-between" gap="lg" css={{ width: '80%', marginTop: '64px' }}>
            <SelfHostinGfx />
            <FeatureBlock>
              <h3>Themeing</h3>
              <p>Choose from a variety of themes. Ensure your docs looks beautiful</p>
            </FeatureBlock>
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}

export default Landing