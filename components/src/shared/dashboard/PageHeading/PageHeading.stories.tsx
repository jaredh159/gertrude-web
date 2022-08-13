import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageHeading from './PageHeading';

export default {
  title: `PageHeading`,
  component: PageHeading,
} as ComponentMeta<typeof PageHeading>;

const Template: ComponentStory<typeof PageHeading> = (args) => <PageHeading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: `Profile`,
  icon: `user`,
};