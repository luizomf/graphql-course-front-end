import { FormTextArea } from '.';

export default {
  title: 'Form/FormTextArea',
  component: FormTextArea,
  args: {
    label: 'FormTextArea label',
    id: 'FormTextArea-id',
    placeholder: 'Type some help text here',
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
  return <FormTextArea {...args} />;
};
