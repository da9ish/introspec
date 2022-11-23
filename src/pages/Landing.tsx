import { useNavigate } from 'react-router'
import { styled } from '@stitches/react'

import { indigoDark } from '@radix-ui/colors'

import AvatarImg from 'assets/avatars/avatar-1.png'
import AuthImg from 'assets/auth-gfx.png'
import FeatureBg from 'assets/feature-bg.png'
import LandingBg from 'assets/landing-bg.png'

import Box from 'components/Box'
import Flex from 'components/Flex'
import Navbar from 'components/public/Navbar'
import Text from 'components/Text'
import { colors } from 'colors'
import { ActionButton } from 'components/ActionButton'
import Grid from 'components/Grid'

const Container = styled(Box, {
  width: '100vw',
  height: '100vh',
  overflow: 'auto',
  background: '$landingBg'
})

const LandingImage = styled('img', {
  marginTop: '-43vw',
  width: '100%',
  zIndex: -1
})

const Content = styled(Box, {})

const HeroSection = styled(Flex, {
  position: 'relative',
  margin: '150px 30%',
  zIndex: 1,

  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20
})

const Section = styled(Flex, {
  position: 'relative',
  zIndex: 1,
  margin: '16px 0',

  gridColumnStart: 2,
  gridColumnEnd: 12,
  flexDirection: 'column'
})

const FeatureSection = styled(Section, {
  border: `1px dashed ${indigoDark.indigo10}`,
  borderRadius: 30
})

const TestimonialGrid = styled(Grid, {
  '& > :nth-child(1)': {
    borderBottom: `1px dashed ${indigoDark.indigo10}`
  },
  '& > :nth-child(2)': {
    borderBottom: `1px dashed ${indigoDark.indigo10}`,
    borderLeft: `1px dashed ${indigoDark.indigo10}`,
    borderRight: `1px dashed ${indigoDark.indigo10}`
  },
  '& > :nth-child(3)': {
    borderBottom: `1px dashed ${indigoDark.indigo10}`
  }
})

const TestimonialContainer = styled(Flex, {
  flexDirection: 'column',
  gap: 24,
  padding: 40
})

const Avatar = styled('img', {
  width: 48,
  height: 48
})

const FeatureGrid = styled(Grid, {
  '& > :nth-child(1)': {
    borderTop: `1px dashed ${indigoDark.indigo10}`
  },
  '& > :nth-child(2)': {
    borderTop: `1px dashed ${indigoDark.indigo10}`,
    borderLeft: `1px dashed ${indigoDark.indigo10}`,
    borderRight: `1px dashed ${indigoDark.indigo10}`
  },
  '& > :nth-child(3)': {
    borderTop: `1px dashed ${indigoDark.indigo10}`
  },
  '& > :nth-child(4)': {
    borderTop: `1px dashed ${indigoDark.indigo10}`
  },
  '& > :nth-child(5)': {
    borderTop: `1px dashed ${indigoDark.indigo10}`,
    borderLeft: `1px dashed ${indigoDark.indigo10}`,
    borderRight: `1px dashed ${indigoDark.indigo10}`
  },
  '& > :nth-child(6)': {
    borderTop: `1px dashed ${indigoDark.indigo10}`
  }
})

const TitleContainer = styled(Grid, {
  backgroundImage: `url("${FeatureBg}")`,
  backgroundSize: 'cover',
  alignItems: 'center',
  justifyContent: 'center',

  '& > div': {
    margin: '120px 0'
  }
})

const FeatureContainer = styled(Flex, {
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 24,
  padding: 40
})

const FeatureImage = styled('img', {
  width: '100%',
  borderRadius: 30
})

const SiteContent = styled(Grid, {})

