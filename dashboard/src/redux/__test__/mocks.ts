import type { User } from '../../api/users';
import { ActivityItem } from '@shared/dashboard/Users/Activity/ReviewDay';
import {
  GetAdmin_admin,
  GetAdmin_admin_notifications,
  GetAdmin_admin_verifiedNotificationMethods,
  GetAdmin_admin_verifiedNotificationMethods_method,
} from '../../api/admin/__generated__/GetAdmin';
import { GetActivityOverview_counts } from '../../api/users/__generated__/GetActivityOverview';
import { SubscriptionStatus, Trigger } from '../../graphqlTypes';

export function adminProfile(override: Partial<GetAdmin_admin> = {}): GetAdmin_admin {
  return {
    __typename: `Admin`,
    email: `you@example.com`,
    subscriptionStatus: SubscriptionStatus.active,
    notifications: [],
    verifiedNotificationMethods: [],
    ...override,
  };
}

export function adminNotification(
  override: Partial<GetAdmin_admin_notifications> = {},
): GetAdmin_admin_notifications {
  return {
    __typename: `AdminNotification`,
    id: `mock.AdminNotification--id--${Math.random()}`,
    trigger: Trigger.suspendFilterRequestSubmitted,
    method: {
      __typename: `AdminVerifiedNotificationMethod`,
      id: `mock.AdminVerifiedNotificationMethod--id--${Math.random()}`,
    },
    ...override,
  };
}

export function adminVerifiedNotificationMethod(
  override: Partial<GetAdmin_admin_verifiedNotificationMethods> = {},
): GetAdmin_admin_verifiedNotificationMethods {
  return {
    __typename: `AdminVerifiedNotificationMethod`,
    id: `mock.AdminVerifiedNotificationMethod--id--${Math.random()}`,
    method: notificationMethod(),
    ...override,
  };
}

export function notificationMethod(
  override: Partial<GetAdmin_admin_verifiedNotificationMethods_method> = {},
): GetAdmin_admin_verifiedNotificationMethods_method {
  return {
    __typename: `NotificationMethod`,
    data: {
      __typename: `EmailData`,
      email: `them@example.com`,
    },
    ...override,
  };
}

export function user(override: Partial<User> = {}): User {
  return {
    __typename: `User`,
    id: `mock.User--id--${Math.random()}`,
    name: `Huck`,
    screenshotsEnabled: true,
    screenshotsResolution: 1000,
    screenshotsFrequency: 60,
    keyloggingEnabled: true,
    keychains: [],
    devices: [],
    ...override,
  };
}

export function userKeychain(
  override: Partial<User['keychains'][0]> = {},
): User['keychains'][0] {
  return {
    __typename: `Keychain`,
    id: `mock.Keychain--id--${Math.random()}`,
    name: `HTC`,
    description: ``,
    isPublic: false,
    authorId: `mock.Admin--id--${Math.random()}`,
    keys: [],
    ...override,
  };
}

export function activityOverviewCounts(
  numItems = 0,
  numCompleted = 0,
  start = new Date().toISOString(),
): GetActivityOverview_counts {
  return {
    __typename: `MonitoringRangeCounts`,
    dateRange: { __typename: `DateRange`, start },
    numItems,
    numCompleted,
  };
}

export function keystrokeLine(override: Partial<ActivityItem> = {}): ActivityItem {
  const id = override.id ?? `id-${Math.random()}`;
  const ids = override.ids ?? [id];
  return {
    id,
    ids,
    appName: `appName-${Math.random()}`,
    line: `line-${Math.random()}`,
    date: new Date().toISOString(),
    ...override,
    type: `KeystrokeLine`,
  };
}
