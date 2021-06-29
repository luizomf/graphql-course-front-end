import { Comment } from '.';

export default {
  title: 'Composed/Comment',
  component: Comment,
  args: {
    id: 123,
    comment: 'Nice comment',
    user: {
      id: 321,
      firstName: 'John',
      lastName: 'Doe',
      userName: 'JohnDoe',
      createdAt: new Date().toISOString(),
    },
    createdAt: new Date().toISOString(),
  },
  argTypes: {
    createdAt: {
      type: '',
    },
    user: {
      type: '',
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Comment {...args} />
    </div>
  );
};
