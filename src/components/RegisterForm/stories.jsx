import { RegisterForm } from '.';

export default {
  title: 'Composed/RegisterForm',
  component: RegisterForm,
  args: {
    userLoadedData: {
      id: '321',
      firstName: 'John',
      lastName: 'Doe',
      userName: 'john-doe',
      createdAt: new Date().toISOString(),
    },
    handleSubmit: (e) => e.preventDefault(),
    somethingLoading: false,
    formError: '',
  },
  argTypes: {
    userLoadedData: { type: '' },
  },
};

export const Update = (args) => {
  return (
    <div>
      <RegisterForm {...args} />
    </div>
  );
};

export const Register = (args) => {
  return (
    <div>
      <RegisterForm {...args} />
    </div>
  );
};

Register.args = {
  userLoadedData: {},
};
