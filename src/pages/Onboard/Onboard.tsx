import { keyframes, styled } from '@stitches/react'
import { Field, Form } from 'react-final-form'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router'
import { useEffect, useRef, useState } from 'react'
import { Root } from '@radix-ui/react-radio-group'

import AvatarInput from 'components/AvatarInput'
import Badge from 'components/Badge'
import Box from 'components/Box'
import Button from 'components/Button'
import Flex from 'components/Flex'
import Grid from 'components/Grid'
import GridBg from 'assets/grid.png'
import Input from 'components/Input'
import Label from 'components/Label'
import OptionCard from 'components/OptionCard'
import Sidebar from 'components/private/Sidebar'
import Text from 'components/Text'
import Topbar from 'components/private/Topbar'
import { cache } from 'client'
import { CreateWorkspaceInput, useCreateWorkspaceMutation } from 'generated/schema'
import { SessionQuery, SESSION_QUERY, SET_SESSION_MUTATION } from 'client/state/session'
import { useCurrentAccountContext } from 'contexts/CurrentAccountContext'
import { colors } from 'colors'
import DiscoButton from 'components/DiscoCard'

type SetupMode = 'workspace' | 'api' | 'environment' | 'configuration'

const reqAvatar = require.context('assets/avatars', true, /avatar-[1-9].png$/)

const Container = styled(Flex, {
  width: '100%',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: 'linear-gradient(270deg, $landingBg 20%, $landingSubtleBg)'
})

const FormContainer = styled(Flex, {
  width: '100%',
  zIndex: 10
})

const AccountContext = styled(Flex, {
  padding: '24px 32px',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'linear-gradient(270deg, $landingBg 20%, $landingSubtleBg)'
})

const PreviewContainer = styled(Flex, {
  position: 'relative',
  boxSizing: 'border-box',
  width: '100%',
  backgroundColor: '$landingBg',
  padding: '32px',
  overflow: 'hidden',
  backgroundImage: `url("${GridBg}")`,
  backgroundSize: 'cover'
})

const moveToEnvironment = keyframes({
  '0%': { left: '10%' },
  '100%': { left: '-160%' }
})

const moveFromEnvironment = keyframes({
  '0%': { left: '-160%' },
  '100%': { left: '10%' }
})

const moveToConfiguration = keyframes({
  '0%': { left: '-160%', top: '20%' },
  '100%': { left: '-30%', top: '60%' }
})

const moveFromConfiguration = keyframes({
  '0%': { left: '-30%', top: '60%' },
  '110%': { left: '-160%', top: '20%' }
})

const ConfigContainer = styled(Flex, {
  position: 'absolute',
  top: '20%',
  gap: '64px'
})

const AppContainer = styled(Box, {
  position: 'absolute',
  transform: 'scale(1.25)',
  transformOrigin: 'left top',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'white',
  borderRadius: 16,
  border: '1px solid $primary',
  boxShadow: 'rgb(62 99 221 / 50%) 0px 0px 20px 2px, rgb(62 99 221 / 50%) 0px 0px 0px 3px',
  top: '20%',
  left: '10%',

  '&::after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(70, 101, 213, 0.2) 100%)'
  },

  variants: {
    step: {
      'workspace-environment': {
        animation: `${moveFromEnvironment} 500ms ease-out`,
        left: '10%'
      },
      'environment-configuration': {
        animation: `${moveToEnvironment} 500ms ease-out`,
        left: '-160%'
      },
      'configuration-environment': {
        animation: `${moveToConfiguration} 500ms ease-out`,
        top: '60%',
        left: '-30%'
      },
      'environment-workspace': {
        animation: `${moveFromConfiguration} 500ms ease-out`,
        top: '60',
        left: '-160%'
      }
    }
  }
})

const AppWindow = styled(Flex, {
  transition: 'all 1s ease',

  width: '100%',
  height: '100%',
  borderRadius: 16
})

const WorkspaceForm = ({
  setSetupMode, setStep
}: any) => {
  const currentAccount = useCurrentAccountContext()
  return (
    <>
      <Flex direction="column" gap="lg">
        <Text color={colors.landingLabelTitle} type="title3">Create your workspace</Text>
        <Text color={colors.landingLabelMuted}>
          This is where you&apos;ll manage all the data
        </Text>
      </Flex>
      <Flex css={{ width: '100%' }} direction="column" gap="lg">
        <Field name="logo">
          {({ input, meta }) => (
            <AvatarInput
              label="Upload Logo"
              input={{
                ...input,
                onFocus: () => setSetupMode('workspace'),
                onBlur: () => setSetupMode(undefined)
              }}
              meta={meta}
            />
          )}
        </Field>
        <Field name="name">
          {({ input, meta }) => (
            <Label css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              Workspace Handle
              <Input
                {...input}
                placeholder="SpaceX"
                size="normal"
                kind="website"
                onFocus={() => setSetupMode('workspace')}
                onBlur={() => setSetupMode(undefined)}
              />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </Label>
          )}
        </Field>
        <Field name="identifier">
          {({ input, meta }) => (
            <Label css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              Workspace URL
              <Input
                {...input}
                prefix="introspec.app/"
                placeholder="spacex"
                size="normal"
                kind="website"
                onFocus={() => setSetupMode('api')}
                onBlur={() => setSetupMode(undefined)}
              />
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </Label>
          )}
        </Field>
        {currentAccount?.workspace ? (
          <Button
            type="button"
            kind="primary"
            size="normal"
            onClick={() => {
              setSetupMode('environment')
              setStep('workspace-environment')
            }}
          >
            Next
          </Button>
        ) : (
          <Button
            type="submit"
            kind="primary"
            size="normal"
          >
            Create Workspace
          </Button>
        )}
      </Flex>
    </>
  )
}

