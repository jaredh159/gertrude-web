import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectMenu from './SelectMenu';

export default {
  title: `Dashboard/Core/SelectMenu`,
  component: SelectMenu,
} as ComponentMeta<typeof SelectMenu>;

const Template: ComponentStory<typeof SelectMenu> = (args) => <SelectMenu {...args} />;

export const Default = Template.bind({});

Default.args = {
  options: [`Do this`, `Do that`, `Do the other thing`],
  selectedOption: `Do this`,
};