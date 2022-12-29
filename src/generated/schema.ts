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
  readonly createColumn?: Maybe<Column>;
  readonly createEnvironments?: Maybe<ReadonlyArray<Environment>>;
  readonly createFolder?: Maybe<Folder>;
  readonly createTable?: Maybe<Table>;
  readonly createWorkspace?: Maybe<Workspace>;
  readonly updateColumn?: Maybe<Column>;
  readonly updateFolder?: Maybe<Folder>;
  readonly updateTable?: Maybe<Table>;
  readonly userConfirmRegistrationWithToken?: Maybe<UserConfirmRegistrationWithTokenPayload>;
  readonly userLogin?: Maybe<UserLoginPayload>;
  readonly userLogout?: Maybe<UserLogoutPayload>;
  readonly userRegister?: Maybe<UserRegisterPayload>;
  readonly userResendConfirmationWithToken?: Maybe<UserResendConfirmationWithTokenPayload>;
  readonly userSendPasswordResetWithToken?: Maybe<UserSendPasswordResetWithTokenPayload>;
  readonly userUpdatePasswordWithToken?: Maybe<UserUpdatePasswordWithTokenPayload>;
};


export type ApplicationMutationCreateColumnArgs = {
  input: CreateColumnInput;
};


export type ApplicationMutationCreateEnvironmentsArgs = {
  input: CreateEnvironmentsInput;
};


export type ApplicationMutationCreateFolderArgs = {
  input: CreateFolderInput;
};


export type ApplicationMutationCreateTableArgs = {
  input: CreateTableInput;
};


export type ApplicationMutationCreateWorkspaceArgs = {
  input: CreateWorkspaceInput;
};


export type ApplicationMutationUpdateColumnArgs = {
  input: UpdateColumnInput;
};


export type ApplicationMutationUpdateFolderArgs = {
  input: UpdateFolderInput;
};


export type ApplicationMutationUpdateTableArgs = {
  input: UpdateTableInput;
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
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  role: RoleEnum;
  username: Scalars['String'];
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
  readonly databaseSchema?: Maybe<Schema>;
  readonly storageDirectory?: Maybe<Directories>;
  readonly testField: Scalars['String'];
  readonly testFieldWithArgs: Scalars['String'];
  readonly testFieldWithArgsAndSelector: Test;
  readonly usersList?: Maybe<ReadonlyArray<User>>;
};


export type ApplicationQueryStorageDirectoryArgs = {
  path: Scalars['String'];
};


export type ApplicationQueryTestFieldWithArgsArgs = {
  testParam: Scalars['String'];
};


export type ApplicationQueryTestFieldWithArgsAndSelectorArgs = {
  testParam: Scalars['String'];
};

export type Bucket = {
  readonly __typename?: 'Bucket';
  readonly id: Scalars['ID'];
  readonly identifier: Scalars['String'];
  readonly name: Scalars['String'];
};

export type Column = {
  readonly __typename?: 'Column';
  readonly constraints?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly dataType?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly identifier: Scalars['String'];
  readonly isIndexed?: Maybe<Scalars['Boolean']>;
  readonly name: Scalars['String'];
  readonly tableId: Scalars['ID'];
};

export type ConstraintsEnum =
  | 'CHECK'
  | 'EXCLUSION'
  | 'FOREIGN'
  | 'NOT_NULL'
  | 'PRIMARY'
  | 'UNIQUE';

export type Credential = {
  readonly __typename?: 'Credential';
  readonly accessToken: Scalars['String'];
  readonly client: Scalars['String'];
  readonly expiry: Scalars['Int'];
  readonly tokenType: Scalars['String'];
  readonly uid: Scalars['String'];
};

export type DataTypeEnum =
  | 'ARRAY'
  | 'BOOLEAN'
  | 'CHAR'
  | 'DATE'
  | 'INTEGER'
  | 'INTERVAL'
  | 'JSON'
  | 'NUMERIC'
  | 'SERIAL'
  | 'TEXT'
  | 'TIME'
  | 'TIMESTAMP'
  | 'UUID'
  | 'VARCHAR';

