/* eslint-disable */
// @ts-nocheck
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ApplicationMutation = {
  readonly __typename?: 'ApplicationMutation';
  readonly createEnvironments?: Maybe<ReadonlyArray<Environment>>;
  readonly createTable?: Maybe<Table>;
  readonly createWorkspace?: Maybe<Workspace>;
  readonly userConfirmRegistrationWithToken?: Maybe<UserConfirmRegistrationWithTokenPayload>;
  readonly userLogin?: Maybe<UserLoginPayload>;
  readonly userLogout?: Maybe<UserLogoutPayload>;
  readonly userRegister?: Maybe<UserRegisterPayload>;
  readonly userResendConfirmationWithToken?: Maybe<UserResendConfirmationWithTokenPayload>;
  readonly userSendPasswordResetWithToken?: Maybe<UserSendPasswordResetWithTokenPayload>;
  readonly userUpdatePasswordWithToken?: Maybe<UserUpdatePasswordWithTokenPayload>;
};


export type ApplicationMutationCreateEnvironmentsArgs = {
  input: CreateEnvironmentsInput;
};


export type ApplicationMutationCreateTableArgs = {
  input: CreateTableInput;
};


export type ApplicationMutationCreateWorkspaceArgs = {
  input: CreateWorkspaceInput;
};


export type ApplicationMutationUserConfirmRegistrationWithTokenArgs = {
  confirmationToken: Scalars['String'];
};


export type ApplicationMutationUserLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type ApplicationMutationUserRegisterArgs = {
  confirmUrl?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type ApplicationMutationUserResendConfirmationWithTokenArgs = {
  confirmUrl: Scalars['String'];
  email: Scalars['String'];
};


export type ApplicationMutationUserSendPasswordResetWithTokenArgs = {
  email: Scalars['String'];
  redirectUrl: Scalars['String'];
};


export type ApplicationMutationUserUpdatePasswordWithTokenArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  resetPasswordToken: Scalars['String'];
};

export type ApplicationQuery = {
  readonly __typename?: 'ApplicationQuery';
  readonly currentAccount?: Maybe<User>;
  readonly schema?: Maybe<Schema>;
  readonly testField: Scalars['String'];
  readonly testFieldWithArgs: Scalars['String'];
  readonly testFieldWithArgsAndSelector: Test;
  readonly usersList?: Maybe<ReadonlyArray<User>>;
};


export type ApplicationQueryTestFieldWithArgsArgs = {
  testParam: Scalars['String'];
};


export type ApplicationQueryTestFieldWithArgsAndSelectorArgs = {
  testParam: Scalars['String'];
};

export type Column = {
  readonly __typename?: 'Column';
  readonly contraints?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly dataType?: Maybe<Scalars['String']>;
  readonly identifier: Scalars['String'];
  readonly name: Scalars['String'];
};

export type Credential = {
  readonly __typename?: 'Credential';
  readonly accessToken: Scalars['String'];
  readonly client: Scalars['String'];
  readonly expiry: Scalars['Int'];
  readonly tokenType: Scalars['String'];
  readonly uid: Scalars['String'];
};

export type Database = {
  readonly __typename?: 'Database';
  readonly identifier: Scalars['String'];
  readonly name: Scalars['String'];
};

export type Environment = {
  readonly __typename?: 'Environment';
  readonly id: Scalars['ID'];
  readonly identifier: Scalars['String'];
  readonly name: Scalars['String'];
};

export type EnvironmentsInput = {
  readonly identifier: Scalars['String'];
  readonly name: Scalars['String'];
};

export type Schema = {
  readonly __typename?: 'Schema';
  readonly database: Database;
  readonly id: Scalars['String'];
  readonly tables: ReadonlyArray<Table>;
};

export type Table = {
  readonly __typename?: 'Table';
  readonly columns?: Maybe<ReadonlyArray<Column>>;
  readonly contraints?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly identifier: Scalars['String'];
  readonly indexes?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name: Scalars['String'];
};

export type Test = {
  readonly __typename?: 'Test';
  readonly message: Scalars['String'];
  readonly status: Scalars['Int'];
};

export type User = {
  readonly __typename?: 'User';
  readonly email: Scalars['String'];
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly name: Scalars['String'];
  readonly profilePic?: Maybe<Scalars['String']>;
  readonly username: Scalars['String'];
  readonly workspace?: Maybe<Workspace>;
};

