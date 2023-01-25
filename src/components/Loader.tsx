import React, { useRef } from 'react'
import SVG from 'react-inlinesvg'
import type { ApolloError } from '@apollo/client'
import type { ErrorResponse } from '@apollo/client/link/error'

import { styled } from '@stitches/react'

import Flex from 'components/Flex'

import loaderImage from 'assets/logo-animated.svg'
import Box from './Box'

type LoaderEmptyType = {
  element?: React.ReactNode,
  subtitle?: string,
  title?: string,
  variant?: 'neutral' | 'positive'
}

type LoaderProps = React.PropsWithChildren<{
  data?: any,
  empty?: LoaderEmptyType | false,
  error?: ErrorResponse | ApolloError,
  loading?: boolean,
  size?: 'normal' | 'large',
  wrapper?: ({ children }: React.PropsWithChildren<{}>) => JSX.Element
}>

const LOADER_SIZE = 400
const LOADING_ICON_INACTIVE_SCALE = 0.7
const LOADING_ICON_LARGE_ACTIVE_SCALE = 2

const Container = styled(Box, {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  background: '$landingBg',
  gap: 18
})

const StyledLoader = styled(Flex, {
  transition: 'all 0.1s ease',

  perspective: '600px',
  position: 'relative',
  transformStyle: 'preserve-3d',
  size: [ LOADER_SIZE ],

  '& > i': {
    transform: 'rotateY(180deg)',

    backfaceVisibility: 'hidden',
    bottom: 0,
    left: 0,
    margin: 'auto',
    position: 'absolute',
    right: 0,
    top: 0
  }
})

const StyledLoadingIcon = styled(SVG, {
  transition: 'all 0.1s ease',

  backfaceVisibility: 'hidden',
  margin: 'auto',

  width: LOADER_SIZE,
  height: LOADER_SIZE,

  transform: 'scale(1)',

  // normalize.css makes all non-root SVGs hidden
  // https://github.com/necolas/normalize.css/issues/718
  '& > svg': {
    overflow: 'visible !important'
  },

  variants: {
    size: {
      normal: {},
      large: {
        transform: `scale(${LOADING_ICON_LARGE_ACTIVE_SCALE})`
      }
    },
    inactive: {
      true: {
        '&&': {
          transform: `scale(${LOADING_ICON_INACTIVE_SCALE})`
        }
      }
    }
  }
})

function Loader({
  loading,
  size = 'normal'
}: LoaderProps) {
  const loaderEl = useRef<SVGElement>(null)

  return (
    <Container>
      <Flex alignItems="center" direction="column">
        <StyledLoader>
          <StyledLoadingIcon
            inactive={!loading}
            size={size}
            innerRef={loaderEl}
            src={loaderImage}
            title="Loading..."
          />
        </StyledLoader>
      </Flex>
    </Container>
  )
}

export type { LoaderProps }

export default Loader
