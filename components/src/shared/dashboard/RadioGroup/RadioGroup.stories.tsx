import { ComponentStory, ComponentMeta } from '@storybook/react';
import RadioGroup from './RadioGroup';

export default {
  title: `Dashboard/Core/RadioGroup`,
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { display: `Option 1`, value: `option1` },
    { display: `Option 2`, value: `option2` },
  ],
  selectedOption: `option1`,
};
