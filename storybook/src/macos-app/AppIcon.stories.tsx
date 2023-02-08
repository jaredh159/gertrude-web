import type { ComponentStory, ComponentMeta } from '@storybook/react';
import AppIcon from './AppIcon';

export default {
  title: 'MacOSApp/AppIcon', // eslint-disable-line
  component: AppIcon,
  parameters: {
    layout: `centered`,
  },
} as ComponentMeta<typeof AppIcon>;

const Template: ComponentStory<typeof AppIcon> = (args) => <AppIcon {...args} />;

export const Default = Template.bind({});