/** Autogenerated return type of UserConfirmRegistrationWithToken */
export type UserConfirmRegistrationWithTokenPayload = {
  readonly __typename?: 'UserConfirmRegistrationWithTokenPayload';
  readonly authenticatable: User;
  /** Authentication credentials. Null unless user is signed in after confirmation. */
  readonly credentials?: Maybe<Credential>;
};

/** Autogenerated return type of UserLogin */
export type UserLoginPayload = {
  readonly __typename?: 'UserLoginPayload';
  readonly authenticatable: User;
  readonly credentials: Credential;
};

/** Autogenerated return type of UserLogout */
export type UserLogoutPayload = {
  readonly __typename?: 'UserLogoutPayload';
  readonly authenticatable: User;
};

/** Autogenerated return type of UserRegister */
export type UserRegisterPayload = {
  readonly __typename?: 'UserRegisterPayload';
  readonly authenticatable: User;
  /** Authentication credentials. Null if after signUp resource is not active for authentication (e.g. Email confirmation required). */
  readonly credentials?: Maybe<Credential>;
};

/** Autogenerated return type of UserResendConfirmationWithToken */
export type UserResendConfirmationWithTokenPayload = {
  readonly __typename?: 'UserResendConfirmationWithTokenPayload';
  readonly message: Scalars['String'];
};

/** Autogenerated return type of UserSendPasswordResetWithToken */
export type UserSendPasswordResetWithTokenPayload = {
  readonly __typename?: 'UserSendPasswordResetWithTokenPayload';
  readonly message: Scalars['String'];
};

/** Autogenerated return type of UserUpdatePasswordWithToken */
export type UserUpdatePasswordWithTokenPayload = {
  readonly __typename?: 'UserUpdatePasswordWithTokenPayload';
  readonly authenticatable: User;
  /** Authentication credentials. Resource must be signed_in for credentials to be returned. */
  readonly credentials?: Maybe<Credential>;
};

export type Workspace = {
  readonly __typename?: 'Workspace';
  readonly environments?: Maybe<ReadonlyArray<Environment>>;
  readonly id: Scalars['ID'];
  readonly identifier: Scalars['String'];
  readonly name: Scalars['String'];
};

/** Autogenerated input type of createEnvironments */
export type CreateEnvironmentsInput = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId?: InputMaybe<Scalars['String']>;
  readonly environments: ReadonlyArray<EnvironmentsInput>;
};

/** Autogenerated input type of createTable */
export type CreateTableInput = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId?: InputMaybe<Scalars['String']>;
  readonly databaseId: Scalars['ID'];
  readonly identifier: Scalars['String'];
  readonly name: Scalars['String'];
};

/** Autogenerated input type of createWorkspace */
export type CreateWorkspaceInput = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId?: InputMaybe<Scalars['String']>;
  readonly identifier: Scalars['String'];
  readonly name: Scalars['String'];
};

export type CreateEnvironmentsMutationVariables = Exact<{
  input: CreateEnvironmentsInput;
}>;


export type CreateEnvironmentsMutation = { readonly __typename?: 'ApplicationMutation', readonly createEnvironments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> };

export type CreateWorkspaceMutationVariables = Exact<{
  input: CreateWorkspaceInput;
}>;


export type CreateWorkspaceMutation = { readonly __typename?: 'ApplicationMutation', readonly createWorkspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } };

export type CredentialFragmentFragment = { readonly __typename?: 'Credential', readonly accessToken: string, readonly client: string, readonly uid: string, readonly tokenType: string, readonly expiry: number };

export type CurrentAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentAccountQuery = { readonly __typename?: 'ApplicationQuery', readonly currentAccount?: { readonly __typename?: 'User', readonly name: string, readonly username: string, readonly email: string, readonly firstName: string, readonly lastName: string, readonly profilePic?: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } } };

export type EnvironmentFragmentFragment = { readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string };

export type SchemaQueryVariables = Exact<{ [key: string]: never; }>;


