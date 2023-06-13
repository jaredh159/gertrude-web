import React from 'react';
import { ApiErrorMessage, Loading, ActivitySummaries } from '@dash/components';
import { entireDays } from '../../lib/helpers';
import { useQuery, Key } from '../../hooks/query';
import Current from '../../environment';

const CombinedUsersActivitySummariesRoute: React.FC = () => {
  const query = useQuery(Key.combinedUsersActivitySummaries, () =>
    Current.api.combinedUsersActivitySummaries(entireDays(14)),
  );

  if (query.isLoading) {
    return <Loading />;
  }

  if (query.isError) {
    return <ApiErrorMessage error={query.error} />;
  }

  return (
    <ActivitySummaries
      days={query.data
        .filter((day) => day.totalItems > 0)
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .map((day, index) => ({
          date: new Date(day.date),
          numItems: day.totalItems,
          numCompleted: day.numApproved,
          index,
          numDays: query.data.length,
        }))}
    />
  );
};

export default CombinedUsersActivitySummariesRoute;
