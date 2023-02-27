import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'GridTwoColumn',
    text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad porro magnam sed eum rerum, aspernatur nam quia tempora possimus? Magnam corrupti doloribus iusto eaque unde excepturi officia magni hic? Nulla!`,
    srcTmg: 'assets/images/javascript.svg',
  },
  argTypes: {
    title: { type: 'string' },
    text: { type: 'string' },
    srcTmg: { type: 'string' },
  },
  parameters: {},
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />
    </div>
  );
};
