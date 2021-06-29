import { Menu } from '.';

export default {
  title: 'Composed/Menu',
  component: Menu,
  args: {
    loading: false,
    isVisible: false,
    data: {},
  },
  argTypes: {
    handleLogout: { action: 'handleLogout' },
    setIsVisible: { action: 'setIsVisible' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
