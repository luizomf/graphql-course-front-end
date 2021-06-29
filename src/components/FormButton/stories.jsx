import {
  AddCircleOutline,
  Face,
  Favorite,
  Fingerprint,
} from '@styled-icons/material-outlined';
import { FormButton } from '.';

export default {
  title: 'Form/FormButton',
  component: FormButton,
  args: {
    children: 'Generic text',
  },
  decorators: [
    (Story) => {
      return (
        <div style={{ padding: '3.2rem' }}>
          <Story />
        </div>
      );
    },
  ],
  argTypes: {
    children: {
      type: 'string',
    },
    clickedFn: {
      action: 'clicked',
    },
    icon: {
      type: null,
    },
  },
};

export const Defaults = (args) => {
  return <FormButton {...args} />;
};

export const SecondaryColor = (args) => {
  return <FormButton {...args} />;
};

SecondaryColor.args = {
  children: 'I also wanted to add a bigger text',
  bgColor: 'secondary',
  icon: <Favorite />,
  disabled: false,
};

export const Disabled = (args) => {
  return <FormButton {...args} />;
};

Disabled.args = {
  children: 'It must be gray and disabled',
  bgColor: 'secondary',
  icon: <Fingerprint />,
  disabled: true,
};

export const AnotherIcon = (args) => {
  return <FormButton {...args} />;
};

AnotherIcon.args = {
  children: 'Meh!',
  bgColor: 'primary',
  icon: <Face />,
  disabled: false,
};

export const SetOfFormButtons = () => {
  return (
    <div style={{ display: 'flex', flexFlow: 'row wrap', gap: '3rem' }}>
      <FormButton outlined={false}>
        <AddCircleOutline /> FormButton 1
      </FormButton>
      <FormButton outlined={true}>
        <Face /> The FormButton 2
      </FormButton>
      <FormButton outlined={false} disabled>
        <Fingerprint /> Don not click me
      </FormButton>
      <FormButton outlined={true} iconOnly={true}>
        <Favorite />
      </FormButton>
      <FormButton outlined={false} iconOnly={true}>
        <AddCircleOutline />
      </FormButton>
      <FormButton>No icon</FormButton>
    </div>
  );
};

SetOfFormButtons.argTypes = {
  children: null,
  bgColor: null,
  icon: null,
  disabled: null,
};
