import get from 'lodash/get'
import type { ApolloError } from '@apollo/client'
import type { CSSProperties } from '@stitches/react'

import { useState } from 'react'

import { Field } from 'react-final-form'

import { FieldArray } from 'react-final-form-arrays'

import Flex from 'components/Flex'
import IconButton from 'components/IconButton'
import Text from 'components/Text'
import { Table, Tbody, Td, Th, Thead, Tr } from 'components/Table'

import Input from './Input'
import Checkbox from './Checkbox'
import Select from './Select'
import Dropdown from './Dropdown'
import Grid from './Grid'

interface Action<P extends any> {
  name: string,
  icon: string,
  onClick: (record: P) => void
}

interface Column {
  name: string,
  identifier: string,
  style?: CSSProperties
}

interface Props<P extends any> {
  // actions: Action<P>[],
  // columns: Column[],
  // data: P[],
  // loading: boolean,
  // error?: ApolloError,
  // onRowClick?: (record: P, e: React.FormEvent<any>) => void
}

function FormTable<P extends any>() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th border="none" style={{ width: '24px' }} />
          <Th border="none">Name</Th>
          <Th border="none">Type</Th>
          <Th border="none">Default Value</Th>
          <Th border="none" style={{ width: '50px' }}>Primary</Th>
          <Th border="none" style={{ width: '-webkit-fill-available' }} align="end" />
        </Tr>
      </Thead>
      <Tbody>
        <FieldArray name="columns">
          {({ fields }) => (
            <>
              {fields.map((name, index) => (
                <Tr key={name}>
                  <Td border="none" width="24px">
                    <IconButton name="menu" size={16} />
                  </Td>
                  <Td border="none">
                    <Field name={`${name}.identifier`}>
                      {({ input }) => (
                        <Input
                          placeholder="column_name"
                          type="text"
                          size="normal"
                          {...input}
                        />
                      )}
                    </Field>
                  </Td>
                  <Td border="none">
                    <Field name={`${name}.dataType`}>
                      {({ input }) => (
                        <Select
                          label="Data Type"
                          placeholder="Select"
                          metaKey="description"
                          onValueChange={input.onChange}
                          value={input.value}
                          options={[
                            { description: '', label: '---', value: null },
                            { description: '', label: 'PostgreSQL Data Types', value: '--', disabled: true },
                            { icon: 'hash', description: 'Signed two-byte integer', label: 'int2', value: 'int2' },
                            { icon: 'hash', description: 'Signed four-byte integer', label: 'int4', value: 'int4' },
                            { icon: 'hash', description: 'Signed eight-byte integer', label: 'int8', value: 'int8' },
                            { icon: 'hash', description: 'Single precision floating-point number (4 bytes)', label: 'float4', value: 'float4' },
                            { icon: 'hash', description: 'Double precision floating-point number (8 bytes)', label: 'float8', value: 'float8' },
                            { icon: 'hash', description: 'Exact numeric of selectable precision', label: 'numeric', value: 'numeric' },
                            { icon: 'code', description: 'Textual JSON data', label: 'json', value: 'json' },
                            { icon: 'code', description: 'Binary JSON data, decomposed', label: 'jsonb', value: 'jsonb' },
                            { icon: 'type', description: 'Variable-length character string', label: 'text', value: 'text' },
                            { icon: 'type', description: 'Variable-length character string', label: 'varchar', value: 'varchar' },
                            { icon: 'type', description: 'Universally unique identifier', label: 'uuid', value: 'uuid' },
                            { icon: 'calendar', description: 'Calendar date (year, month, day)', label: 'date', value: 'date' },
                            { icon: 'calendar', description: 'Time of day (no time zone)', label: 'time', value: 'time' },
                            { icon: 'calendar', description: 'Time of day, including time zone', label: 'timetz', value: 'timetz' },
                            { icon: 'calendar', description: 'Date and time (no time zone)', label: 'timestamp', value: 'timestamp' },
                            { icon: 'calendar', description: 'Date and time, including time zone', label: 'timestamptz', value: 'timestamptz' },
                            { icon: 'toggle-right', description: 'Logical boolean (true/false)', label: 'bool', value: 'bool' }
                          ]}
                        />
                      )}
                    </Field>
                  </Td>
                  <Td border="none">
                    <Field name={`${name}.defaultValue`}>
                      {({ input }) => (
                        <Input
                          placeholder="NULL"
                          type="text"
                          size="normal"
                          {...input}
                        />
                      )}
                    </Field>
                  </Td>
                  <Td border="none">
                    <Field name={`${name}.isPrimary`}>
                      {({ input }) => (
                        <>
                          <Checkbox
                            type={'button' as any}
                            size="normal"
                            defaultChecked={input.value}
                            checked={input.value}
                            onCheckedChange={input.onChange}
                            {...input}
                          />
                          {console.log(input.value)}
                        </>
                      )}
                    </Field>
                  </Td>
                  <Td border="none" align="end" style={{ width: '-webkit-fill-available' }}>
                    <Flex gap="md" justifyContent="end">
                      <IconButton name="settings" size={16} />
                      <IconButton name="x" size={16} onClick={() => fields.remove(index)} />
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </>
          )}
        </FieldArray>
      </Tbody>
    </Table>
  )
}

export default FormTable
