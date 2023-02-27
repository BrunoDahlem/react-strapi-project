import { GridContent } from '.';
import { content } from '../../mock/mock';

export default {
  title: 'GridContent',
  component: GridContent,
  args: content,
  parameters: {},
};

export const Template = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};