export type SchemaQuery = { readonly __typename?: 'ApplicationQuery', readonly schema?: { readonly __typename?: 'Schema', readonly id: string, readonly database: { readonly __typename?: 'Database', readonly name: string, readonly identifier: string }, readonly tables: ReadonlyArray<{ readonly __typename?: 'Table', readonly name: string, readonly identifier: string, readonly indexes?: ReadonlyArray<string>, readonly contraints?: ReadonlyArray<string>, readonly columns?: ReadonlyArray<{ readonly __typename?: 'Column', readonly name: string, readonly identifier: string, readonly dataType?: string, readonly contraints?: ReadonlyArray<string> }> }> } };

export type UserConfirmRegistrationWithTokenMutationVariables = Exact<{
  confirmationToken: Scalars['String'];
}>;


export type UserConfirmRegistrationWithTokenMutation = { readonly __typename?: 'ApplicationMutation', readonly userConfirmRegistrationWithToken?: { readonly __typename?: 'UserConfirmRegistrationWithTokenPayload', readonly authenticatable: { readonly __typename?: 'User', readonly name: string, readonly username: string, readonly email: string, readonly firstName: string, readonly lastName: string, readonly profilePic?: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } }, readonly credentials?: { readonly __typename?: 'Credential', readonly accessToken: string, readonly client: string, readonly uid: string, readonly tokenType: string, readonly expiry: number } } };

export type UserFragmentFragment = { readonly __typename?: 'User', readonly name: string, readonly username: string, readonly email: string, readonly firstName: string, readonly lastName: string, readonly profilePic?: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } };

export type UserLoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type UserLoginMutation = { readonly __typename?: 'ApplicationMutation', readonly userLogin?: { readonly __typename?: 'UserLoginPayload', readonly authenticatable: { readonly __typename?: 'User', readonly name: string, readonly username: string, readonly email: string, readonly firstName: string, readonly lastName: string, readonly profilePic?: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } }, readonly credentials: { readonly __typename?: 'Credential', readonly accessToken: string, readonly client: string, readonly uid: string, readonly tokenType: string, readonly expiry: number } } };

export type UserLogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type UserLogoutMutation = { readonly __typename?: 'ApplicationMutation', readonly userLogout?: { readonly __typename?: 'UserLogoutPayload', readonly authenticatable: { readonly __typename?: 'User', readonly name: string, readonly username: string, readonly email: string, readonly firstName: string, readonly lastName: string, readonly profilePic?: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } } } };

export type UserRegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  confirmUrl?: InputMaybe<Scalars['String']>;
}>;


export type UserRegisterMutation = { readonly __typename?: 'ApplicationMutation', readonly userRegister?: { readonly __typename?: 'UserRegisterPayload', readonly authenticatable: { readonly __typename?: 'User', readonly name: string, readonly username: string, readonly email: string, readonly firstName: string, readonly lastName: string, readonly profilePic?: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } }, readonly credentials?: { readonly __typename?: 'Credential', readonly accessToken: string, readonly client: string, readonly uid: string, readonly tokenType: string, readonly expiry: number } } };

export type UserResendConfirmationWithTokenMutationVariables = Exact<{
  email: Scalars['String'];
  confirmUrl: Scalars['String'];
}>;


export type UserResendConfirmationWithTokenMutation = { readonly __typename?: 'ApplicationMutation', readonly userResendConfirmationWithToken?: { readonly __typename?: 'UserResendConfirmationWithTokenPayload', readonly message: string } };

export type UserUpdatePasswordWithTokenMutationVariables = Exact<{
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  resetPasswordToken: Scalars['String'];
}>;


export type UserUpdatePasswordWithTokenMutation = { readonly __typename?: 'ApplicationMutation', readonly userUpdatePasswordWithToken?: { readonly __typename?: 'UserUpdatePasswordWithTokenPayload', readonly authenticatable: { readonly __typename?: 'User', readonly name: string, readonly username: string, readonly email: string, readonly firstName: string, readonly lastName: string, readonly profilePic?: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } }, readonly credentials?: { readonly __typename?: 'Credential', readonly accessToken: string, readonly client: string, readonly uid: string, readonly tokenType: string, readonly expiry: number } } };

export type UserSendPasswordResetWithTokenMutationVariables = Exact<{
  email: Scalars['String'];
  redirectUrl: Scalars['String'];
}>;


