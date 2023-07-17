import { ListComputers } from '@dash/components';
import type { StoryObj, Meta } from '@storybook/react';
import { props } from '../../story-helpers';
import { withStatefulChrome } from '../../decorators/StatefulChrome';

const meta = {
  title: 'Dashboard/Computers/ListComputers', // eslint-disable-line
  component: ListComputers,
  parameters: { layout: `fullscreen` },
  decorators: [withStatefulChrome],
} satisfies Meta<typeof ListComputers>;

type Story = StoryObj<typeof meta>;

export const Empty: Story = props({
  devices: [],
});

export const WithOne: Story = props({
  devices: [
    {
      id: `device-1`,
      name: `Silvery`,
      modelIdentifier: `Mac14,10`,
      modelTitle: `16" MacBook Pro (2023)`,
      users: [{ name: `John Doe`, isOnline: true, id: `123` }],
    },
  ],
});

// @screenshot: xs,md
export const WithMany: Story = props({
  devices: [
    {
      id: `device-1`,
      name: `Silvery`,
      modelIdentifier: `Mac14,10`,
      modelTitle: `16" MacBook Pro (2023)`,
      users: [{ name: `John Doe`, isOnline: true, id: `123` }],
    },
    {
      id: `device-2`,
      name: `Blacky`,
      modelIdentifier: `MacPro6,1`,
      modelTitle: `Mac Pro (2013)`,
      users: [{ name: `John Doe`, isOnline: true, id: `123` }],
    },
    {
      id: `device-3`,
      modelIdentifier: `Mac14,15`,
      modelTitle: `15" MacBook Air (2023)`,
      users: [{ name: `John Doe`, isOnline: true, id: `123` }],
    },
    {
      id: `device-4`,
      name: `Spacey`,
      modelIdentifier: `Mac14,13`,
      modelTitle: `Mac Studio (2023)`,
      users: [{ name: `John Doe`, isOnline: true, id: `123` }],
    },
  ],
});

export default meta;
