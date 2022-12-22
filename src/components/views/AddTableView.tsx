import { Field, Form, FormProps } from 'react-final-form'
import type { FormApi } from 'final-form'

import Button from 'components/Button'
import Flex from 'components/Flex'
import Input from 'components/Input'
import Label from 'components/Label'
import Sheet, { SheetBody, SheetContent, SheetFooter, SheetHeader, SheetTitle } from 'components/Sheet'
import Text from 'components/Text'
import useSubmitHandler from 'hooks/useSubmitHandler'
import { CreateTableInput, SchemaDocument, UpdateTableInput, useCreateTableMutation, useUpdateTableMutation } from 'generated/schema'
import type { ViewProps } from 'components/views'

type FormValues = CreateTableInput | UpdateTableInput

interface Props {
  initialValues: FormValues
}

function AddTableView({
  params: { initialValues },
  open,
  onOpenChange,
  modal,
  defaultOpen
}: ViewProps<Props>) {
  const isUpdating = 'id' in initialValues
  const title = isUpdating ? 'Update Table' : 'Create Table'

  const [ createTable ] = useCreateTableMutation({
    onCompleted: () => onOpenChange?.(false),
    refetchQueries: [
      { query: SchemaDocument }
    ]
  })

  const handleCreateTable = useSubmitHandler(createTable, {
    successAlert: { message: 'Table created.' }
  })

  const [ updateTable ] = useUpdateTableMutation({
    onCompleted: () => onOpenChange?.(false),
    refetchQueries: [
      { query: SchemaDocument }
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
    <Sheet defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange} modal={modal}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          {/* <SheetDescription>Create a new table</SheetDescription> */}
        </SheetHeader>
        <Form
          initialValues={initialValues}
          onSubmit={onSubmit as any}
          validate={() => ({})}
          render={({ handleSubmit }) => (
            <>
              <SheetBody>
                <Flex css={{ width: '100%' }} direction="column" gap="lg" as="form" onSubmit={handleSubmit}>
                  <Text fontSize={12}>Properties</Text>
                  <Field name="name">
                    {({ input, meta }) => (
                      <Label css={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16 }}>
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
                      <Label css={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16 }}>
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
                </Flex>
              </SheetBody>
              <SheetFooter>
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
