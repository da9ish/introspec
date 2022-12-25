import * as Toolbar from '@radix-ui/react-toolbar'
import { styled } from '@stitches/react'

export const ToolbarRoot = styled(Toolbar.Root, {
  display: 'flex',
  padding: '10px',
  width: '100%',
  minWidth: 'max-content',
  borderRadius: 6,
  backgroundColor: '$bgBase',
  boxShadow: '0 2px 10px rgb(0 0 0 / 25%)'
})

export const ToolbarToggleGroup = styled(Toolbar.ToggleGroup, {})

export const ToolbarToggleItem = styled(Toolbar.ToggleItem, {
  flex: '0 0 auto',
  height: 25,
  padding: '0 5px',
  borderRadius: 4,
  display: 'inline-flex',
  fontSize: 13,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',

  '&:focus': {
    position: 'relative',
    boxShadow: '0 0 0 2px $indigo7'
  },

  '&:hover': {
    backgroundColor: '$indigo3',
    color: '$indigo3'
  }
})

export const ToolbarButton = styled(Toolbar.Button, {
  flex: '0 0 auto',
  color: '$slate11',
  height: 25,
  padding: '0 5px',
  borderRadius: 4,
  display: 'inline-flex',
  fontSize: 13,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',

  '&:focus': {
    position: 'relative',
    boxShadow: '0 0 0 2px $indigo7'
  },

  '&:hover': {
    backgroundColor: '$indigo3',
    color: '$indigo3'
  }
})

export const ToolbarLink = styled(Toolbar.Link, {
  flex: '0 0 auto',
  color: '$slate11',
  height: 25,
  padding: '0 5px',
  borderRadius: 4,
  display: 'inline-flex',
  fontSize: 13,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',

  '&:focus': {
    position: 'relative',
    boxShadow: '0 0 0 2px $indigo7'
  },

  '&:hover': {
    backgroundColor: '$indigo3',
    color: '$indigo3'
  }
})