const Radio = styled(Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: 8
})

const EnvironmentForm = ({ setSetupMode, setStep }: any) => {
  setSetupMode('environment')
  return (
    <Flex direction="column" gap="lg">
      <Text color={colors.landingLabelTitle} type="title3">Environments</Text>
      <Text color={colors.landingLabelMuted}>
        Workspaces have multiple environments.
        It make sure your data is isolated across environments for
        development and testing purpose
      </Text>
      <Label>We&apos;ve already created a default environment `live`</Label>
      <Radio defaultValue="live" aria-label="Cloud Configuration" style={{ width: '100%' }}>
        <OptionCard
          value="live"
          onMouseEnter={() => setSetupMode('environment')}
          onMouseLeave={() => setSetupMode(undefined)}
        >
          <Text data-title fontWeight={600} type="title4">Live</Text>
          <Text data-description>This is where all you data will be</Text>
        </OptionCard>
      </Radio>
      <Flex justifyContent="space-between" css={{ width: '100%' }}>
        <Button size="normal" icon="chevron-left" kind="secondary" onClick={() => setStep('workspace-environment')} />
        <Button size="normal" onClick={() => setStep('configuration-environment')}>Continue</Button>
      </Flex>
    </Flex>
  )
}

const ConfigurationForm = ({ setSetupMode, setStep }: any) => {
  const navigate = useNavigate()
  const [ setSession ] = useMutation(SET_SESSION_MUTATION)
  const [ config, setConfig ] = useState('introspec')
  const completeOnboarding = () => {
    const { session } = cache.readQuery({ query: SESSION_QUERY }) as SessionQuery
    setSession({ variables: {
      ...session,
      onBoardingCompleted: true
    } })
      .then(() => navigate('/overview'))
  }

  return (
    <Flex direction="column" gap="lg">
      <Text color={colors.landingLabelTitle} type="title2">Cloud configuration</Text>
      <Text color={colors.landingLabelMuted}>
        We allow you to bring your own cloud architecture or let us manage your cloud infrastructure
      </Text>
      <Label>We&apos;ll create database and storage for you</Label>
      <Radio defaultValue={config} aria-label="Cloud Configuration" style={{ width: '100%' }} onValueChange={(value) => setConfig(value)}>
        <OptionCard value="introspec">
          <Text data-title fontWeight={600} type="title4">Introspec</Text>
          <Text data-description>Let Introspec manage database</Text>
        </OptionCard>
        <OptionCard disabled value="custom" css={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Flex direction="column" gap="md" alignItems="start">
            <Text data-title fontWeight={600} type="title4">Custom config</Text>
            <Text data-description>Connect your own database</Text>
          </Flex>
          <Badge size="small" variant="indigo">Coming Soon</Badge>
        </OptionCard>
      </Radio>
      {config === 'custom' && (
        <Form
          initialValues={{}}
          keepDirtyOnReinitialize
          onSubmit={(values) => {}}
          subscription={{ values: true }}
          validate={() => ({})}
          render={({ handleSubmit }) => (
            <FormContainer direction="column" gap="lg">
              <Field name="host">
                {({ input, meta }) => (
                  <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    Host
                    <Input
                      {...input}
                      placeholder="localhost"
                      size="normal"
                      kind="website"
                      onFocus={() => setSetupMode('database')}
                      onBlur={() => setSetupMode(undefined)}
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </Label>
                )}
              </Field>
              <Grid columns={2} columnGap={6} rowGap={6}>
                <Field name="port">
                  {({ input, meta }) => (
                    <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      Port
                      <Input
                        {...input}
                        placeholder="5432"
                        size="normal"
                        kind="website"
                        onFocus={() => setSetupMode('database')}
                        onBlur={() => setSetupMode(undefined)}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Field name="username">
                  {({ input, meta }) => (
                    <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      Username
                      <Input
                        {...input}
                        placeholder="postgres"
                        size="normal"
                        kind="website"
                        onFocus={() => setSetupMode('database')}
                        onBlur={() => setSetupMode(undefined)}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      Password
                      <Input
                        {...input}
                        placeholder="postgres"
                        size="normal"
                        kind="website"
                        onFocus={() => setSetupMode('database')}
                        onBlur={() => setSetupMode(undefined)}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
                <Field name="databaseName">
                  {({ input, meta }) => (
                    <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      Database Name
                      <Input
                        {...input}
                        placeholder="spacex"
                        size="normal"
                        kind="website"
                        onFocus={() => setSetupMode('database')}
                        onBlur={() => setSetupMode(undefined)}
                      />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </Label>
                  )}
                </Field>
              </Grid>
            </FormContainer>
          )}
        />
      )}
      <Flex justifyContent="space-between" css={{ width: '100%' }}>
        <Button
          type="button"
          size="normal"
          kind="secondary"
          icon="chevron-left"
          onClick={() => {
            setSetupMode('environment')
            setStep('environment-workspace')
          }}
        />
        <Button type="submit" size="normal" onClick={completeOnboarding}>Next</Button>
      </Flex>
    </Flex>
  )
}

const Onboard: React.FC = () => {
  const currentAccount = useCurrentAccountContext()
  const [ setupMode, setSetupMode ] = useState<SetupMode>('workspace')
  const [ step, setStep ] = useState<'workspace-environment' | 'environment-configuration' | 'configuration-environment' | 'environment-workspace'>(
    // currentAccount?.workspace ? 'environment' : 'workspace'
    'workspace-environment'
  )
  const [ setSession ] = useMutation(SET_SESSION_MUTATION)
  const [ createWorkspace ] = useCreateWorkspaceMutation({
    onCompleted: (data) => {
      if (data.createWorkspace) {
        const { session } = cache.readQuery({ query: SESSION_QUERY }) as SessionQuery
        setSession({ variables: {
          ...session,
          workspace: data.createWorkspace
        } })
          .then(() => setStep('environment-configuration'))
      }
    }
  })

  const onSubmit = (values: CreateWorkspaceInput) => {
    const { logo, ...valuesWithoutFile } = values
    createWorkspace({ variables: { input: { ...valuesWithoutFile, logo: (logo as any).base64 } } })
  }

  return (
    <Form
      initialValues={{
        // TODO: convert the avatar to base64
        logo: { preview: `${window.location.origin}${reqAvatar('./avatar-1.png')}` },
        ...currentAccount?.workspace
      }}
      keepDirtyOnReinitialize
      onSubmit={onSubmit}
      subscription={{ values: true }}
      validate={() => ({})}
      render={({ handleSubmit, values }) => (
        <Flex grow={1}>
          <FormContainer direction="column">
            <AccountContext>
              <Flex direction="column">
                <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>Logged in as:</Label>
                <Text color={colors.labelTitle}>{currentAccount?.email}</Text>
              </Flex>
              <Text color={colors.labelTitle}>Log out</Text>
            </AccountContext>
            <Container css={{ gap: 16 }}>
              <Flex css={{ width: '50%' }} direction="column" alignItems="start" justifyContent="center" gap="lg" as="form" onSubmit={handleSubmit}>
                {step === 'workspace-environment' && <WorkspaceForm setSetupMode={setSetupMode} setStep={setStep} />}
                {(step === 'environment-configuration' || step === 'environment-workspace') && <EnvironmentForm setSetupMode={setSetupMode} setStep={setStep} />}
                {step === 'configuration-environment' && <ConfigurationForm setSetupMode={setSetupMode} setStep={setStep} />}
              </Flex>
            </Container>
          </FormContainer>
          <PreviewContainer alignItems="center" justifyContent="center">
            <ConfigContainer direction="column">
              <DiscoButton>
                <Text data-title fontWeight={700} type="title4">Client app</Text>
              </DiscoButton>
              <DiscoButton>
                <Text data-title fontWeight={700} type="title4">Introspec</Text>
                <Text data-description type="body" color="$labelBase">&#8226; Auto Scaling</Text>
                <Text data-description type="body" color="$labelBase">&#8226; Managed Authentication, Database and Storage</Text>
                <Text data-description type="body" color="$labelBase">&#8226; GraphQL API Key Management</Text>
              </DiscoButton>
            </ConfigContainer>
            <AppContainer step={step}>
              <AppWindow>
                <Sidebar
                  setupMode={setupMode}
                  formValues={values}
                />
                <Box css={{ width: '100%', height: '100%', backgroundColor: colors.bgBase, borderRadius: 16 }}>
                  <Flex direction="column" css={{ flexGrow: 1 }}>
                    <Topbar
                      setupMode={setupMode}
                      formValues={values}
                    />
                    <Box css={{ padding: '16px' }}>
                      <Grid columns={6} columnGap={8} rowGap={8}>
                        {new Array(20).fill(0).map(() => (
                          <Box css={{ width: '200px', height: '16px', borderRadius: '4px', backgroundColor: colors.bgSubtle }} />
                        ))}
                      </Grid>
                    </Box>
                  </Flex>
                </Box>
              </AppWindow>
            </AppContainer>
          </PreviewContainer>
        </Flex>
      )}
    />
  )
}

export type { SetupMode }

export default Onboard