export type UserSendPasswordResetWithTokenMutation = { readonly __typename?: 'ApplicationMutation', readonly userSendPasswordResetWithToken?: { readonly __typename?: 'UserSendPasswordResetWithTokenPayload', readonly message: string } };

export type UsersListQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersListQuery = { readonly __typename?: 'ApplicationQuery', readonly usersList?: ReadonlyArray<{ readonly __typename?: 'User', readonly name: string, readonly username: string, readonly email: string, readonly firstName: string, readonly lastName: string, readonly profilePic?: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } }> };

export type WorkspaceFragmentFragment = { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> };

export const CredentialFragmentFragmentDoc = gql`
    fragment CredentialFragment on Credential {
  accessToken
  client
  uid
  tokenType
  expiry
}
    `;
export const EnvironmentFragmentFragmentDoc = gql`
    fragment EnvironmentFragment on Environment {
  id
  name
  identifier
}
    `;
export const WorkspaceFragmentFragmentDoc = gql`
    fragment WorkspaceFragment on Workspace {
  id
  name
  identifier
  environments {
    ...EnvironmentFragment
  }
}
    ${EnvironmentFragmentFragmentDoc}`;
export const UserFragmentFragmentDoc = gql`
    fragment UserFragment on User {
  name
  username
  email
  firstName
  lastName
  username
  profilePic
  workspace {
    ...WorkspaceFragment
  }
}
    ${WorkspaceFragmentFragmentDoc}`;
export const CreateEnvironmentsDocument = gql`
    mutation CreateEnvironments($input: createEnvironmentsInput!) {
  createEnvironments(input: $input) {
    ...EnvironmentFragment
  }
}
    ${EnvironmentFragmentFragmentDoc}`;

/**
 * __useCreateEnvironmentsMutation__
 *
 * To run a mutation, you first call `useCreateEnvironmentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEnvironmentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEnvironmentsMutation, { data, loading, error }] = useCreateEnvironmentsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEnvironmentsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateEnvironmentsMutation, CreateEnvironmentsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateEnvironmentsMutation, CreateEnvironmentsMutationVariables>(CreateEnvironmentsDocument, options);
      }
export type CreateEnvironmentsMutationHookResult = ReturnType<typeof useCreateEnvironmentsMutation>;
export const CreateWorkspaceDocument = gql`
    mutation CreateWorkspace($input: createWorkspaceInput!) {
  createWorkspace(input: $input) {
    ...WorkspaceFragment
  }
}
    ${WorkspaceFragmentFragmentDoc}`;

/**
 * __useCreateWorkspaceMutation__
 *
 * To run a mutation, you first call `useCreateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWorkspaceMutation, { data, loading, error }] = useCreateWorkspaceMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateWorkspaceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateWorkspaceMutation, CreateWorkspaceMutationVariables>(CreateWorkspaceDocument, options);
      }
export type CreateWorkspaceMutationHookResult = ReturnType<typeof useCreateWorkspaceMutation>;
export const CurrentAccountDocument = gql`
    query CurrentAccount {
  currentAccount {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useCurrentAccountQuery__
 *
 * To run a query within a React component, call `useCurrentAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentAccountQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentAccountQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentAccountQuery, CurrentAccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<CurrentAccountQuery, CurrentAccountQueryVariables>(CurrentAccountDocument, options);
      }
export function useCurrentAccountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentAccountQuery, CurrentAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<CurrentAccountQuery, CurrentAccountQueryVariables>(CurrentAccountDocument, options);
        }
export type CurrentAccountQueryHookResult = ReturnType<typeof useCurrentAccountQuery>;
export type CurrentAccountLazyQueryHookResult = ReturnType<typeof useCurrentAccountLazyQuery>;
export const SchemaDocument = gql`
    query Schema {
  schema {
    id
    database {
      name
      identifier
    }
    tables {
      name
      identifier
      indexes
      contraints
      columns {
        name
        identifier
        dataType
        contraints
      }
    }
  }
}
    `;

/**
 * __useSchemaQuery__
 *
 * To run a query within a React component, call `useSchemaQuery` and pass it any options that fit your needs.
 * When your component renders, `useSchemaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSchemaQuery({
 *   variables: {
 *   },
 * });
 */
export function useSchemaQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaQuery, SchemaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<SchemaQuery, SchemaQueryVariables>(SchemaDocument, options);
      }
