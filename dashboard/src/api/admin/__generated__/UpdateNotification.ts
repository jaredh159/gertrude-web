/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateAdminNotificationInput } from './../../../../../components/src/shared/dashboard/types/GraphQL';

// ====================================================
// GraphQL mutation operation: UpdateNotification
// ====================================================

export interface UpdateNotification_notification {
  __typename: 'AdminNotification';
  id: string;
}

export interface UpdateNotification {
  notification: UpdateNotification_notification;
}

export interface UpdateNotificationVariables {
  input: UpdateAdminNotificationInput;
}
