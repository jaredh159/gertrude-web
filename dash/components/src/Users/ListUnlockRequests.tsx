import React from 'react';
import cx from 'classnames';
import { newestFirst } from '@dash/utils';
import { posessive } from '@shared/string';
import type { Subcomponents } from '@dash/types';
import UnlockRequestCard from '../UnlockRequestCard';
import PageHeading from '../PageHeading';
import EmptyState from '../EmptyState';

type Props = {
  userName?: string;
  requests: Subcomponents<typeof UnlockRequestCard>;
};

const ListUnlockRequests: React.FC<Props> = ({ requests, userName }) => (
  <div className="flex flex-col space-y-6">
    <PageHeading icon="unlock">
      {userName ? `${posessive(userName)} unlock requests` : `Unlock requests`}
    </PageHeading>
    {requests.length > 0 ? (
      <div className={cx(requests.length > 1 && `grid gap-5 grid-cols-1 lg:grid-cols-2`)}>
        {requests
          .sort((a, b) =>
            a.status === `pending` && b.status !== `pending` ? -1 : newestFirst(a, b),
          )
          .map((request) => (
            <UnlockRequestCard key={request.id} {...request} />
          ))}
      </div>
    ) : (
      <EmptyState
        heading="No unlock requests for this child"
        secondaryText="This child has not submitted any unlock requests."
        icon="unlock"
        buttonText="Back to dashboard"
        buttonIcon="arrow-left"
        action="/"
      />
    )}
  </div>
);

export default ListUnlockRequests;