export function useSchemaLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaQuery, SchemaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<SchemaQuery, SchemaQueryVariables>(SchemaDocument, options);
        }
export type SchemaQueryHookResult = ReturnType<typeof useSchemaQuery>;
export type SchemaLazyQueryHookResult = ReturnType<typeof useSchemaLazyQuery>;
export const UserConfirmRegistrationWithTokenDocument = gql`
    mutation UserConfirmRegistrationWithToken($confirmationToken: String!) {
  userConfirmRegistrationWithToken(confirmationToken: $confirmationToken) {
    authenticatable {
      ...UserFragment
    }
    credentials {
      ...CredentialFragment
    }
  }
}
    ${UserFragmentFragmentDoc}
${CredentialFragmentFragmentDoc}`;

/**
 * __useUserConfirmRegistrationWithTokenMutation__
 *
 * To run a mutation, you first call `useUserConfirmRegistrationWithTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserConfirmRegistrationWithTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userConfirmRegistrationWithTokenMutation, { data, loading, error }] = useUserConfirmRegistrationWithTokenMutation({
 *   variables: {
 *      confirmationToken: // value for 'confirmationToken'
 *   },
 * });
 */
export function useUserConfirmRegistrationWithTokenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserConfirmRegistrationWithTokenMutation, UserConfirmRegistrationWithTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UserConfirmRegistrationWithTokenMutation, UserConfirmRegistrationWithTokenMutationVariables>(UserConfirmRegistrationWithTokenDocument, options);
      }
export type UserConfirmRegistrationWithTokenMutationHookResult = ReturnType<typeof useUserConfirmRegistrationWithTokenMutation>;
export const UserLoginDocument = gql`
    mutation UserLogin($email: String!, $password: String!) {
  userLogin(email: $email, password: $password) {
    authenticatable {
      ...UserFragment
    }
    credentials {
      ...CredentialFragment
    }
  }
}
    ${UserFragmentFragmentDoc}
${CredentialFragmentFragmentDoc}`;

/**
 * __useUserLoginMutation__
 *
 * To run a mutation, you first call `useUserLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLoginMutation, { data, loading, error }] = useUserLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useUserLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserLoginMutation, UserLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UserLoginMutation, UserLoginMutationVariables>(UserLoginDocument, options);
      }
export type UserLoginMutationHookResult = ReturnType<typeof useUserLoginMutation>;
export const UserLogoutDocument = gql`
    mutation UserLogout {
  userLogout {
    authenticatable {
      ...UserFragment
    }
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useUserLogoutMutation__
 *
 * To run a mutation, you first call `useUserLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userLogoutMutation, { data, loading, error }] = useUserLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useUserLogoutMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserLogoutMutation, UserLogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UserLogoutMutation, UserLogoutMutationVariables>(UserLogoutDocument, options);
      }
export type UserLogoutMutationHookResult = ReturnType<typeof useUserLogoutMutation>;
export const UserRegisterDocument = gql`
    mutation UserRegister($email: String!, $password: String!, $passwordConfirmation: String!, $confirmUrl: String) {
  userRegister(
    email: $email
    password: $password
    passwordConfirmation: $passwordConfirmation
    confirmUrl: $confirmUrl
  ) {
    authenticatable {
      ...UserFragment
    }
    credentials {
      ...CredentialFragment
    }
  }
}
    ${UserFragmentFragmentDoc}
${CredentialFragmentFragmentDoc}`;

/**
 * __useUserRegisterMutation__
 *
 * To run a mutation, you first call `useUserRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userRegisterMutation, { data, loading, error }] = useUserRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      passwordConfirmation: // value for 'passwordConfirmation'
 *      confirmUrl: // value for 'confirmUrl'
 *   },
 * });
 */
export function useUserRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserRegisterMutation, UserRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UserRegisterMutation, UserRegisterMutationVariables>(UserRegisterDocument, options);
      }
export type UserRegisterMutationHookResult = ReturnType<typeof useUserRegisterMutation>;
export const UserResendConfirmationWithTokenDocument = gql`
    mutation UserResendConfirmationWithToken($email: String!, $confirmUrl: String!) {
  userResendConfirmationWithToken(email: $email, confirmUrl: $confirmUrl) {
    message
  }
}
    `;

