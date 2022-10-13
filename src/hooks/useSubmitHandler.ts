/* eslint-disable max-len */
import omitDeep from 'omit-deep-lodash'
import pick from 'lodash/pick'
import pickBy from 'lodash/pickBy'
import uuid from 'uuid-random'
import { FormApi, FORM_ERROR } from 'final-form'
import { useContext } from 'react'
import type { DocumentNode, MutationFunction, MutationUpdaterFunction, ApolloCache } from '@apollo/client'
import type { ErrorResponse } from '@apollo/client/link/error'
import type { FormProps } from 'react-final-form'

import type { Scalars } from 'generated/schema'
import type { AlertOptions } from 'contexts/GlobalContext'
import GlobalContext from 'contexts/GlobalContext'
import parseError from 'libs/parseError'

type MutationVariables<TInput> = {
  input: MutationInputVariables<TInput>
}

type MutationInputVariables<TInput> =
  TInput extends { id: any } ? TInput & { id: any } : TInput & { id?: any }

type FormPropsWithId<TInput> = FormProps<TInput & { id?: Scalars['ID'] }>

type OptimisticResponse<TData, TInput> = {
  defaultValue?: Record<string, any>,
  mutation: Extract<keyof TData, string>,
  override?: (input: TInput) => Record<string, any> | undefined,
  response: 'CREATE' | 'UPDATE' | 'DESTROY',
  typename: string
} | ((vars: MutationVariables<TInput>) => OptimisticResponseReturnType<TData, TInput>)

type OptimisticResponseReturnType<TData, TInput> = TData | {
  readonly [x: string]: string | {
    readonly __typename: string,
    id?: string
  } & TInput
}

type MutationUpdateOptions<TData extends Record<string, any>, TVariables> = {
  strategy: 'APPEND' | 'PREPEND' | 'REMOVE',
  query: DocumentNode,
  queryVariables?: TVariables,
  dataKey: string,
  mutation: Extract<keyof TData, string>,
  shouldEvictSingular?: boolean
}

type SubmitHandlerOptions<TData extends Record<string, any>, TInput, TVariables, TContext, TCache extends ApolloCache<any>> = {
  successAlert?: AlertOptions,
  failureAlert?: AlertOptions,
  update?: MutationUpdateOptions<TData, TVariables> | MutationUpdaterFunction<TData, TVariables, TContext, TCache>,
  optimisticResponse?: OptimisticResponse<TData, TInput>
}

type SubmitHandler<TInput> = (
  input: MutationInputVariables<TInput>,
  form?: FormApi<MutationInputVariables<TInput>> | undefined
) => Promise<Record<string, any>>

