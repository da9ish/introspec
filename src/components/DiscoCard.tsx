import { keyframes, styled } from '@stitches/react'

const disco = keyframes({
  from: {
    transform: 'translateY(-50%) rotate(0deg)'
  },
  to: {
    transform: 'translateY(-50%) rotate(360deg)'
  }
})

const CardDisco = styled('span', {
  position: 'absolute',
  width: '100%',
  inset: '0% 0 0',
  height: '100%',
  willChange: 'transform',

  '&::before': {
    content: "''",
    position: 'absolute',
    width: '100%',
    left: '0',
    minHeight: '100%',
    top: '50%',
    aspectRatio: '1/1',
    transformOrigin: 'center',
    backgroundImage: 'conic-gradient(transparent 135deg, var(--colors-primary) 310deg, transparent 225deg)',
    filter: 'blur(8px)',

    '@media (prefers-reduced-motion: reduce)': {
      transform: 'translateY(-50%) rotate(0deg)'
    },

    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${disco} 1.5s linear infinite`,
      transition: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
      transitionProperty: 'opacity'
    }
  }
})

const CardContent = styled('span', {
  transition: '--colors-landingBg 0.3s ease, --colors-landingSubtleBg 0.3s ease, --colors-primary 0.3s ease, --colors-primary 0.3s ease, --colors-landingInputBorder 0.3s ease',

  boxSizing: 'border-box',
  display: 'inline-flex',
  position: 'relative',
  borderRadius: 5,
  width: '100%',
  justifyContent: 'center',
  padding: '0.625rem 1rem',
  textAlign: 'center',
  zIndex: '10'
})

const Card = styled('button', {
  unset: 'all',

  appearance: 'none',
  cursor: 'progress',
  position: 'relative',
  border: '1px solid transparent',
  font: 'inherit',
  minWidth: '200px',
  overflow: 'hidden',
  margin: 'calc(1 * -1)',
  padding: '1px',
  color: '$labelTitle',
  borderRadius: '4px',
  userSelect: 'none',
  transform: 'translateY(-50%) scaleX(1)',
  willChange: 'transform',
  backgroundColor: 'transparent',

  '&:hover': {
    filter: 'brightness(0.95)'
  },

  '@media (prefers-reduced-motion: no-preference)': {
    transition: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
    transitionProperty: 'color, filter, transform'
  },

  variants: {
    busy: {
      true: {
        [`& > ${CardContent}`]: {
          background: 'linear-gradient(270deg, var(--colors-landingBg) 30%, var(--colors-primary) 400%) padding-box, linear-gradient(to right, var(--colors-primary), var(--colors-landingSubtleBg)) border-box',
          border: '1px solid transparent'
        },
        [`& > ${CardDisco}::before`]: {
          opacity: 1,
          '@media (prefers-reduced-motion: no-preference)': {
            animationPlayState: 'running'
          }
        }
      },
      false: {
        [`& > ${CardContent}`]: {
          background: 'linear-gradient(270deg, var(--colors-landingBg), var(--colors-landingSubtleBg)) padding-box, linear-gradient(to right, var(--colors-landingInputBorder), var(--colors-landingSubtleBg)) border-box',
          border: '1px solid transparent'
        },
        [`& > ${CardDisco}::before`]: {
          opacity: 0,
          '@media (prefers-reduced-motion: no-preference)': {
            animationPlayState: 'paused'
          }
        }
      }
    }
  }
})

const Container = styled('span', {
  display: 'flex',
  alignItems: 'start',
  boxSizing: 'border-box',
  width: '100%',
  cursor: 'pointer',
  padding: '24px 16px',
  flexDirection: 'column',
  gap: 8,
  textAlign: 'left'
})

interface Props extends React.PropsWithChildren {
  busy?: boolean
}

const DiscoCard: React.FC<Props> = ({ children, busy = false }) => (
  <Card busy={busy}>
    <CardContent>
      <Container role="progressbar" aria-hidden={false}>
        {children}
      </Container>
    </CardContent>
    <CardDisco aria-hidden />
  </Card>
)

export default DiscoCard
