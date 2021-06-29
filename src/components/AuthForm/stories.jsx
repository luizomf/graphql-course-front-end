import { AuthForm } from '.';

export default {
  title: 'Composed/AuthForm',
  component: AuthForm,
  args: {
    children: 'AuthForm',
  },
  argTypes: {
    setUserName: {
      action: 'setUserName',
    },
    setPassword: {
      action: 'setUserName',
    },
    handleSubmit: {
      action: 'setUserName',
    },
  },
  parameters: {
    backgrounds: {
      default: 'gray',
    },
  },
};

export const Template = (args) => {
  return <AuthForm {...args} />;
};
