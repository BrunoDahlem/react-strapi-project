import { GridSection } from '.';
import { contentGrid } from '../../mock/mock';

export default {
  title: 'GridSection',
  component: GridSection,
  args: contentGrid,
  parameters: {},
};

export const Template = (args) => {
  return (
    <div>
      <GridSection {...args} />
    </div>
  );
};
