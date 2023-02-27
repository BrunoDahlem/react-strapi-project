import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus rerum aspernatur nostrum illo consequuntur expedita! Illum, qui laboriosam. Perspiciatis illum enim dolorum. Eos dolor, ad ab repellendus laborum voluptatum error!`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {},
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
