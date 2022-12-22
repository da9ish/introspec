import { Field, Form, FormProps } from 'react-final-form'
import type { FormApi } from 'final-form'

import Button from 'components/Button'
import Flex from 'components/Flex'
import Input from 'components/Input'
import Label from 'components/Label'
import Select from 'components/Select'
import Sheet, { SheetBody, SheetContent, SheetFooter, SheetHeader, SheetTitle } from 'components/Sheet'
import Switch from 'components/Switch'
import Text from 'components/Text'
import useSubmitHandler from 'hooks/useSubmitHandler'
import { CreateColumnInput, SchemaDocument, UpdateColumnInput, useCreateColumnMutation, useUpdateColumnMutation } from 'generated/schema'
import type { ViewProps } from 'components/views'

type FormValues = CreateColumnInput | UpdateColumnInput

interface Props {
  initialValues: FormValues
}

const AddColumnView: React.FC<ViewProps<Props>> = ({
  params: { initialValues },
  open,
  onOpenChange,
  modal,
  defaultOpen
}) => {
  const isUpdating = 'id' in initialValues
  const title = isUpdating ? 'Update Column' : 'Create Column'

  const [ createColumn ] = useCreateColumnMutation({
    onCompleted: () => onOpenChange?.(false),
    refetchQueries: [
      { query: SchemaDocument }
    ]
  })

  const handleCreateColumn = useSubmitHandler(createColumn, {
    successAlert: { message: 'Column created.' }
  })

  const [ updateColumn ] = useUpdateColumnMutation({
    onCompleted: () => onOpenChange?.(false),
    refetchQueries: [
      { query: SchemaDocument }
    ]
  })

  const handleUpdateColumn = useSubmitHandler(updateColumn, {
    successAlert: { message: 'Column updated.' }
  })

  const onSubmit = (values: FormValues, form: FormProps<FormValues>['form']) => {
    if (isUpdating) {
      return handleUpdateColumn(values as UpdateColumnInput, form as FormApi<UpdateColumnInput>)
    }
    return handleCreateColumn(values as CreateColumnInput)
  }

  return (
    <Sheet defaultOpen={defaultOpen} open={open} onOpenChange={onOpenChange} modal={modal}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          {/* <SheetDescription>create a new table</SheetDescription> */}
        </SheetHeader>
        <Form
          onSubmit={onSubmit as any}
          validate={() => ({})}
          initialValues={initialValues}
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
                  <Field name="dataType">
                    {({ input, meta }) => (
                      <Label css={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16 }}>
                        Data type
                        <Select
                          label="Data type"
                          placeholder="Data type"
                          size="normal"
                          style={{ flexGrow: 1 }}
                          options={[
                            { label: 'BOOLEAN', value: 'BOOLEAN' },
                            { label: 'CHAR', value: 'CHAR' },
                            { label: 'VARCHAR', value: 'VARCHAR' },
                            { label: 'TEXT', value: 'TEXT' },
                            { label: 'NUMERIC', value: 'NUMERIC' },
                            { label: 'INTEGER', value: 'INTEGER' },
                            { label: 'SERIAL', value: 'SERIAL' },
                            { label: 'DATE', value: 'DATE' },
                            { label: 'TIMESTAMP', value: 'TIMESTAMP' },
                            { label: 'INTERVAL', value: 'INTERVAL' },
                            { label: 'TIME', value: 'TIME' },
                            { label: 'UUID', value: 'UUID' },
                            { label: 'JSON', value: 'JSON' },
                            { label: 'ARRAY', value: 'ARRAY' }
                          ]}
                          {...input}
                        />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </Label>
                    )}
                  </Field>
                  <Text fontSize={12}>Constraints</Text>
                  <Field name="constraints">
                    {({ input, meta }) => (
                      <>
                        <Select
                          label="Constraints"
                          placeholder="Constraints"
                          size="normal"
                          options={[
                            { label: 'NOT NULL', value: 'NOT_NULL' },
                            { label: 'UNIQUE', value: 'UNIQUE' },
                            { label: 'PRIMARY', value: 'PRIMARY' },
                            { label: 'FOREIGN', value: 'FOREIGN' },
                            { label: 'CHECK', value: 'CHECK' },
                            { label: 'EXCLUSION', value: 'EXCLUSION' }
                          ]}
                          {...input}
                        />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </>
                    )}
                  </Field>
                  <Text fontSize={12}>Indexing</Text>
                  <Field name="isIndexed">
                    {({ input, meta }) => (
                      <>
                        <Switch
                          label="Add index on this column"
                          type="checkbox"
                          {...input}
                        />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </>
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

export default AddColumnView
