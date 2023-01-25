import get from 'lodash/get'
import React from 'react'
import isObject from 'lodash/isObject'

import { styled } from '@stitches/react'

import Text from 'components/Text'
import type { RendererOptions } from 'components/DataTable'

const StyledText = styled(Text, {
  color: 'currentColor'
})

function TextRenderer<T extends object>({
  identifier,
  rowData
}: RendererOptions<T>) {
  const data = get(rowData, identifier)

  if (isObject(data)) {
    return <StyledText truncate>{JSON.stringify(data)}</StyledText>
  }

  return (
    <StyledText truncate>{data}</StyledText>
  )
}

export default TextRenderer
