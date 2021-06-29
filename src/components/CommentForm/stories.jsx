import { CommentForm } from '.';

export default {
  title: 'Composed/CommentForm',
  component: CommentForm,
  args: {
    loading: false,
    handleSubmit: (e) => e.preventDefault(),
    comment: 'The comment',
    buttonDisabled: false,
  },
  argTypes: {
    handleSubmit: {
      action: 'formSent',
    },
    setComment: {
      action: 'setComment',
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <CommentForm {...args} />
    </div>
  );
};
