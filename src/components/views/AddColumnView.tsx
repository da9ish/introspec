import { Field, Form, FormProps } from 'react-final-form'
import { styled } from '@stitches/react'
import type { FormApi } from 'final-form'

import Button from 'components/Button'
import Code from 'components/Code'
import Checkbox from 'components/Checkbox'
import Flex from 'components/Flex'
import Grid from 'components/Grid'
import Input from 'components/Input'
import Label from 'components/Label'
import Select from 'components/Select'
import Separator from 'components/Separator'
import Sheet, { SheetBody, SheetContent, SheetFooter, SheetHeader, SheetTitle } from 'components/Sheet'
import Switch from 'components/Switch'
import Text from 'components/Text'
import useSubmitHandler from 'hooks/useSubmitHandler'
import { CreateColumnInput, DatabaseSchemaDocument, Table, UpdateColumnInput, useCreateColumnMutation, useUpdateColumnMutation } from 'generated/schema'
import type { ViewProps } from 'components/views'

type FormValues = CreateColumnInput | UpdateColumnInput

interface Props {
  initialValues: FormValues,
  table: Table
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

const AddColumnView: React.FC<ViewProps<Props>> = ({
  params: { initialValues, table },
  open,
  onOpenChange,
  modal,
  defaultOpen
}) => {
  const isUpdating = 'id' in initialValues
  const title = isUpdating
    ? <>Edit column <Code>{initialValues.identifier}</Code></>
    : <>Add new column to <Code>{table.identifier}</Code></>

  const [ createColumn ] = useCreateColumnMutation({
    onCompleted: () => onOpenChange?.(false),
    refetchQueries: [
      { query: DatabaseSchemaDocument }
    ]
  })

  const handleCreateColumn = useSubmitHandler(createColumn, {
    successAlert: { message: 'Column created.' }
  })

  const [ updateColumn ] = useUpdateColumnMutation({
    onCompleted: () => onOpenChange?.(false),
    refetchQueries: [
      { query: DatabaseSchemaDocument }
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
      <SheetContent size="large">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        <Form
          onSubmit={onSubmit as any}
          validate={() => ({})}
          initialValues={initialValues}
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
                            <Flex direction="column" alignItems="start" gap="md">
                              <Input
                                placeholder="Identifier"
                                type="text"
                                size="normal"
                                style={{ width: '100%' }}
                                {...input}
                              />
                              <Text fontSize={10} color="$slate10">
                                Recommended to use lowercase and use an
                                underscore to separate words e.g. column_name
                              </Text>
                            </Flex>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </Label>
                        )}
                      </Field>
                    </FieldContainer>
                  </FieldGrid>
                  <Separator orientation="horizontal" />
                  <FieldGrid columns={3} columnGap={16}>
                    <FieldLabel fontSize={12}>Foreign Key Relation</FieldLabel>
                    <FieldContainer direction="column" gap="lg">
                      <Button kind="outlined">Add foriegn key relation</Button>
                    </FieldContainer>
                  </FieldGrid>
                  <Separator orientation="horizontal" />
                  <FieldGrid columns={3} columnGap={16}>
                    <FieldLabel fontSize={12}>Data Type</FieldLabel>
                    <FieldContainer direction="column" gap="lg">
                      <Field name="dataType">
                        {({ input, meta }) => (
                          <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                            Data type
                            <Select
                              label="Type"
                              placeholder="Select a type..."
                              size="normal"
                              options={[
                                { label: '---', value: '---' },
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
                      <Button kind="outlined" icon="external-link">Learn more about data types</Button>
                      <Field name="isArray">
                        {({ input, meta }) => (
                          <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                            <Flex gap="lg">
                              <Flex direction="column" gap="md">
                                <Text fontSize={12} color="$slate12">Defined as Array</Text>
                                <Text fontSize={10} color="$slate11">
                                  Allow column to be defined as
                                  variable-length multidimensional arrays
                                </Text>
                              </Flex>
                              <Checkbox
                                type={'button' as any}
                                size="small"
                                {...input}
                              />
                            </Flex>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </Label>
                        )}
                      </Field>
                      <Field name="defaultValue">
                        {({ input, meta }) => (
                          <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                            Default Value
                            <Flex direction="column" alignItems="start" gap="md">
                              <Input
                                placeholder="NULL"
                                type="text"
                                size="normal"
                                style={{ width: '100%' }}
                                {...input}
                              />
                              <Text fontSize={10} color="$slate10">
                                Can either be a literal or an
                                expression (e.g uuid_generate_v4())
                              </Text>
                            </Flex>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </Label>
                        )}
                      </Field>
                    </FieldContainer>
                  </FieldGrid>
                  <Separator orientation="horizontal" />
                  <FieldGrid columns={3} columnGap={16}>
                    <FieldLabel fontSize={12}>Configuration</FieldLabel>
                    <FieldContainer direction="column" gap="lg">
                      <Field name="isPrimary">
                        {({ input, meta }) => (
                          <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                            <Flex alignItems="start" gap="lg">
                              <Flex direction="column" gap="md" grow={1}>
                                <Text fontSize={12} color="$slate12">Is Primary Key</Text>
                                <Text fontSize={10} color="$slate11">
                                  A primary key indicates that a column or group
                                  of columns can be used as a unique
                                  identifier for rows in the table
                                </Text>
                              </Flex>
                              <Flex>
                                <Switch
                                  type={'button' as any}
                                  {...input}
                                />
                              </Flex>
                            </Flex>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </Label>
                        )}
                      </Field>
                      <Field name="isNullable">
                        {({ input, meta }) => (
                          <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                            <Flex alignItems="start" gap="lg">
                              <Flex direction="column" gap="md" grow={1}>
                                <Text fontSize={12} color="$slate12">Allow Nullable</Text>
                                <Text fontSize={10} color="$slate11">
                                  Allow the column to assume a NULL
                                  value if no value is provided
                                </Text>
                              </Flex>
                              <Flex>
                                <Switch
                                  type={'button' as any}
                                  {...input}
                                />
                              </Flex>
                            </Flex>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </Label>
                        )}
                      </Field>
                      <Field name="isUnique">
                        {({ input, meta }) => (
                          <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                            <Flex alignItems="start" gap="lg">
                              <Flex direction="column" gap="md" grow={1}>
                                <Text fontSize={12} color="$slate12">Is Unique</Text>
                                <Text fontSize={10} color="$slate11">
                                  Enforce values in the column to be unique across rows
                                </Text>
                              </Flex>
                              <Flex>
                                <Switch
                                  type={'button' as any}
                                  {...input}
                                />
                              </Flex>
                            </Flex>
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </Label>
                        )}
                      </Field>
                    </FieldContainer>
                  </FieldGrid>
                  <Separator orientation="horizontal" />
                  <FieldGrid columns={3} columnGap={16}>
                    <FieldLabel fontSize={12}>Constraints</FieldLabel>
                    <FieldContainer direction="column" gap="lg">
                      <Field name="constraints">
                        {({ input, meta }) => (
                          <Label css={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 }}>
                            Constraints
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
                          </Label>
                        )}
                      </Field>
                    </FieldContainer>
                  </FieldGrid>
                  <Separator orientation="horizontal" />
                  <FieldGrid columns={3} columnGap={16}>
                    <FieldLabel fontSize={12}>Indexing</FieldLabel>
                    <FieldContainer direction="column" gap="lg">
                      <Field name="isIndexed">
                        {({ input, meta }) => (
                          <Label css={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                            Add index on this column
                            <Switch
                              type={'button' as any}
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

export default AddColumnView
