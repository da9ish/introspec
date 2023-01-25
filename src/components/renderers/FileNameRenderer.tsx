import get from 'lodash/get'
import React from 'react'

import { styled } from '@stitches/react'

import Text from 'components/Text'
import Flex from 'components/Flex'
import type { RendererOptions } from 'components/DataTable'
import Icon from 'components/Icon'

const Container = styled(Flex, {
  // TODO: fix this
  '&>[data-icon]': {
    color: '$slate1'
  }
})

function FileNameRenderer<T extends object>({
  identifier,
  rowData
}: RendererOptions<T>) {
  const type = get(rowData, 'fileType')
  const iconName = type === '-' ? 'folder' : type
  return (
    <Container gap="md" alignItems="center">
      <Icon data-icon feather name={iconName} size={14} />
      <Text fontSize={13}>{get(rowData, identifier)}</Text>
    </Container>
  )
}

export default FileNameRenderer
