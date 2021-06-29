import { ToggleButton } from '.';

export default {
  title: 'Misc/ToggleButton',
  component: ToggleButton,
  args: {
    description: 'A nice description',
    title: 'The title!',
    state: false,
  },
  argTypes: {},
};

export const Template = (args) => {
  return (
    <div style={{ padding: '3.2rem' }}>
      <ToggleButton {...args} />
    </div>
  );
};
