import set from 'lodash/set'
import { FORM_ERROR } from 'final-form'
import type { ApolloError, ServerError, ServerParseError } from '@apollo/client'
import type { ErrorResponse } from '@apollo/client/link/error'

import type { AlertOptions } from 'contexts/GlobalContext'

type ExtensionCode = 'UNAUTHORIZED' | 'NOT_FOUND' | 'FORBIDDEN' | 'UNPROCESSABLE_ENTITY' | 'INTERNAL_SERVER_ERROR' | null

type FieldError = [ string, string ]

const DEFAULT_ERROR_TITLE = 'Something went wrong'
const DEFAULT_ERROR_MESSAGE = 'Our engineers are looking into it.'

function isServerError(
  error: ApolloError['networkError']
): error is (ServerError | ServerParseError) {
  return (error as ServerError | ServerParseError).response !== undefined
}

function getTitleFromExtensionCode(extensionCode: ExtensionCode): string | null {
  switch (extensionCode) {
    case 'UNAUTHORIZED':
      return 'Unauthorized'
    case 'FORBIDDEN':
      return 'Forbidden'
    case 'NOT_FOUND':
      return 'Not Found'
    default:
      return null
  }
}

function getStatusCodeFromExtensionCode(extensionCode: ExtensionCode): number {
  switch (extensionCode) {
    case 'UNAUTHORIZED':
      return 401
    case 'FORBIDDEN':
      return 403
    case 'NOT_FOUND':
      return 404
    case 'INTERNAL_SERVER_ERROR':
      return 500
    default:
      return 422
  }
}

function getAlertFromNetworkError(error: ApolloError['networkError']): AlertOptions {
  let response = null
  let statusCode = null

  if (isServerError(error)) {
    response = error.response
    statusCode = error.statusCode
  }

  if (!response) {
    // Server is down / No internet.
    return {
      icon: 'network-level-error',
      title: 'Could not reach server',
      message: 'Please try again after some time.'
    }
  }

  switch (statusCode) {
    case 401:
      return {
        title: 'Unauthorized',
        message: 'You seem to have logged out.'
      }
    case 403:
      return {
        title: 'Forbidden',
        message: 'You are not allowed to do that.'
      }
    case 404:
      return {
        title: 'Not Found',
        message: 'That resource does not exist.'
      }
    default:
      return {
        title: DEFAULT_ERROR_TITLE,
        message: DEFAULT_ERROR_MESSAGE
      }
  }
}

const parseError = ({ networkError, graphQLErrors }: ErrorResponse | ApolloError) => {
  let alert: AlertOptions | null = null
  let formErrors: Record<string, any> | null = null
  let statusCode: number | null = null

  const isPromotedError = networkError?.name === 'PromotedError'

  if (graphQLErrors) {
    formErrors = graphQLErrors.reduce((errors, error) => {
      const { extensions, message } = error

      const extensionCode: ExtensionCode = extensions?.code
      const fieldErrors: FieldError[] = extensions?.fieldErrors

      statusCode = getStatusCodeFromExtensionCode(extensionCode)

      if (fieldErrors) {
        fieldErrors.forEach(([ field, fieldMessage ]) => {
          if (field === 'base') {
            set(errors, FORM_ERROR, fieldMessage)
          }

          set(errors, field, fieldMessage)
        })
      }

      if (extensionCode && message) {
        const title = getTitleFromExtensionCode(extensionCode)

        if (title) {
          alert = { title, message }
        } else {
          alert = { message }
        }
      }

      return errors
    }, {})

    if (Object.keys(formErrors).length <= 0) {
      formErrors = null
    }
  }

  if (networkError && !isPromotedError) {
    alert = getAlertFromNetworkError(networkError)

    if (isServerError(networkError)) {
      statusCode = networkError?.statusCode
    }
  }

  if (!formErrors && !alert) {
    alert = {
      title: DEFAULT_ERROR_TITLE,
      message: DEFAULT_ERROR_MESSAGE
    }
  }

  return { alert, formErrors, statusCode }
}

export default parseError
