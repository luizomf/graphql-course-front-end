import { DefaultContainer } from '.';

export default {
  title: 'Misc/DefaultContainer',
  component: DefaultContainer,
  args: {
    children: 'DefaultContainer',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <DefaultContainer {...args} />
    </div>
  );
};