const Landing: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Navbar />
      <Content as="main">
        <HeroSection>
          <Text type="display" align="center" color={colors.landingLabelTitle}>GraphQL backend for your next project</Text>
          <Text type="title1" align="center" color={colors.landingLabelTitle}>Authentication, Database, Storage all in one GraphQL endpoint</Text>
          <ActionButton kind="primary" size="large" onClick={() => navigate('/signup')}>Get Started</ActionButton>
        </HeroSection>
        <LandingImage loading="eager" src={LandingBg} alt="landing-bg" />
        <SiteContent columns={12}>
          <FeatureSection>
            <TestimonialGrid columns={3} gap={0}>
              <TestimonialContainer>
                <Flex direction="column">
                  <Text type="title1" lineHeight={0.5} fontSize={48} color={colors.landingLabelMuted}>&ldquo;</Text>
                  <Text type="title1" color={colors.landingLabelTitle}>Introspec provided us with a best in class development workflow out of the box from day zero.</Text>
                </Flex>
                <Flex gap="lg">
                  <Avatar src={AvatarImg} alt="avatar" />
                  <Flex direction="column">
                    <Text type="title3" color={colors.landingLabelTitle}>John Doe</Text>
                    <Text type="title4" color={colors.landingLabelMuted}>XYZ Inc</Text>
                  </Flex>
                </Flex>
              </TestimonialContainer>
              <TestimonialContainer>
                <Flex direction="column">
                  <Text type="title1" lineHeight={0.5} fontSize={48} color={colors.landingLabelMuted}>&ldquo;</Text>
                  <Text type="title1" color={colors.landingLabelTitle}>Introspec provided us with a best in class development workflow out of the box from day zero.</Text>
                </Flex>
                <Flex gap="lg">
                  <Avatar src={AvatarImg} alt="avatar" />
                  <Flex direction="column">
                    <Text type="title3" color={colors.landingLabelTitle}>John Doe</Text>
                    <Text type="title4" color={colors.landingLabelMuted}>XYZ Inc</Text>
                  </Flex>
                </Flex>
              </TestimonialContainer>
              <TestimonialContainer>
                <Flex direction="column">
                  <Text type="title1" lineHeight={0.5} fontSize={48} color={colors.landingLabelMuted}>&ldquo;</Text>
                  <Text type="title1" color={colors.landingLabelTitle}>Introspec provided us with a best in class development workflow out of the box from day zero.</Text>
                </Flex>
                <Flex gap="lg">
                  <Avatar src={AvatarImg} alt="avatar" />
                  <Flex direction="column">
                    <Text type="title3" color={colors.landingLabelTitle}>John Doe</Text>
                    <Text type="title4" color={colors.landingLabelMuted}>XYZ Inc</Text>
                  </Flex>
                </Flex>
              </TestimonialContainer>
            </TestimonialGrid>
            <TitleContainer columns="3" gap={0}>
              <div />
              <Flex direction="column" gap="md">
                <Text type="display" align="center" color={colors.landingLabelTitle}>What is Introspec?</Text>
                <Text type="title3" align="center" color={colors.landingLabelMuted}>Introspec provides with the basic building blocks to quickly start building your app.</Text>
              </Flex>
            </TitleContainer>
            <FeatureGrid columns={3} gap={0}>
              <FeatureContainer>
                <Flex gap="lg" direction="column">
                  <Text type="title2" color={colors.landingLabelTitle}>Authentication</Text>
                  <Text type="title4" fontSize={16} fontWeight={400} color={colors.landingLabelMuted}>Add an end-to-end identity solution to your app for easy user authentication, sign-in, and onboarding in just a few lines of code.</Text>
                </Flex>
                <FeatureImage src={AuthImg} alt-text="authentication" />
              </FeatureContainer>
              <FeatureContainer>
                <Flex gap="lg" direction="column">
                  <Text type="title2" color={colors.landingLabelTitle}>Database</Text>
                  <Text type="title4" fontSize={16} fontWeight={400} color={colors.landingLabelMuted}>Every project is a full Postgres database, the world&apos;s most trusted relational database.</Text>
                </Flex>
                <FeatureImage src={AuthImg} alt-text="authentication" />
              </FeatureContainer>
              <FeatureContainer>
                <Flex gap="lg" direction="column">
                  <Text type="title2" color={colors.landingLabelTitle}>Storage</Text>
                  <Text type="title4" fontSize={16} fontWeight={400} color={colors.landingLabelMuted}>Store, organize, and serve large files. Any media, including videos and images.</Text>
                </Flex>
                <FeatureImage src={AuthImg} alt-text="authentication" />
              </FeatureContainer>
              <FeatureContainer>
                <Flex gap="lg" direction="column">
                  <Text type="title2" color={colors.landingLabelTitle}>Custom Resolver</Text>
                  <Text type="title4" fontSize={16} fontWeight={400} color={colors.landingLabelMuted}>Write custom code without deploying or scaling servers.</Text>
                </Flex>
                <FeatureImage src={AuthImg} alt-text="authentication" />
              </FeatureContainer>
              <FeatureContainer>
                <Flex gap="lg" direction="column">
                  <Text type="title2" color={colors.landingLabelTitle}>Integrations</Text>
                  <Text type="title4" fontSize={16} fontWeight={400} color={colors.landingLabelMuted}>Use your favorite tools with Supabase.</Text>
                </Flex>
                <FeatureImage src={AuthImg} alt-text="authentication" />
              </FeatureContainer>
              <FeatureContainer>
                <Flex gap="lg" direction="column">
                  <Text type="title2" color={colors.landingLabelTitle}>Schedulars</Text>
                  <Text type="title4" fontSize={16} fontWeight={400} color={colors.landingLabelMuted}>Fully managed enterprise-grade cron job scheduler. Schedule virtually any job.</Text>
                </Flex>
                <FeatureImage src={AuthImg} alt-text="authentication" />
              </FeatureContainer>
            </FeatureGrid>
          </FeatureSection>
        </SiteContent>
      </Content>
    </Container>
  )
}

export default Landing
