import { Post } from '.';

export default {
  title: 'Composed/Post',
  component: Post,
  args: {
    id: '123',
    title: 'A nice post',
    body: 'The post body!',
    user: {
      id: '321',
      firstName: 'John',
      lastName: 'Doe',
      userName: 'john-doe',
      createdAt: new Date().toISOString(),
    },
    comments: [],
    createdAt: new Date().toISOString(),
    loggedUserId: '321',
    loading: false,
    error: undefined,
    ref: null,
  },
  argTypes: {
    user: { type: '' },
    comments: { type: '' },
    error: { type: '' },
    ref: { type: '' },
    handleDelete: { action: 'handleDelete' },
    handleEdit: { action: 'handleEdit' },
    createdAt: { type: 'date' },
  },
};

export const Template = (args) => {
  return <Post {...args} />;
};
