import { PostForm } from '.';

export default {
  title: 'Composed/PostForm',
  component: PostForm,
  args: {
    handleSubmit: (e) => e.preventDefault(),
    post: {
      id: '123',
      title: 'Post title',
      body: 'Post body',
      user: {
        id: 321,
        firstName: 'John',
        lastName: 'Doe',
        userName: 'JohnDoe',
        createdAt: new Date().toISOString(),
      },
      createdAt: new Date().toISOString(),
    },
    formError: '',
    somethingLoading: false,
  },
  argTypes: {
    handleSubmit: { action: 'submit' },
    post: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <PostForm {...args} />
    </div>
  );
};
