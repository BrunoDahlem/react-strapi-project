import { GridImage } from '.';
import { imageGrid } from '../../mock/mock';

export default {
  title: 'GridImage',
  component: GridImage,
  args: imageGrid,
  parameters: {},
};

export const Template = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
