import toast from 'react-hot-toast';
import { Action, Middleware } from '@reduxjs/toolkit';
import { capitalize } from '@dash/utils';
import { deleteActivityItems, deleteDevice, upsertUser, deleteUser } from './slice-users';
import { ResultThunk } from './thunk';
import { updateSuspendFilterRequest } from './slice-filter-suspensions';
import { acceptUnlockRequest, rejectUnlockRequest } from './slice-unlock-requests';
import {
  deleteKeychain,
  deleteKeyRecord,
  upsertKeychain,
  upsertEditingKeyRecord,
} from './slice-keychains';
import {
  confirmPendingNotificationMethod,
  createPendingNotificationMethod,
  deleteNotification,
  deleteNotificationMethod,
  upsertNotification,
} from './slice-admin';

const toastMiddleware: Middleware = (_store) => (next) => (action) => {
  toastCrud(`save`, `user`, upsertUser, action);
  toastCrud(`delete`, `keychain`, deleteKeychain, action);
  toastCrud(`save`, `keychain`, upsertKeychain, action);
  toastCrud(`save`, `key`, upsertEditingKeyRecord, action);
  toastCrud(`delete`, `key`, deleteKeyRecord, action);
  toastCrud(`delete`, `keychain`, deleteKeychain, action);
  toastCrud(`delete`, `device`, deleteDevice, action);
  toastCrud(`delete`, `user`, deleteUser, action);
  toastCrud(`save`, `notification`, upsertNotification, action);
  toastCrud(`delete`, `notification`, deleteNotification, action);
  toastCrud(`delete`, `notification method`, deleteNotificationMethod, action);
  toastCrud(`send`, `verification code`, createPendingNotificationMethod, action);
  toastCrud(`verify`, `confirmation code`, confirmPendingNotificationMethod, action);
  toastCrud(`approve`, `activity items`, deleteActivityItems, action);
  toastCrud(`update`, `suspend filter request`, updateSuspendFilterRequest, action);
  toastCrud(`reject`, `unlock request`, rejectUnlockRequest, action);
  toastCrud(`accept`, `unlock request`, acceptUnlockRequest, action);

  return next(action);
};

export default toastMiddleware;

function toastCrud(
  verb:
    | 'save'
    | 'update'
    | 'delete'
    | 'send'
    | 'verify'
    | 'approve'
    | 'reject'
    | 'accept',
  type: string,
  thunk: ResultThunk<any, any, any>,
  action: Action<unknown>,
): void {
  if (thunk.started.match(action)) {
    toast.dismiss();
    toast.loading(`${capitalize(verb).replace(/e$/, ``)}ing ${type}...`);
  }

  if (thunk.succeeded.match(action)) {
    toast.dismiss();
    const pastTense = (() => {
      switch (verb) {
        case `update`:
        case `save`:
        case `delete`:
        case `approve`:
          return `${verb}d`;
        case `accept`:
        case `reject`:
          return `${verb}ed`;
        case `send`:
          return `sent`;
        case `verify`:
          return `verified`;
      }
    })();
    toast.success(`${capitalize(type)} ${pastTense}!`);
  }

  if (thunk.failed.match(action)) {
    toast.dismiss();
    toast.error(`Failed to ${verb} ${type}`, { duration: 6000 });
  }
}