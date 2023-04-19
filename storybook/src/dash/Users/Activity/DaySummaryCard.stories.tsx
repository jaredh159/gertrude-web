import { DaySummaryCard } from '@dash/components';
import type { StoryObj, Meta } from '@storybook/react';
import { props, time } from '../../../story-helpers';

const meta = {
  title: 'Dashboard/Users/Activity/DaySummaryCard', // eslint-disable-line
  component: DaySummaryCard,
} satisfies Meta<typeof DaySummaryCard>;

type Story = StoryObj<typeof meta>;

export const Default: Story = props({
  date: new Date(time.stable()),
  numItems: 36,
  numCompleted: 24,
});

export const Empty: Story = props({
  ...Default.args,
  numItems: 77,
  numCompleted: 0,
});

export const Completed: Story = props({
  ...Default.args,
  numItems: 77,
  numCompleted: 77,
});

export default meta;
