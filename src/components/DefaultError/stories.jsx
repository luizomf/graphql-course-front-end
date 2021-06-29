import { DefaultError } from '.';

export default {
  title: 'Misc/DefaultError',
  component: DefaultError,
  args: {
    error: new Error('Bad error'),
  },
  argTypes: {
    error: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <DefaultError {...args} />
    </div>
  );
};
