import { css, keyframes, styled } from '@stitches/react'
import { Field, Form } from 'react-final-form'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router'
import { useState } from 'react'

import AvatarInput from 'components/AvatarInput'
import Box from 'components/Box'
import Button from 'components/Button'
import Flex from 'components/Flex'
import Grid from 'components/Grid'
import Input from 'components/Input'
import Label from 'components/Label'
import Sidebar from 'components/private/Sidebar'
import Text from 'components/Text'
import Topbar from 'components/private/Topbar'
import { cache } from 'client'
import { CreateWorkspaceInput, useCreateWorkspaceMutation } from 'generated/schema'
import { SessionQuery, SESSION_QUERY, SET_SESSION_MUTATION } from 'client/state/session'
import { useCurrentAccountContext } from 'contexts/CurrentAccountContext'

const reqAvatar = require.context('assets/avatars', true, /avatar-[1-9].png$/)

const Container = styled(Flex, {
  width: '100%',
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
})

const FormContainer = styled(Flex, {
  width: '100%',
  zIndex: 10
})

const AccountContext = styled(Flex, {
  padding: '24px 32px',
  alignItems: 'center',
  justifyContent: 'space-between'
})

const PreviewContainer = styled(Flex, {
  position: 'relative',
  boxSizing: 'border-box',
  width: '100%',
  backgroundColor: '#EFEFEF',
  padding: '32px',
  overflow: 'hidden',

  '&::after': {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(0deg, rgba(236, 236, 236, 0.9), transparent )'
  }
})

const moveToRight = keyframes({
  '0%': { left: '10%' },
  '100%': { left: '-100%' }
})

const moveToLeft = keyframes({
  '0%': { left: '-100%' },
  '100%': { left: '10%' }
})

const AppContainer = styled(Box, {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'white',
  borderRadius: 16,
  border: '1px solid transparent',
  boxShadow: 'rgb(0 0 0 / 7%) 0px 0px 20px 2px, rgb(0 0 0 / 7%) 0px 0px 0px 3px',
  top: '20%',
  left: '10%',

  variants: {
    step: {
      none: {
        left: '10%'
      },
      true: {
        animation: `${moveToRight} 500ms ease-out`,
        left: '-100%'
      },
      false: {
        animation: `${moveToLeft} 500ms ease-out`,
        left: '10%'
      }
    }
  }
})

const AppWindow = styled(Flex, {
  transition: 'all 1s ease',

  width: '100%',
  height: '100%'
})

const classes = {
  button: css({
    width: '100%'
  })
}

const WorkspaceForm = ({
  setSidebarSetupMode, setTopbarSetupMode
}: any) => (
  <>
    <Text type="title3">Create your workspace</Text>
    <Text>This is where you&apos;ll manage all the data</Text>
    <Flex css={{ width: '100%' }} direction="column" gap="lg">
      <Field name="logo">
        {({ input, meta }) => (
          <AvatarInput
            label="Upload Logo"
            input={{
              ...input,
              onFocus: () => setSidebarSetupMode(true),
              onBlur: () => setSidebarSetupMode(false)
            }}
            meta={meta}
          />
        )}
      </Field>
      <Field name="name">
        {({ input, meta }) => (
          <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
            Workspace Name
            <Input
              {...input}
              placeholder="SpaceX"
              size="large"
              onFocus={() => setSidebarSetupMode(true)}
              onBlur={() => setSidebarSetupMode(false)}
            />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </Label>
        )}
      </Field>
      <Field name="identifier">
        {({ input, meta }) => (
          <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
            Workspace URL
            <Input
              {...input}
              prefix="introspec.app/"
              placeholder="spacex"
              size="large"
              onFocus={() => setTopbarSetupMode(true)}
              onBlur={() => setTopbarSetupMode(false)}
            />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </Label>
        )}
      </Field>
      <Button
        type="submit"
        kind="primary"
        size="large"
      >
        Create Workspace
      </Button>
    </Flex>
  </>
)

const EnvironmentForm = ({ setTopbarSetupMode }: any) => {
  const navigate = useNavigate()
  return (
    <>
      <Text type="title3">Environments</Text>
      <Text>
        Workspaces have multiple environments.
        It make sure your data is isolated across environments for
        development and testing purpose
      </Text>
      <Label>We&apos;ve already created a default environment `live`</Label>
      <Button
        size="large"
        kind="secondary"
        className={classes.button()}
        icon="check"
        iconPlacement="left"
        onMouseEnter={() => setTopbarSetupMode(true)}
        onMouseLeave={() => setTopbarSetupMode(false)}
      >Live
      </Button>
      <Flex css={{ width: '100%' }}>
        <Button size="large" className={classes.button()} onClick={() => navigate('/overview')}>Continue</Button>
      </Flex>
    </>
  )
}

const Onboard: React.FC = () => {
  const currentAccount = useCurrentAccountContext()
  const [ sidebarSetupMode, setSidebarSetupMode ] = useState(false)
  const [ topbarSetupMode, setTopbarSetupMode ] = useState(false)
  const [ step, setStep ] = useState<'none' | 'true' | 'false'>('none')
  const [ setSession ] = useMutation(SET_SESSION_MUTATION)
  const [ createWorkspace ] = useCreateWorkspaceMutation({
    onCompleted: (data) => {
      if (data.createWorkspace) {
        const { session } = cache.readQuery({ query: SESSION_QUERY }) as SessionQuery
        setSession({ variables: {
          ...session,
          workspace: data.createWorkspace
        } })
          .then(() => setStep('true'))
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
        logo: { preview: `${window.location.origin}${reqAvatar('./avatar-1.png')}` }
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
                <Text>{currentAccount?.email}</Text>
              </Flex>
              <Text>Log out</Text>
            </AccountContext>
            <Container>

              <Flex css={{ width: '336px' }} direction="column" alignItems="start" justifyContent="center" gap="lg" as="form" onSubmit={handleSubmit}>
                {step === 'none'
                  ? (
                    <WorkspaceForm
                      setSidebarSetupMode={setSidebarSetupMode}
                      setTopbarSetupMode={setTopbarSetupMode}
                    />
                  )
                  : <EnvironmentForm setTopbarSetupMode={setTopbarSetupMode} />}
              </Flex>
            </Container>
          </FormContainer>
          <PreviewContainer alignItems="center" justifyContent="center">
            <AppContainer step={step}>
              <AppWindow>
                <Sidebar
                  setupMode={sidebarSetupMode}
                  formValues={values}
                />
                <Box css={{ width: '100%', height: '100%' }}>
                  <Flex direction="column" css={{ flexGrow: 1 }}>
                    <Topbar
                      setupMode={topbarSetupMode}
                      formValues={values}
                    />
                    <Box css={{ padding: '16px' }}>
                      <Grid columns={6} columnGap={8} rowGap={8}>
                        {new Array(20).fill(0).map(() => (
                          <Box css={{ width: '200px', height: '16px', borderRadius: '4px', backgroundColor: '#f5f5f5' }} />
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

export default Onboard
