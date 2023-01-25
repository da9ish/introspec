import { InputHTMLAttributes, useCallback, useRef } from 'react'
import { useDropzone } from 'react-dropzone'
import { styled } from '@stitches/react'
import type { FieldInputProps, FieldRenderProps } from 'react-final-form'

import Box from 'components/Box'
import Button, { ButtonProps } from 'components/Button'
import Flex from 'components/Flex'
import Text from 'components/Text'
import { colors } from 'colors'

import Avatar from 'assets/avatars/avatar-1.png'

interface Props extends Pick<ButtonProps, 'size'>, Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, FieldRenderProps<any, HTMLInputElement> {
  label?: string,
  input: FieldInputProps<any, HTMLInputElement>
}

const StyledInput = styled('input', {
  display: 'none'
})

const WorkspaceLogo = styled('img', {
  width: 64,
  height: 64
})

const toBase64 = (file: File) => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result)
  reader.onerror = (error) => reject(error)
})

const AvatarInput: React.FC<Props> = ({ input, meta, label = 'Upload', size }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onDrop = useCallback((files: any) => {
    files.map(
      (f: any) => toBase64(f).then((url) => {
        if (input.onChange) {
          input.onChange(Object.assign(f, {
            preview: URL.createObjectURL(f),
            base64: url
          }))
        }
      })
    )
  }, [ input ])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': []
    }
  })

  return (
    <Flex alignItems="center" gap="lg">
      {/* eslint-disable-next-line no-nested-ternary */}
      <WorkspaceLogo src={input.value ? input.value?.preview ? input.value?.preview : input.value : Avatar} alt="workspace-logo" />
      <Flex grow={1} direction="column" gap="md">
        <Text color="$slate11" type="body">Workspace Logo</Text>
        <Box {...getRootProps()}>
          <StyledInput {...getInputProps()} />
          <Button
            type="button"
            kind="secondary"
            icon="upload"
            size={size}
            iconPlacement="left"
            onClick={() => inputRef.current?.click()}
          >
            {label}
          </Button>
        </Box>
        <Text type="label" color="$slate9">*.png, *jpeg files upto 10MB at least 400px by 400px</Text>
      </Flex>
      <input
        style={{ display: 'none' }}
        {...input}
      />
      {meta.error && meta.touched && <span>{meta.error}</span>}
    </Flex>

  )
}

export default AvatarInput
