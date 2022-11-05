/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Family {
  iMac = 'iMac',
  macBookAir = 'macBookAir',
  macBookPro = 'macBookPro',
  mini = 'mini',
  pro = 'pro',
  studio = 'studio',
  unknown = 'unknown',
}

export enum RequestStatus {
  accepted = 'accepted',
  pending = 'pending',
  rejected = 'rejected',
}

export enum SubscriptionStatus {
  active = 'active',
  canceled = 'canceled',
  complimentary = 'complimentary',
  emailVerified = 'emailVerified',
  incomplete = 'incomplete',
  incompleteExpired = 'incompleteExpired',
  pastDue = 'pastDue',
  pendingEmailVerification = 'pendingEmailVerification',
  signupCanceled = 'signupCanceled',
  trialing = 'trialing',
  unpaid = 'unpaid',
}

export enum Trigger {
  suspendFilterRequestSubmitted = 'suspendFilterRequestSubmitted',
  unlockRequestSubmitted = 'unlockRequestSubmitted',
}

export interface CreateAdminNotificationInput {
  adminId: UUID;
  id?: UUID | null;
  methodId: UUID;
  trigger: Trigger;
}

export interface CreateKeyRecordInput {
  comment?: string | null;
  deletedAt?: string | null;
  id?: UUID | null;
  key: string;
  keychainId: UUID;
}

export interface CreateKeychainInput {
  authorId: UUID;
  deletedAt?: string | null;
  description?: string | null;
  id?: UUID | null;
  isPublic?: boolean | null;
  name: string;
}

export interface CreateUserInput {
  adminId: UUID;
  deletedAt?: string | null;
  id?: UUID | null;
  keyloggingEnabled?: boolean | null;
  name: string;
  screenshotsEnabled?: boolean | null;
  screenshotsFrequency?: number | null;
  screenshotsResolution?: number | null;
}

export interface CreateWaitlistedUserInput {
  email: string;
  id?: UUID | null;
  signupToken?: UUID | null;
}

export interface DateRangeInput {
  end: string;
  start: string;
}

export interface DecideUnlockRequestInput {
  id: UUID;
  responseComment?: string | null;
  status: RequestStatus;
}

export interface DeleteMonitoringItemInput {
  id: UUID;
  type: string;
}

export interface InitiateSignupInput {
  email: string;
  password: string;
  signupToken?: string | null;
}

export interface LoginAdminInput {
  email: string;
  password: string;
}

export interface SetUserKeychainsInput {
  keychainIds: UUID[];
  userId: UUID;
}

export interface StringInput {
  value: string;
}

export interface UUIDInput {
  uuid: string;
}

export interface UpdateAdminNotificationInput {
  adminId: UUID;
  id: UUID;
  methodId: UUID;
  trigger: Trigger;
}

export interface UpdateKeyRecordInput {
  comment?: string | null;
  deletedAt?: string | null;
  id: UUID;
  key: string;
  keychainId: UUID;
}

export interface UpdateKeychainInput {
  authorId: UUID;
  deletedAt?: string | null;
  description?: string | null;
  id: UUID;
  isPublic: boolean;
  name: string;
}

export interface UpdateSuspendFilterRequestInput {
  deviceId: UUID;
  duration: number;
  id: UUID;
  requestComment?: string | null;
  scope: string;
  status: RequestStatus;
}

export interface UpdateUserInput {
  adminId: UUID;
  deletedAt?: string | null;
  id: UUID;
  keyloggingEnabled: boolean;
  name: string;
  screenshotsEnabled: boolean;
  screenshotsFrequency: number;
  screenshotsResolution: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================