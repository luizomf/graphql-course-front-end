import { Face, Password, Person } from '@styled-icons/material-outlined';
import { FormInput } from '.';

export default {
  title: 'Form/FormInput',
  component: FormInput,
  args: {
    label: 'FormInput label',
    id: 'FormInput-id',
    placeholder: 'Type some help text here',
    icon: <Face />,
    textValue: 'The value from user',
  },
  argTypes: {
    icon: { type: '' },
    changeFn: {
      action: 'typing',
    },
  },
  decorators: [
    (S) => (
      <div style={{ padding: '3.2rem', maxWidth: '40rem' }}>
        <S />
      </div>
    ),
  ],
};

export const Template = (args) => {
  return <FormInput {...args} />;
};

export const NoIcon = (args) => {
  return <FormInput {...args} icon={''} />;
};

export const Siblings = (args) => {
  return (
    <>
      <FormInput
        {...args}
        icon={<Person />}
        label={'First one'}
        id={'first-one'}
      />
      <FormInput
        {...args}
        icon={<Password />}
        label={'Second one'}
        id={'second-one'}
        type={'password'}
      />
      <FormInput {...args} icon={''} label={'Third one'} id={'third-one'} />
    </>
  );
};