export type Database = {
  readonly __typename?: 'Database';
  readonly id: Scalars['ID'];
  readonly identifier: Scalars['String'];
  readonly name: Scalars['String'];
};

export type Directories = {
  readonly __typename?: 'Directories';
  readonly bucket: Bucket;
  readonly files: ReadonlyArray<File>;
  readonly folders: ReadonlyArray<Folder>;
  readonly parentFolder?: Maybe<Folder>;
  readonly path: Scalars['String'];
  readonly subFolders: ReadonlyArray<Folder>;
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

export type File = {
  readonly __typename?: 'File';
  readonly bucketId: Scalars['ID'];
  readonly fileType: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly identifier: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly size: Scalars['String'];
};

export type Folder = {
  readonly __typename?: 'Folder';
  readonly bucketId: Scalars['ID'];
  readonly id: Scalars['ID'];
  readonly identifier: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativePath: Scalars['String'];
};

export type RoleEnum =
  | 'BOT'
  | 'WORKSPACE_MEMBER'
  | 'WORKSPACE_OWNER'
  | 'WORKSPACE_USER';

export type Schema = {
  readonly __typename?: 'Schema';
  readonly database: Database;
  readonly id: Scalars['ID'];
  readonly tables: ReadonlyArray<Table>;
};

export type Table = {
  readonly __typename?: 'Table';
  readonly columns?: Maybe<ReadonlyArray<Column>>;
  readonly id: Scalars['ID'];
  readonly identifier: Scalars['String'];
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
  readonly role: RoleEnum;
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
  readonly logo: Scalars['String'];
  readonly name: Scalars['String'];
};

/** Autogenerated input type of createColumn */
export type CreateColumnInput = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId?: InputMaybe<Scalars['String']>;
  readonly constraints: ReadonlyArray<ConstraintsEnum>;
  readonly dataType: DataTypeEnum;
  readonly identifier: Scalars['String'];
  readonly isIndexed: Scalars['Boolean'];
  readonly name: Scalars['String'];
  readonly tableId: Scalars['ID'];
};

/** Autogenerated input type of createEnvironments */
export type CreateEnvironmentsInput = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId?: InputMaybe<Scalars['String']>;
  readonly environments: ReadonlyArray<EnvironmentsInput>;
};

/** Autogenerated input type of createFolder */
export type CreateFolderInput = {
  readonly bucketId: Scalars['ID'];
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId?: InputMaybe<Scalars['String']>;
  readonly folderId?: InputMaybe<Scalars['ID']>;
  readonly identifier: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativePath: Scalars['String'];
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
  readonly logo: Scalars['String'];
  readonly name: Scalars['String'];
};

/** Autogenerated input type of updateColumn */
export type UpdateColumnInput = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId?: InputMaybe<Scalars['String']>;
  readonly constraints?: InputMaybe<ReadonlyArray<ConstraintsEnum>>;
  readonly dataType?: InputMaybe<DataTypeEnum>;
  readonly id: Scalars['ID'];
  readonly identifier?: InputMaybe<Scalars['String']>;
  readonly isIndexed?: InputMaybe<Scalars['Boolean']>;
  readonly name?: InputMaybe<Scalars['String']>;
};

/** Autogenerated input type of updateFolder */
export type UpdateFolderInput = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId?: InputMaybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly identifier?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly relativePath?: InputMaybe<Scalars['String']>;
};

/** Autogenerated input type of updateTable */
export type UpdateTableInput = {
  /** A unique identifier for the client performing the mutation. */
  readonly clientMutationId?: InputMaybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly identifier?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
};

/** Autogenerated return type of userRegister */
export type UserRegisterPayload = {
  readonly __typename?: 'userRegisterPayload';
  readonly authenticatable?: Maybe<User>;
  readonly credentials?: Maybe<Credential>;
};

