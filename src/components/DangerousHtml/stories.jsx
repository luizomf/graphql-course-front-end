import { DangerousHtml } from '.';
import { dummyHtml } from './dummy-html';

export default {
  title: 'Misc/DangerousHtml',
  component: DangerousHtml,
  args: {
    html: dummyHtml,
  },
};

export const Template = (args) => {
  return (
    <div style={{ maxWidth: '96rem', padding: '3.2rem' }}>
      <DangerousHtml {...args} />
    </div>
  );
};
