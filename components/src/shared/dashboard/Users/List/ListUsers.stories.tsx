import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withStatefulChrome } from '../../../../decorators/StatefulChrome';
import UsersScreen from './ListUsers';

export default {
  title: `Dashboard/Users/List`,
  component: UsersScreen,
  parameters: { layout: `fullscreen` },
  decorators: [withStatefulChrome],
} as ComponentMeta<typeof UsersScreen>;

const Template: ComponentStory<typeof UsersScreen> = (args) => <UsersScreen {...args} />;

export const Empty = Template.bind({});
Empty.args = { users: [] };

export const Default = Template.bind({});
Default.args = {
  users: [
    {
      id: `user-4`,
      name: `Lil Suzy`,
      numKeys: 33,
      numKeychains: 55,
      screenshotsEnabled: true,
      keystrokesEnabled: true,
      devices: [],
    },
    {
      id: `user-1`,
      name: `John Doe`,
      numKeys: 33,
      numKeychains: 55,
      screenshotsEnabled: true,
      keystrokesEnabled: true,
      devices: [
        {
          id: `device-1`,
          icon: `laptop`,
          model: `14" Macbook Pro`,
          status: `online`,
        },
      ],
    },
    {
      id: `user-2`,
      name: `Jane Doe`,
      numKeys: 55,
      numKeychains: 2,
      screenshotsEnabled: false,
      keystrokesEnabled: false,
      devices: [
        {
          id: `device-2`,
          icon: `laptop`,
          model: `14" Macbook Pro`,
          status: `online`,
        },
        {
          id: `device-3`,
          icon: `desktop`,
          model: `Mac Studio`,
          status: `offline`,
        },
      ],
    },
  ],
};