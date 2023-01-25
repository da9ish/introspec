import arrayMutators from 'final-form-arrays'
import { Field, Form, FormProps } from 'react-final-form'
import { styled } from '@stitches/react'
import type { FormApi } from 'final-form'

import Button from 'components/Button'
import Code from 'components/Code'
import Flex from 'components/Flex'
import FormTable from 'components/FormTable'
import Grid from 'components/Grid'
import Input from 'components/Input'
import Label from 'components/Label'
import Separator from 'components/Separator'
import Sheet, { SheetBody, SheetContent, SheetFooter, SheetHeader, SheetTitle } from 'components/Sheet'
import Text from 'components/Text'
import useSubmitHandler from 'hooks/useSubmitHandler'
import { CreateTableInput, DatabaseSchemaDocument, UpdateTableInput, useCreateTableMutation, useUpdateTableMutation } from 'generated/schema'
import type { ViewProps } from 'components/views'

type FormValues = CreateTableInput | UpdateTableInput

interface Props {
  initialValues: FormValues
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

function AddTableView({
  params: { initialValues },
  open,
  onOpenChange,
  defaultOpen
}: ViewProps<Props>) {
  const isUpdating = 'id' in initialValues
  const title = isUpdating
    ? <>Edit table <Code>{initialValues.identifier}</Code></>
    : <>Add a new table under <Code>public</Code></>

  const [ createTable ] = useCreateTableMutation({
    onCompleted: () => onOpenChange?.(false),
    refetchQueries: [
      { query: DatabaseSchemaDocument }
    ]
  })

  const handleCreateTable = useSubmitHandler(createTable, {
    successAlert: { message: 'Table created.' }
  })

  const [ updateTable ] = useUpdateTableMutation({
    onCompleted: () => onOpenChange?.(false),
    refetchQueries: [
      { query: DatabaseSchemaDocument }
    ]
  })

  const handleUpdateTable = useSubmitHandler(updateTable, {
    successAlert: { message: 'Table updated.' }
  })

  const onSubmit = (values: FormValues, form: FormProps<FormValues>['form']) => {
    if (isUpdating) {
      return handleUpdateTable(values as UpdateTableInput, form as FormApi<UpdateTableInput>)
    }

    return handleCreateTable(values as CreateTableInput)
  }

  return (
    <Sheet defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange} modal={false}>
      <SheetContent size="large">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        <Form
          initialValues={initialValues}
          onSubmit={onSubmit as any}
          mutators={{ ...arrayMutators }}
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
                  <Separator orientation="horizontal" />
                  <Flex direction="column" gap="lg" css={{ padding: 24 }}>
                    <Text fontSize={12}>Columns</Text>
                    <FormTable />
                  </Flex>
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

export default AddTableView