export type BucketFragmentFragment = { readonly __typename?: 'Bucket', readonly id: string, readonly name: string, readonly identifier: string };

export type ColumnFragmentFragment = { readonly __typename?: 'Column', readonly id: string, readonly tableId: string, readonly name: string, readonly identifier: string, readonly dataType?: string, readonly constraints?: ReadonlyArray<string> };

export type CreateColumnMutationVariables = Exact<{
  input: CreateColumnInput;
}>;


export type CreateColumnMutation = { readonly __typename?: 'ApplicationMutation', readonly createColumn?: { readonly __typename?: 'Column', readonly id: string, readonly tableId: string, readonly name: string, readonly identifier: string, readonly dataType?: string, readonly constraints?: ReadonlyArray<string> } };

export type CreateEnvironmentsMutationVariables = Exact<{
  input: CreateEnvironmentsInput;
}>;


export type CreateEnvironmentsMutation = { readonly __typename?: 'ApplicationMutation', readonly createEnvironments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> };

export type CreateFolderMutationVariables = Exact<{
  input: CreateFolderInput;
}>;


export type CreateFolderMutation = { readonly __typename?: 'ApplicationMutation', readonly createFolder?: { readonly __typename?: 'Folder', readonly id: string, readonly bucketId: string, readonly name: string, readonly identifier: string, readonly relativePath: string } };

export type CreateTableMutationVariables = Exact<{
  input: CreateTableInput;
}>;


export type CreateTableMutation = { readonly __typename?: 'ApplicationMutation', readonly createTable?: { readonly __typename?: 'Table', readonly id: string, readonly name: string, readonly identifier: string, readonly columns?: ReadonlyArray<{ readonly __typename?: 'Column', readonly id: string, readonly tableId: string, readonly name: string, readonly identifier: string, readonly dataType?: string, readonly constraints?: ReadonlyArray<string> }> } };

export type CreateWorkspaceMutationVariables = Exact<{
  input: CreateWorkspaceInput;
}>;


export type CreateWorkspaceMutation = { readonly __typename?: 'ApplicationMutation', readonly createWorkspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly logo: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } };

export type CredentialFragmentFragment = { readonly __typename?: 'Credential', readonly accessToken: string, readonly client: string, readonly uid: string, readonly tokenType: string, readonly expiry: number };

export type CurrentAccountQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentAccountQuery = { readonly __typename?: 'ApplicationQuery', readonly currentAccount?: { readonly __typename?: 'User', readonly name: string, readonly username: string, readonly email: string, readonly firstName: string, readonly lastName: string, readonly role: RoleEnum, readonly profilePic?: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly logo: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } } };

export type DatabaseFragmentFragment = { readonly __typename?: 'Database', readonly id: string, readonly name: string, readonly identifier: string };

export type DatabaseSchemaQueryVariables = Exact<{ [key: string]: never; }>;


export type DatabaseSchemaQuery = { readonly __typename?: 'ApplicationQuery', readonly databaseSchema?: { readonly __typename?: 'Schema', readonly id: string, readonly database: { readonly __typename?: 'Database', readonly id: string, readonly name: string, readonly identifier: string }, readonly tables: ReadonlyArray<{ readonly __typename?: 'Table', readonly id: string, readonly name: string, readonly identifier: string, readonly columns?: ReadonlyArray<{ readonly __typename?: 'Column', readonly id: string, readonly tableId: string, readonly name: string, readonly identifier: string, readonly dataType?: string, readonly constraints?: ReadonlyArray<string> }> }> } };

export type EnvironmentFragmentFragment = { readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string };

export type FileFragmentFragment = { readonly __typename?: 'File', readonly id: string, readonly bucketId: string, readonly name: string, readonly identifier: string, readonly relativePath: string, readonly size: string, readonly fileType: string };

export type FolderFragmentFragment = { readonly __typename?: 'Folder', readonly id: string, readonly bucketId: string, readonly name: string, readonly identifier: string, readonly relativePath: string };