/**
 * __useUserResendConfirmationWithTokenMutation__
 *
 * To run a mutation, you first call `useUserResendConfirmationWithTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserResendConfirmationWithTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userResendConfirmationWithTokenMutation, { data, loading, error }] = useUserResendConfirmationWithTokenMutation({
 *   variables: {
 *      email: // value for 'email'
 *      confirmUrl: // value for 'confirmUrl'
 *   },
 * });
 */
export function useUserResendConfirmationWithTokenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserResendConfirmationWithTokenMutation, UserResendConfirmationWithTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UserResendConfirmationWithTokenMutation, UserResendConfirmationWithTokenMutationVariables>(UserResendConfirmationWithTokenDocument, options);
      }
export type UserResendConfirmationWithTokenMutationHookResult = ReturnType<typeof useUserResendConfirmationWithTokenMutation>;
export const UserUpdatePasswordWithTokenDocument = gql`
    mutation UserUpdatePasswordWithToken($password: String!, $passwordConfirmation: String!, $resetPasswordToken: String!) {
  userUpdatePasswordWithToken(
    password: $password
    passwordConfirmation: $passwordConfirmation
    resetPasswordToken: $resetPasswordToken
  ) {
    authenticatable {
      ...UserFragment
    }
    credentials {
      ...CredentialFragment
    }
  }
}
    ${UserFragmentFragmentDoc}
${CredentialFragmentFragmentDoc}`;

/**
 * __useUserUpdatePasswordWithTokenMutation__
 *
 * To run a mutation, you first call `useUserUpdatePasswordWithTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserUpdatePasswordWithTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userUpdatePasswordWithTokenMutation, { data, loading, error }] = useUserUpdatePasswordWithTokenMutation({
 *   variables: {
 *      password: // value for 'password'
 *      passwordConfirmation: // value for 'passwordConfirmation'
 *      resetPasswordToken: // value for 'resetPasswordToken'
 *   },
 * });
 */
export function useUserUpdatePasswordWithTokenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserUpdatePasswordWithTokenMutation, UserUpdatePasswordWithTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UserUpdatePasswordWithTokenMutation, UserUpdatePasswordWithTokenMutationVariables>(UserUpdatePasswordWithTokenDocument, options);
      }
export type UserUpdatePasswordWithTokenMutationHookResult = ReturnType<typeof useUserUpdatePasswordWithTokenMutation>;
export const UserSendPasswordResetWithTokenDocument = gql`
    mutation UserSendPasswordResetWithToken($email: String!, $redirectUrl: String!) {
  userSendPasswordResetWithToken(email: $email, redirectUrl: $redirectUrl) {
    message
  }
}
    `;

/**
 * __useUserSendPasswordResetWithTokenMutation__
 *
 * To run a mutation, you first call `useUserSendPasswordResetWithTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSendPasswordResetWithTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSendPasswordResetWithTokenMutation, { data, loading, error }] = useUserSendPasswordResetWithTokenMutation({
 *   variables: {
 *      email: // value for 'email'
 *      redirectUrl: // value for 'redirectUrl'
 *   },
 * });
 */
export function useUserSendPasswordResetWithTokenMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UserSendPasswordResetWithTokenMutation, UserSendPasswordResetWithTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UserSendPasswordResetWithTokenMutation, UserSendPasswordResetWithTokenMutationVariables>(UserSendPasswordResetWithTokenDocument, options);
      }
export type UserSendPasswordResetWithTokenMutationHookResult = ReturnType<typeof useUserSendPasswordResetWithTokenMutation>;
export const UsersListDocument = gql`
    query UsersList {
  usersList {
    ...UserFragment
  }
}
    ${UserFragmentFragmentDoc}`;

/**
 * __useUsersListQuery__
 *
 * To run a query within a React component, call `useUsersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersListQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersListQuery, UsersListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<UsersListQuery, UsersListQueryVariables>(UsersListDocument, options);
      }
export function useUsersListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersListQuery, UsersListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<UsersListQuery, UsersListQueryVariables>(UsersListDocument, options);
        }
export type UsersListQueryHookResult = ReturnType<typeof useUsersListQuery>;
export type UsersListLazyQueryHookResult = ReturnType<typeof useUsersListLazyQuery>;