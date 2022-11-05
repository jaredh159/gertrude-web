import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GradientIcon, GRADIENT_ICONS } from '@dash/components';

const GradientGrid: React.FC<{ size: 'small' | 'medium' | 'large'; subtle: boolean }> = ({
  size,
  subtle,
}) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
    {GRADIENT_ICONS.map((icon) => (
      <div
        key={icon}
        className="flex flex-col bg-gray-100/40 px-4 py-8 items-center rounded-xl"
      >
        <GradientIcon icon={icon} size={size} key={icon} subtle={subtle} />
        <h2 className="text-xs whitespace-nowrap mt-2 font-mono text-gray-400 text-center">
          {icon}
        </h2>
      </div>
    ))}
  </div>
);

const Template: ComponentStory<typeof GradientGrid> = (args) => (
  <GradientGrid {...args} />
);

export const Grid = Template.bind({});
Grid.args = {
  size: `large`,
  subtle: false,
};

export default {
  title: `Dashboard/Core/GradientIcon`,
  component: GradientGrid,
  argTypes: {
    size: {
      options: [`small`, `medium`, `large`],
      control: `radio`,
    },
  },
} as ComponentMeta<typeof GradientGrid>;