export type StorageDirectoryQueryVariables = Exact<{
  path: Scalars['String'];
}>;


export type StorageDirectoryQuery = { readonly __typename?: 'ApplicationQuery', readonly storageDirectory?: { readonly __typename?: 'Directories', readonly path: string, readonly parentFolder?: { readonly __typename?: 'Folder', readonly id: string, readonly bucketId: string, readonly name: string, readonly identifier: string, readonly relativePath: string }, readonly bucket: { readonly __typename?: 'Bucket', readonly id: string, readonly name: string, readonly identifier: string }, readonly folders: ReadonlyArray<{ readonly __typename?: 'Folder', readonly id: string, readonly bucketId: string, readonly name: string, readonly identifier: string, readonly relativePath: string }>, readonly subFolders: ReadonlyArray<{ readonly __typename?: 'Folder', readonly id: string, readonly bucketId: string, readonly name: string, readonly identifier: string, readonly relativePath: string }>, readonly files: ReadonlyArray<{ readonly __typename?: 'File', readonly id: string, readonly bucketId: string, readonly name: string, readonly identifier: string, readonly relativePath: string, readonly size: string, readonly fileType: string }> } };

export type TableFragmentFragment = { readonly __typename?: 'Table', readonly id: string, readonly name: string, readonly identifier: string, readonly columns?: ReadonlyArray<{ readonly __typename?: 'Column', readonly id: string, readonly tableId: string, readonly name: string, readonly identifier: string, readonly dataType?: string, readonly constraints?: ReadonlyArray<string> }> };

export type UpdateColumnMutationVariables = Exact<{
  input: UpdateColumnInput;
}>;


export type UpdateColumnMutation = { readonly __typename?: 'ApplicationMutation', readonly updateColumn?: { readonly __typename?: 'Column', readonly id: string, readonly tableId: string, readonly name: string, readonly identifier: string, readonly dataType?: string, readonly constraints?: ReadonlyArray<string> } };

export type UpdateFolderMutationVariables = Exact<{
  input: UpdateFolderInput;
}>;


export type UpdateFolderMutation = { readonly __typename?: 'ApplicationMutation', readonly updateFolder?: { readonly __typename?: 'Folder', readonly id: string, readonly bucketId: string, readonly name: string, readonly identifier: string, readonly relativePath: string } };

export type UpdateTableMutationVariables = Exact<{
  input: UpdateTableInput;
}>;


export type UpdateTableMutation = { readonly __typename?: 'ApplicationMutation', readonly updateTable?: { readonly __typename?: 'Table', readonly id: string, readonly name: string, readonly identifier: string, readonly columns?: ReadonlyArray<{ readonly __typename?: 'Column', readonly id: string, readonly tableId: string, readonly name: string, readonly identifier: string, readonly dataType?: string, readonly constraints?: ReadonlyArray<string> }> } };

export type UserConfirmRegistrationWithTokenMutationVariables = Exact<{
  confirmationToken: Scalars['String'];
}>;


export type UserConfirmRegistrationWithTokenMutation = { readonly __typename?: 'ApplicationMutation', readonly userConfirmRegistrationWithToken?: { readonly __typename?: 'UserConfirmRegistrationWithTokenPayload', readonly authenticatable: { readonly __typename?: 'User', readonly name: string, readonly username: string, readonly email: string, readonly firstName: string, readonly lastName: string, readonly role: RoleEnum, readonly profilePic?: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly logo: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } }, readonly credentials?: { readonly __typename?: 'Credential', readonly accessToken: string, readonly client: string, readonly uid: string, readonly tokenType: string, readonly expiry: number } } };

export type UserFragmentFragment = { readonly __typename?: 'User', readonly name: string, readonly username: string, readonly email: string, readonly firstName: string, readonly lastName: string, readonly role: RoleEnum, readonly profilePic?: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly logo: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } };

