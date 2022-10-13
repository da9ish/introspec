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

export type Authenticatable = {
  readonly __typename?: 'Authenticatable';
  readonly email: Scalars['String'];
};

export type Credential = {
  readonly __typename?: 'Credential';
  readonly accessToken: Scalars['String'];
  readonly client: Scalars['String'];
  readonly expiry: Scalars['Int'];
  readonly tokenType: Scalars['String'];
  readonly uid: Scalars['String'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  /** An example field added by the generator */
  readonly testField: Scalars['String'];
  readonly userConfirmRegistrationWithToken?: Maybe<UserConfirmRegistrationWithTokenPayload>;
  readonly userLogin?: Maybe<UserLoginPayload>;
  readonly userLogout?: Maybe<UserLogoutPayload>;
  readonly userRegister?: Maybe<UserRegisterPayload>;
  readonly userResendConfirmationWithToken?: Maybe<UserResendConfirmationWithTokenPayload>;
  readonly userSendPasswordResetWithToken?: Maybe<UserSendPasswordResetWithTokenPayload>;
  readonly userUpdatePasswordWithToken?: Maybe<UserUpdatePasswordWithTokenPayload>;
};


export type MutationUserConfirmRegistrationWithTokenArgs = {
  confirmationToken: Scalars['String'];
};


export type MutationUserLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUserRegisterArgs = {
  confirmUrl?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUserResendConfirmationWithTokenArgs = {
  confirmUrl: Scalars['String'];
  email: Scalars['String'];
};


export type MutationUserSendPasswordResetWithTokenArgs = {
  email: Scalars['String'];
  redirectUrl: Scalars['String'];
};


export type MutationUserUpdatePasswordWithTokenArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  resetPasswordToken: Scalars['String'];
};

export type Query = {
  readonly __typename?: 'Query';
  readonly currentAccount?: Maybe<User>;
};

export type User = {
  readonly __typename?: 'User';
  readonly email: Scalars['String'];
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly name: Scalars['String'];
  readonly profilePic?: Maybe<Scalars['String']>;
  readonly username: Scalars['String'];
};

/** Autogenerated return type of UserConfirmRegistrationWithToken */
export type UserConfirmRegistrationWithTokenPayload = {
  readonly __typename?: 'UserConfirmRegistrationWithTokenPayload';
  readonly authenticatable: Authenticatable;
  /** Authentication credentials. Null unless user is signed in after confirmation. */
  readonly credentials?: Maybe<Credential>;
};

/** Autogenerated return type of UserLogin */
export type UserLoginPayload = {
  readonly __typename?: 'UserLoginPayload';
  readonly authenticatable: Authenticatable;
  readonly credentials: Credential;
};

/** Autogenerated return type of UserLogout */
export type UserLogoutPayload = {
  readonly __typename?: 'UserLogoutPayload';
  readonly authenticatable: Authenticatable;
};

/** Autogenerated return type of UserRegister */
export type UserRegisterPayload = {
  readonly __typename?: 'UserRegisterPayload';
  readonly authenticatable: Authenticatable;
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
  readonly authenticatable: Authenticatable;
  /** Authentication credentials. Resource must be signed_in for credentials to be returned. */
  readonly credentials?: Maybe<Credential>;
};

export type CurrentAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentAccountQuery = { readonly __typename?: 'Query', readonly currentAccount?: { readonly __typename?: 'User', readonly email: string, readonly name: string, readonly firstName: string, readonly lastName: string, readonly username: string, readonly profilePic?: string } };

export type UserConfirmRegistrationWithTokenMutationVariables = Exact<{
  confirmationToken: Scalars['String'];
}>;


export type UserConfirmRegistrationWithTokenMutation = { readonly __typename?: 'Mutation', readonly userConfirmRegistrationWithToken?: { readonly __typename?: 'UserConfirmRegistrationWithTokenPayload', readonly authenticatable: { readonly __typename?: 'Authenticatable', readonly email: string }, readonly credentials?: { readonly __typename?: 'Credential', readonly accessToken: string, readonly client: string, readonly uid: string, readonly tokenType: string, readonly expiry: number } } };

export type UserLoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type UserLoginMutation = { readonly __typename?: 'Mutation', readonly userLogin?: { readonly __typename?: 'UserLoginPayload', readonly authenticatable: { readonly __typename?: 'Authenticatable', readonly email: string }, readonly credentials: { readonly __typename?: 'Credential', readonly accessToken: string, readonly client: string, readonly uid: string, readonly tokenType: string, readonly expiry: number } } };

export type UserLogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type UserLogoutMutation = { readonly __typename?: 'Mutation', readonly userLogout?: { readonly __typename?: 'UserLogoutPayload', readonly authenticatable: { readonly __typename?: 'Authenticatable', readonly email: string } } };

export type UserRegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  confirmUrl?: InputMaybe<Scalars['String']>;
}>;


export type UserRegisterMutation = { readonly __typename?: 'Mutation', readonly userRegister?: { readonly __typename?: 'UserRegisterPayload', readonly authenticatable: { readonly __typename?: 'Authenticatable', readonly email: string }, readonly credentials?: { readonly __typename?: 'Credential', readonly accessToken: string, readonly client: string, readonly uid: string, readonly tokenType: string, readonly expiry: number } } };

export type UserResendConfirmationWithTokenMutationVariables = Exact<{
  email: Scalars['String'];
  confirmUrl: Scalars['String'];
}>;


export type UserResendConfirmationWithTokenMutation = { readonly __typename?: 'Mutation', readonly userResendConfirmationWithToken?: { readonly __typename?: 'UserResendConfirmationWithTokenPayload', readonly message: string } };

export type UserUpdatePasswordWithTokenMutationVariables = Exact<{
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  resetPasswordToken: Scalars['String'];
}>;


export type UserUpdatePasswordWithTokenMutation = { readonly __typename?: 'Mutation', readonly userUpdatePasswordWithToken?: { readonly __typename?: 'UserUpdatePasswordWithTokenPayload', readonly authenticatable: { readonly __typename?: 'Authenticatable', readonly email: string }, readonly credentials?: { readonly __typename?: 'Credential', readonly accessToken: string, readonly client: string, readonly uid: string, readonly tokenType: string, readonly expiry: number } } };

export type UserSendPasswordResetWithTokenMutationVariables = Exact<{
  email: Scalars['String'];
  redirectUrl: Scalars['String'];
}>;


export type UserSendPasswordResetWithTokenMutation = { readonly __typename?: 'Mutation', readonly userSendPasswordResetWithToken?: { readonly __typename?: 'UserSendPasswordResetWithTokenPayload', readonly message: string } };


export const CurrentAccountDocument = gql`
    query CurrentAccount {
  currentAccount {
    email
    name
    firstName
    lastName
    username
    profilePic
  }
}
    `;

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
export const UserConfirmRegistrationWithTokenDocument = gql`
    mutation UserConfirmRegistrationWithToken($confirmationToken: String!) {
  userConfirmRegistrationWithToken(confirmationToken: $confirmationToken) {
    authenticatable {
      email
    }
    credentials {
      accessToken
      client
      uid
      tokenType
      expiry
    }
  }
}
    `;

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
      email
    }
    credentials {
      accessToken
      client
      uid
      tokenType
      expiry
    }
  }
}
    `;

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
      email
    }
  }
}
    `;

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
      email
    }
    credentials {
      accessToken
      client
      uid
      tokenType
      expiry
    }
  }
}
    `;

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
      email
    }
    credentials {
      accessToken
      client
      uid
      tokenType
      expiry
    }
  }
}
    `;

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