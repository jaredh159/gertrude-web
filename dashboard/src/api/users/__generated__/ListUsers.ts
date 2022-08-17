/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Family } from './../../../graphqlTypes';

// ====================================================
// GraphQL query operation: ListUsers
// ====================================================

export interface ListUsers_user_keychains_keys {
  __typename: 'KeyRecord';
  id: string;
}

export interface ListUsers_user_keychains {
  __typename: 'Keychain';
  keys: ListUsers_user_keychains_keys[];
}

export interface ListUsers_user_devices_model {
  __typename: 'Model';
  family: Family;
  title: string;
}

export interface ListUsers_user_devices {
  __typename: 'Device';
  id: string;
  isOnline: boolean;
  model: ListUsers_user_devices_model;
}

export interface ListUsers_user {
  __typename: 'User';
  id: string;
  name: string;
  screenshotsEnabled: boolean;
  keystrokesEnabled: boolean;
  keychains: ListUsers_user_keychains[];
  devices: ListUsers_user_devices[];
}

export interface ListUsers {
  user: ListUsers_user[];
}