export type UserLoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type UserLoginMutation = { readonly __typename?: 'ApplicationMutation', readonly userLogin?: { readonly __typename?: 'UserLoginPayload', readonly authenticatable: { readonly __typename?: 'User', readonly name: string, readonly username: string, readonly email: string, readonly firstName: string, readonly lastName: string, readonly role: RoleEnum, readonly profilePic?: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly logo: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } }, readonly credentials: { readonly __typename?: 'Credential', readonly accessToken: string, readonly client: string, readonly uid: string, readonly tokenType: string, readonly expiry: number } } };

export type UserLogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type UserLogoutMutation = { readonly __typename?: 'ApplicationMutation', readonly userLogout?: { readonly __typename?: 'UserLogoutPayload', readonly authenticatable: { readonly __typename?: 'User', readonly name: string, readonly username: string, readonly email: string, readonly firstName: string, readonly lastName: string, readonly role: RoleEnum, readonly profilePic?: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly logo: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } } } };

export type UserRegisterMutationVariables = Exact<{
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  role: RoleEnum;
  confirmUrl?: InputMaybe<Scalars['String']>;
}>;


export type UserRegisterMutation = { readonly __typename?: 'ApplicationMutation', readonly userRegister?: { readonly __typename?: 'userRegisterPayload', readonly authenticatable?: { readonly __typename?: 'User', readonly name: string, readonly username: string, readonly email: string, readonly firstName: string, readonly lastName: string, readonly role: RoleEnum, readonly profilePic?: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly logo: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } }, readonly credentials?: { readonly __typename?: 'Credential', readonly accessToken: string, readonly client: string, readonly uid: string, readonly tokenType: string, readonly expiry: number } } };

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


export type UserUpdatePasswordWithTokenMutation = { readonly __typename?: 'ApplicationMutation', readonly userUpdatePasswordWithToken?: { readonly __typename?: 'UserUpdatePasswordWithTokenPayload', readonly authenticatable: { readonly __typename?: 'User', readonly name: string, readonly username: string, readonly email: string, readonly firstName: string, readonly lastName: string, readonly role: RoleEnum, readonly profilePic?: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly logo: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } }, readonly credentials?: { readonly __typename?: 'Credential', readonly accessToken: string, readonly client: string, readonly uid: string, readonly tokenType: string, readonly expiry: number } } };

export type UserSendPasswordResetWithTokenMutationVariables = Exact<{
  email: Scalars['String'];
  redirectUrl: Scalars['String'];
}>;


export type UserSendPasswordResetWithTokenMutation = { readonly __typename?: 'ApplicationMutation', readonly userSendPasswordResetWithToken?: { readonly __typename?: 'UserSendPasswordResetWithTokenPayload', readonly message: string } };

export type UsersListQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersListQuery = { readonly __typename?: 'ApplicationQuery', readonly usersList?: ReadonlyArray<{ readonly __typename?: 'User', readonly name: string, readonly username: string, readonly email: string, readonly firstName: string, readonly lastName: string, readonly role: RoleEnum, readonly profilePic?: string, readonly workspace?: { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly logo: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> } }> };

export type WorkspaceFragmentFragment = { readonly __typename?: 'Workspace', readonly id: string, readonly name: string, readonly identifier: string, readonly logo: string, readonly environments?: ReadonlyArray<{ readonly __typename?: 'Environment', readonly id: string, readonly name: string, readonly identifier: string }> };

export const BucketFragmentFragmentDoc = gql`
    fragment BucketFragment on Bucket {
  id
  name
  identifier
}
    `;
export const CredentialFragmentFragmentDoc = gql`
    fragment CredentialFragment on Credential {
  accessToken
  client
  uid
  tokenType
  expiry
}
    `;
export const DatabaseFragmentFragmentDoc = gql`
    fragment DatabaseFragment on Database {
  id
  name
  identifier
}
    `;
