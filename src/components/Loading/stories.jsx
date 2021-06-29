import { Loading } from '.';

export default {
  title: 'Misc/Loading',
  component: Loading,
  args: {
    children: '',
    loading: true,
  },
  argTypes: {
    children: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Loading {...args} />
    </div>
  );
};
