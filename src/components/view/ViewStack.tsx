import { memo, useState } from 'react'

import Dialog from 'components/Dialog'
import Sheet from 'components/Sheet'
import { useViewDispatch, useViewState } from 'hooks/useViewContext'
import type { View } from 'providers/ViewProvider'

type ViewRendererProps = {
  index: number,
  item: View
}

const viewComponentMap = {
  DIALOG: Dialog,
  PANEL: Sheet
}

const ViewRenderer = memo(({ index, item }: ViewRendererProps) => {
  const [ open, setOpen ] = useState(true)
  const { openView, closeView } = useViewDispatch()

  const ViewStyleComponent = viewComponentMap[item.style]
  const Component = item.component

  return (
    <Component
      closeView={closeView}
      open={open}
      key={index}
      onOpenChange={(open) => {
        setOpen(open)
        closeView(index)
      }}
      openView={openView}
      params={item.params || {}}
      viewStyleComponent={ViewStyleComponent}
    />
  )
})

ViewRenderer.displayName = 'ViewRenderer'

function ViewStack() {
  const { viewStack } = useViewState()

  return (
    <>
      {viewStack.map((item, index) => (
        <ViewRenderer index={index} item={item} key={`${item.component.name}-${index + 1}`} />
      ))}
    </>
  )
}

export default ViewStack
