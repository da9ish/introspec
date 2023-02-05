import { RadioGroupItem } from '@radix-ui/react-radio-group'
import { styled } from '@stitches/react'

const OptionCard = styled(RadioGroupItem, {
  unset: 'all',
  transition: '--colors-landingBg 0.3s ease, --colors-landingSubtleBg 0.3s ease, --colors-primary 0.3s ease, --colors-primary 0.3s ease, --colors-landingInputBorder 0.3s ease',

  display: 'flex',
  boxSizing: 'border-box',
  width: '100%',
  cursor: 'pointer',
  padding: '24px 16px',
  flexDirection: 'column',
  gap: 8,
  border: '2px solid',

  '& [data-title]': {
    fontWeight: 600
  },

  '&[data-disabled]': {
    cursor: 'not-allowed',
    background: 'linear-gradient(270deg, var(--colors-landingBg), var(--colors-landingSubtleBg)) padding-box, linear-gradient(to right, var(--colors-primary), var(--colors-landingSubtleBg)) border-box',

    '& [data-title]': {
      color: '$labelTitle'
    },
    '& [data-description]': {
      color: '$labelBase'
    }
  },

  '&[data-state="checked"]': {
    background: 'linear-gradient(270deg, var(--colors-landingBg) 30%, var(--colors-primary) 400%) padding-box, linear-gradient(to right, var(--colors-primary), var(--colors-landingSubtleBg)) border-box',
    borderRadius: 5,
    border: '1px solid transparent',

    '& [data-title]': {
      color: '$labelTitle'
    },

    '& [data-description]': {
      color: '$labelBase'
    }
  },
  '&[data-state="unchecked"]': {
    background: 'linear-gradient(270deg, var(--colors-landingBg), var(--colors-landingSubtleBg)) padding-box, linear-gradient(to right, var(--colors-landingInputBorder), var(--colors-landingSubtleBg)) border-box',
    borderRadius: 5,
    border: '1px solid transparent',

    '&:hover:not([data-disabled])': {
      background: 'linear-gradient(270deg, var(--colors-landingBg) 30%, var(--colors-primary) 400%) padding-box, linear-gradient(to right, var(--colors-primary), var(--colors-landingSubtleBg)) border-box',
      '& [data-title]': {
        color: '$labelTitle'
      },
      '& [data-description]': {
        color: '$labelBase'
      }
    },
    '& [data-title]': {
      color: '$labelBase'
    },
    '& [data-description]': {
      color: '$labelMuted'
    }
  }
})

export default OptionCard
