import { Heading } from '.';

export default {
  title: 'Misc/Heading',
  component: Heading,
  args: {
    children: 'Heading',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ padding: '3.2rem' }}>
      <Heading {...args} />
    </div>
  );
};
