import React from "react";
import { useNavigate } from "react-router";
import { Box } from "../components/Box";
import Button from "../components/Button";
import Flex from "../components/Flex";
import Grid from "../components/Grid";
import Navbar from "../components/public/Navbar";
import { styled } from "../stiches.config";
import Icon from "../components/Icon";

const LandingGfx = styled('img', {
  width: '100%',
  flexGrow: 1,
  marginTop: '64px',
  border: '5px solid #313131',
  borderRadius: '32px',
  boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.15), 0px 20px 30px rgba(0, 0, 0, 0.05), 0px 10px 50px rgba(0, 0, 0, 0.05)'
})

const FeatureBlock = styled(Box, {
  '& > h3': {
    marginTop: '32px',
    color: '#313131',
    fontWeight: 600
  },
  '& > p': {
    color: '#070707',
    margin: 0,
  }
})

const Card = styled(Flex, {
  zIndex: 10,
  width: '100%',
  boxSizing: 'border-box',
  padding: "50px 32px",
  variants: {
    shadow: {
      true: {
        backgroundColor: 'white',
        boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.15), 0px 20px 30px rgba(0, 0, 0, 0.05), 0px 10px 50px rgba(0, 0, 0, 0.05)'
      },
      false: {
        backgroundColor: 'transparent',
        boxShadow: 'none'
      }
    }
  }
})

const Ellipse1 = styled(Box, {
  zIndex: -1,
  position: 'absolute',
  width: '647px',
  height: '647px',
  left: '674px',
  top: '153px',

  background: 'rgba(187, 210, 255, 0.5)',
  filter: 'blur(205px)',
})

const Ellipse2 = styled(Box, {
  zIndex: -1,
  position: 'absolute',
  width: '429px',
  height: '429px',
  left: '1105px',
  top: '262px',

  background: 'rgba(188, 255, 187, 0.5)',
  filter: 'blur(205px)',
})

const Ellipse3 = styled(Box, {
  zIndex: -1,
  position: 'absolute',
  width: '429px',
  height: '429px',
  left: '297px',
  top: '1086px',

  background: 'rgba(255, 187, 216, 0.5)',
  filter: 'blur(205px)',
})

const Ellipse4 = styled(Box, {
  zIndex: -1,
  position: 'absolute',
  width: '569px',
  height: '569px',
  left: '850px',
  top: '1775px',

  background: 'rgba(245, 255, 187, 0.5)',
  filter: 'blur(205px)',
})

const Landing: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Box css={{ position: 'relative', overflow: 'auto' , background: 'rgba(255, 255, 255, 0.38)', backdropFilter: 'blur(50px)' }}>
      <Ellipse1 />
      <Ellipse2 />
      <Ellipse3 />
      <Ellipse4 />
      <Navbar />
      <Box as="main" css={{ width: '80%', margin: '0 auto', paddingBottom: '64px',}}>
        <Flex as="section" alignItems="center" justifyContent="end" direction="column" css={{ height: '100%', padding: '64px 0'}}>
          <Flex direction="column" alignItems="center" css={{margin: '32px 0'}}>
            <h1>Create beautiful GraphQL API documentation</h1>
            <p style={{fontSize: '21px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Flex gap="md">
              <Button kind="filled" color="primary" onClick={() => navigate('/signup')}>Get Started</Button>
              <Button kind="outlined" color="accent">See Example</Button>
            </Flex>
          </Flex>
          <LandingGfx src="./assets/images/landing.png" />
        </Flex>
        <Box as="section" css={{height: '100vh'}}>
          <Grid columns={3} rows={2} columnGap={32} alignItems="start">
            <Card shadow={true} direction="column" css={{ alignSelf: 'center', gridColumn: '1 / span 1', gridRow: '1 / span 2'}}>
              <h3 style={{fontWeight: 600}}>Why introspec?</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim egestas vitae volutpat volutpat felis.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim egestas vitae volutpat volutpat felis.

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim egestas vitae volutpat volutpat felis.
              </p>
            </Card>
            <Card justifyContent="space-between" gap="lg" css={{ gridColumn: '2 / span 1', gridRow: '1 / span 1'}}>
              <FeatureBlock>
                <Box>
                  <Icon name="hosting" />
                </Box>
                <h3>Self Hosted</h3>
                <p>All your docs are self hosted once you publish</p>
              </FeatureBlock>
            </Card>
            <Card justifyContent="space-between" gap="lg" css={{ gridColumn: '3 / span 1', gridRow: '1 / span 1'}}>
              <FeatureBlock>
                <Box>
                  <Icon name="document" />
                </Box>
                <h3>Clean Documentation</h3>
                <p>No more hassle with traditional GraphQL docs. Introspec is simple, easy and clean</p>
              </FeatureBlock>
            </Card>
            <Card justifyContent="space-between" gap="lg" css={{ gridColumn: '2 / span 1', gridRow: '2 / span 1'}}>
              <FeatureBlock>
                <Box>
                  <Icon name="search" />
                </Box>
                <h3>Global Search</h3>
                <p>Everything in one place, search for all your types, queries, mutations and subscription with magic of one command</p>
              </FeatureBlock>
            </Card>
            <Card justifyContent="space-between" gap="lg" css={{ gridColumn: '3 / span 1', gridRow: '2 / span 1'}}>
              <FeatureBlock>
                <Box>
                  <Icon name="theming" />
                </Box>
                <h3>Theming</h3>
                <p>Choose from a variety of themes. Ensure your docs looks beautiful</p>
              </FeatureBlock>
            </Card>
          </Grid>
        </Box>
        <Box as="section">
          <Card direction="column" alignItems="center" shadow="true">
            <h3>Start creating your GraphQL documentation today</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim egestas vitae volutpat volutpat felis.</p>
            <Button kind="filled" color="primary" onClick={() => navigate('/signup')}>Get Started</Button>
          </Card>
          
        </Box>
      </Box>
      <Flex alignItems="center" justifyContent="space-between" as="footer" css={{ width: '80%', margin: '0 auto' }}>
        <p>Copyright &copy; Introspec 2021</p>
        <p>Reach out to us: <a href="mailto:support@introspec.app">support@introspec.app</a></p>
      </Flex>
    </Box>
  )
}

export default Landing