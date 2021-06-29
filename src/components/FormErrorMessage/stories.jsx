import { FormErrorMessage } from '.';

export default {
  title: 'Misc/FormErrorMessage',
  component: FormErrorMessage,
  args: {
    children: 'FormErrorMessage',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <FormErrorMessage {...args} />
    </div>
  );
};
