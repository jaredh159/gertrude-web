import { expect, test, describe } from 'vitest';
import { Req } from '../helpers';
import reducer from '../slice-dashboard';
import { acceptUnlockRequest, rejectUnlockRequest } from '../slice-unlock-requests';
import { deleteActivityItems } from '../slice-users';
import { makeState } from './test-helpers';

describe(`reducer`, () => {
  test(`deciding unlock request removes it from dashboard`, () => {
    const state = makeState();
    state.dashboard.request = {
      state: `succeeded`,
      payload: {
        unlockRequests: [
          {
            id: `request-123`,
            target: `happyfish.com`,
            userId: `2`,
            userName: `Huck`,
            createdAt: ``,
          },
        ],
        users: [],
        userActivity: [],
        userScreenshots: [],
      },
    };

    let next = reducer(
      state.dashboard,
      acceptUnlockRequest.succeeded(true, `request-123`),
    );
    expect(Req.payload(next.request)?.unlockRequests).toEqual([]);

    next = reducer(state.dashboard, rejectUnlockRequest.succeeded(true, `request-123`));
    expect(Req.payload(next.request)?.unlockRequests).toEqual([]);
  });

  test(`approving activity items removes them from dashboard widget`, () => {
    const state = makeState();
    state.dashboard.request = {
      state: `succeeded`,
      payload: {
        unlockRequests: [],
        users: [],
        userActivity: [
          { id: `2`, userName: `Huck`, numUnreviewed: 11 },
          { id: `3`, userName: `Bob`, numUnreviewed: 33 },
        ],
        userScreenshots: [],
      },
    };

    const next = reducer(
      state.dashboard,
      deleteActivityItems.succeeded(true, {
        userId: `2`,
        itemRootIds: [`1`, `2`],
        date: new Date(),
      }),
    );
    expect(Req.payload(next.request)?.userActivity).toEqual([
      { id: `2`, userName: `Huck`, numUnreviewed: 9 },
      { id: `3`, userName: `Bob`, numUnreviewed: 33 },
    ]);
  });
});