function getOptimisticUpdates<TData, TInput>(
  options: OptimisticResponse<TData, TInput>
): ((vars: MutationVariables<TInput>) => OptimisticResponseReturnType<TData, TInput>) {
  if (typeof options === 'function') {
    return options
  }

  const { response, mutation, typename, override, defaultValue } = options

  if (response === 'CREATE') {
    return (value: MutationVariables<TInput>) => ({
      __typename: 'Mutation',
      [mutation]: {
        ...defaultValue,
        __typename: typename,
        ...value.input,
        id: uuid(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        ...(override && override(value.input))
      }
    })
  }

  if (response === 'UPDATE') {
    return (value: MutationVariables<TInput>) => ({
      __typename: 'Mutation',
      [mutation]: {
        ...defaultValue,
        __typename: typename,
        id: value.input.id,
        ...value.input,
        updatedAt: new Date().toISOString(),
        ...(override && override(value.input))
      }
    })
  }

  // response === 'DESTROY'
  return (value: MutationVariables<TInput>) => ({
    __typename: 'Mutation',
    [mutation]: {
      ...defaultValue,
      __typename: typename,
      id: value.input.id,
      ...value.input,
      ...(override && override(value.input))
    }
  })
}

function getUpdaterFn<TData extends Record<string, any>, TVariables, TQuery extends Record<string, any>, TContext, TCache extends ApolloCache<any>>(
  options: MutationUpdateOptions<TData, TVariables> | MutationUpdaterFunction<TData, TVariables, TContext, TCache>
): MutationUpdaterFunction<TData, TVariables, TContext, TCache> {
  if (typeof options === 'function') {
    return options
  }

  const { query, queryVariables, strategy, dataKey, mutation, shouldEvictSingular } = options

  return (cache, { data }) => {
    const cachedQueryData = cache.readQuery<TQuery, TVariables>(
      { query, variables: queryVariables }
    )

    if (!data || cachedQueryData === null) {
      return
    }

    const entities = cachedQueryData[dataKey]

    let updatedData = []

    if (strategy === 'REMOVE') {
      if (shouldEvictSingular) {
        cache.evict({
          id: cache.identify(data[mutation])
        })
      }

      cache.evict({
        fieldName: dataKey,
        broadcast: false
      })

      cache.gc()

      updatedData = entities.filter((entity: any) => (data[mutation] as any).id !== entity.id)
    }

    if (strategy === 'APPEND') {
      updatedData = entities.concat(data[mutation])
    }

    if (strategy === 'PREPEND') {
      updatedData = [ data[mutation] ].concat(entities)
    }

    cache.writeQuery({
      query,
      variables: queryVariables,
      data: {
        ...cachedQueryData,
        [dataKey]: updatedData
      }
    })
  }
}

function useSubmitHandler
  <TData extends Record<string, any>, TContext, TCache extends ApolloCache<any>, TInput = {}, TVariables = Record<string, any>>(
  mutate: MutationFunction<TData, MutationVariables<TInput>>,
  options: SubmitHandlerOptions<TData, TInput, TVariables, TContext, TCache> = {}
): SubmitHandler<TInput> {
  const { openFailureAlert, openSuccessAlert } = useContext(GlobalContext)!
  const { successAlert, failureAlert } = options

  return async (input, form) => {
    const sanitizedInput = omitDeep(input, '__typename') as MutationInputVariables<TInput>

    let variables = { input: sanitizedInput } as unknown as MutationVariables<TInput>

    if (form && sanitizedInput && sanitizedInput.id) {
      const dirtyFieldNames = Object.keys(pickBy(form?.getState().dirtyFields)).filter((field) => field !== 'id')

      if (dirtyFieldNames.length < 1) {
        return {}
      }

      variables = {
        input: {
          id: sanitizedInput.id,
          ...pick(sanitizedInput, dirtyFieldNames)
        }
      } as MutationVariables<TInput>
    }

    const optimisticResponse = options.optimisticResponse
      && (getOptimisticUpdates(options.optimisticResponse) as (
        (vars: MutationVariables<TInput> | {}) => TData))

    const update = options.update && getUpdaterFn(options.update)

    // @ts-expect-error
    return mutate({ variables, update, optimisticResponse }).then((result) => {
      if (successAlert) {
        openSuccessAlert(successAlert)
      }

      return result
    }).catch((error: ErrorResponse) => {
      // eslint-disable-next-line no-console
      const { alert, formErrors } = parseError(error)

      if (formErrors) {
        return Promise.resolve(formErrors)
      }

      const errorAlert = failureAlert || alert
      if (errorAlert) {
        openFailureAlert(errorAlert)
      }

      return Promise.resolve({ [FORM_ERROR]: error })
    })
  }
}

useSubmitHandler.withCallback = <TInput>(
  submitHandler: SubmitHandler<TInput>,
  onSuccess: () => void
) => async function modifiedSubmitHandler(...params: Parameters<typeof submitHandler>) {
    return submitHandler(...params).then((response) => {
      !response.errors && onSuccess()
      return response
    })
  }

export type { FormPropsWithId, SubmitHandlerOptions, MutationUpdateOptions, MutationVariables, SubmitHandler }

export default useSubmitHandler