export const FileFragmentFragmentDoc = gql`
    fragment FileFragment on File {
  id
  bucketId
  name
  identifier
  relativePath
  size
  fileType
}
    `;
export const FolderFragmentFragmentDoc = gql`
    fragment FolderFragment on Folder {
  id
  bucketId
  name
  identifier
  relativePath
}
    `;
export const ColumnFragmentFragmentDoc = gql`
    fragment ColumnFragment on Column {
  id
  tableId
  name
  identifier
  dataType
  constraints
}
    `;
export const TableFragmentFragmentDoc = gql`
    fragment TableFragment on Table {
  id
  name
  identifier
  columns {
    ...ColumnFragment
  }
}
    ${ColumnFragmentFragmentDoc}`;
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
  logo
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
  role
  profilePic
  workspace {
    ...WorkspaceFragment
  }
}
    ${WorkspaceFragmentFragmentDoc}`;
export const CreateColumnDocument = gql`
    mutation CreateColumn($input: createColumnInput!) {
  createColumn(input: $input) {
    ...ColumnFragment
  }
}
    ${ColumnFragmentFragmentDoc}`;

/**
 * __useCreateColumnMutation__
 *
 * To run a mutation, you first call `useCreateColumnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateColumnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createColumnMutation, { data, loading, error }] = useCreateColumnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateColumnMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateColumnMutation, CreateColumnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateColumnMutation, CreateColumnMutationVariables>(CreateColumnDocument, options);
      }
export type CreateColumnMutationHookResult = ReturnType<typeof useCreateColumnMutation>;
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
export const CreateFolderDocument = gql`
    mutation CreateFolder($input: createFolderInput!) {
  createFolder(input: $input) {
    ...FolderFragment
  }
}
    ${FolderFragmentFragmentDoc}`;

/**
 * __useCreateFolderMutation__
 *
 * To run a mutation, you first call `useCreateFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFolderMutation, { data, loading, error }] = useCreateFolderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateFolderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateFolderMutation, CreateFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateFolderMutation, CreateFolderMutationVariables>(CreateFolderDocument, options);
      }
export type CreateFolderMutationHookResult = ReturnType<typeof useCreateFolderMutation>;
export const CreateTableDocument = gql`
    mutation CreateTable($input: createTableInput!) {
  createTable(input: $input) {
    ...TableFragment
  }
}
    ${TableFragmentFragmentDoc}`;

/**
 * __useCreateTableMutation__
 *
 * To run a mutation, you first call `useCreateTableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTableMutation, { data, loading, error }] = useCreateTableMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTableMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTableMutation, CreateTableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateTableMutation, CreateTableMutationVariables>(CreateTableDocument, options);
      }
export type CreateTableMutationHookResult = ReturnType<typeof useCreateTableMutation>;
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
export const DatabaseSchemaDocument = gql`
    query DatabaseSchema {
  databaseSchema {
    id
    database {
      ...DatabaseFragment
    }
    tables {
      ...TableFragment
    }
  }
}
    ${DatabaseFragmentFragmentDoc}
${TableFragmentFragmentDoc}`;

/**
 * __useDatabaseSchemaQuery__
 *
 * To run a query within a React component, call `useDatabaseSchemaQuery` and pass it any options that fit your needs.
 * When your component renders, `useDatabaseSchemaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDatabaseSchemaQuery({
 *   variables: {
 *   },
 * });
 */
export function useDatabaseSchemaQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<DatabaseSchemaQuery, DatabaseSchemaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<DatabaseSchemaQuery, DatabaseSchemaQueryVariables>(DatabaseSchemaDocument, options);
      }
export function useDatabaseSchemaLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DatabaseSchemaQuery, DatabaseSchemaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<DatabaseSchemaQuery, DatabaseSchemaQueryVariables>(DatabaseSchemaDocument, options);
        }
