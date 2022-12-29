import { Field, Form, FormProps } from 'react-final-form'
import { styled } from '@stitches/react'
import type { FormApi } from 'final-form'

import Button from 'components/Button'
import Code from 'components/Code'
import Flex from 'components/Flex'
import Grid from 'components/Grid'
import Input from 'components/Input'
import Label from 'components/Label'
import Sheet, { SheetBody, SheetContent, SheetFooter, SheetHeader, SheetTitle } from 'components/Sheet'
import Text from 'components/Text'
import useSubmitHandler from 'hooks/useSubmitHandler'
import { CreateFolderInput, StorageDirectoryDocument, StorageDirectoryQueryVariables, UpdateFolderInput, useCreateFolderMutation, useUpdateFolderMutation } from 'generated/schema'
import type { ViewProps } from 'components/views'
import { useCurrentAccountContext } from 'contexts/CurrentAccountContext'

type FormValues = CreateFolderInput | UpdateFolderInput

interface Props {
  initialValues: FormValues,
  currentPath?: string,
  queryVariables: StorageDirectoryQueryVariables
}

const FieldGrid = styled(Grid, {
  padding: 24,
  boxSizing: 'border-box'
})

const FieldLabel = styled(Text, {
  gridColumnStart: 1,
  gridColumnEnd: 1
})

const FieldContainer = styled(Flex, {
  gridColumnStart: 2,
  gridColumnEnd: 5
})

function AddFolderView({
  params: { currentPath, initialValues, queryVariables },
  open,
  onOpenChange,
  modal,
  defaultOpen
}: ViewProps<Props>) {
  const isUpdating = 'id' in initialValues
  const currentAccount = useCurrentAccountContext()

  const title = isUpdating
    ? <>Edit Folder <Code>{initialValues.identifier}</Code></>
    : (
      <>
        Add a new folder under <Code>{currentPath || currentAccount?.workspace?.identifier}</Code>
      </>
    )

  const [ createFolder ] = useCreateFolderMutation({
    onCompleted: () => onOpenChange?.(false),
    refetchQueries: [
      { query: StorageDirectoryDocument, variables: queryVariables }
    ]
  })

  const handleCreateFolder = useSubmitHandler(createFolder, {
    successAlert: { message: 'Folder created.' }
  })

  const [ updateFolder ] = useUpdateFolderMutation({
    onCompleted: () => onOpenChange?.(false),
    refetchQueries: [
      { query: StorageDirectoryDocument, variables: queryVariables }
    ]
  })

  const handleUpdateFolder = useSubmitHandler(updateFolder, {
    successAlert: { message: 'Folder updated.' }
  })

  const onSubmit = (values: FormValues, form: FormProps<FormValues>['form']) => {
    if (isUpdating) {
      return handleUpdateFolder(values as UpdateFolderInput, form as FormApi<UpdateFolderInput>)
    }

    return handleCreateFolder(values as CreateFolderInput)
  }

  return (
    <Sheet defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange} modal={modal}>
      <SheetContent size="large">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        <Form
          initialValues={initialValues}
          onSubmit={onSubmit as any}
          validate={() => ({})}
          render={({ handleSubmit }) => (
            <>
              <SheetBody>
                <Flex css={{ width: '100%' }} direction="column" gap="lg" as="form" onSubmit={handleSubmit}>
                  <FieldGrid columns={3} columnGap={16}>
                    <FieldLabel fontSize={12}>Properties</FieldLabel>
                    <FieldContainer direction="column" gap="lg">
                      <Field name="name">
                        {({ input, meta }) => (
                          <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                            Name
                            <Input
                              placeholder="Name"
                              type="text"
                              size="normal"
                              style={{ flexGrow: 1 }}
                              {...input}
                            />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </Label>
                        )}
                      </Field>
                      <Field name="identifier">
                        {({ input, meta }) => (
                          <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                            Identifier
                            <Input
                              placeholder="Identifier"
                              type="text"
                              size="normal"
                              style={{ flexGrow: 1 }}
                              {...input}
                            />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </Label>
                        )}
                      </Field>
                    </FieldContainer>
                  </FieldGrid>
                </Flex>
              </SheetBody>
              <SheetFooter>
                <Button size="normal" kind="secondary">Cancel</Button>
                <Button type="submit" size="normal" kind="primary" onClick={handleSubmit}>Save</Button>
              </SheetFooter>
            </>
          )}
        />
      </SheetContent>
    </Sheet>
  )
}

export default AddFolderView