export type DatabaseSchemaQueryHookResult = ReturnType<typeof useDatabaseSchemaQuery>;
export type DatabaseSchemaLazyQueryHookResult = ReturnType<typeof useDatabaseSchemaLazyQuery>;
export const StorageDirectoryDocument = gql`
    query StorageDirectory($path: String!) {
  storageDirectory(path: $path) {
    path
    parentFolder {
      ...FolderFragment
    }
    bucket {
      ...BucketFragment
    }
    folders {
      ...FolderFragment
    }
    subFolders {
      ...FolderFragment
    }
    files {
      ...FileFragment
    }
  }
}
    ${FolderFragmentFragmentDoc}
${BucketFragmentFragmentDoc}
${FileFragmentFragmentDoc}`;

/**
 * __useStorageDirectoryQuery__
 *
 * To run a query within a React component, call `useStorageDirectoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useStorageDirectoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStorageDirectoryQuery({
 *   variables: {
 *      path: // value for 'path'
 *   },
 * });
 */
export function useStorageDirectoryQuery(baseOptions: ApolloReactHooks.QueryHookOptions<StorageDirectoryQuery, StorageDirectoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<StorageDirectoryQuery, StorageDirectoryQueryVariables>(StorageDirectoryDocument, options);
      }
export function useStorageDirectoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StorageDirectoryQuery, StorageDirectoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<StorageDirectoryQuery, StorageDirectoryQueryVariables>(StorageDirectoryDocument, options);
        }
export type StorageDirectoryQueryHookResult = ReturnType<typeof useStorageDirectoryQuery>;
export type StorageDirectoryLazyQueryHookResult = ReturnType<typeof useStorageDirectoryLazyQuery>;
export const UpdateColumnDocument = gql`
    mutation UpdateColumn($input: updateColumnInput!) {
  updateColumn(input: $input) {
    ...ColumnFragment
  }
}
    ${ColumnFragmentFragmentDoc}`;

/**
 * __useUpdateColumnMutation__
 *
 * To run a mutation, you first call `useUpdateColumnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateColumnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateColumnMutation, { data, loading, error }] = useUpdateColumnMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateColumnMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateColumnMutation, UpdateColumnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateColumnMutation, UpdateColumnMutationVariables>(UpdateColumnDocument, options);
      }
export type UpdateColumnMutationHookResult = ReturnType<typeof useUpdateColumnMutation>;
export const UpdateFolderDocument = gql`
    mutation UpdateFolder($input: updateFolderInput!) {
  updateFolder(input: $input) {
    ...FolderFragment
  }
}
    ${FolderFragmentFragmentDoc}`;

/**
 * __useUpdateFolderMutation__
 *
 * To run a mutation, you first call `useUpdateFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFolderMutation, { data, loading, error }] = useUpdateFolderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateFolderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateFolderMutation, UpdateFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateFolderMutation, UpdateFolderMutationVariables>(UpdateFolderDocument, options);
      }
export type UpdateFolderMutationHookResult = ReturnType<typeof useUpdateFolderMutation>;
export const UpdateTableDocument = gql`
    mutation UpdateTable($input: updateTableInput!) {
  updateTable(input: $input) {
    ...TableFragment
  }
}
    ${TableFragmentFragmentDoc}`;

/**
 * __useUpdateTableMutation__
 *
 * To run a mutation, you first call `useUpdateTableMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTableMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTableMutation, { data, loading, error }] = useUpdateTableMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTableMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTableMutation, UpdateTableMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateTableMutation, UpdateTableMutationVariables>(UpdateTableDocument, options);
      }
export type UpdateTableMutationHookResult = ReturnType<typeof useUpdateTableMutation>;
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
    mutation UserRegister($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!, $passwordConfirmation: String!, $role: RoleEnum!, $confirmUrl: String) {
  userRegister(
    firstName: $firstName
    lastName: $lastName
    username: $username
    email: $email
    password: $password
    passwordConfirmation: $passwordConfirmation
    role: $role
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
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      passwordConfirmation: // value for 'passwordConfirmation'
 *      role: // value for 'role'
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