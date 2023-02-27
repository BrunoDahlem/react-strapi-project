import { NavLinks } from '.';
import { menus } from '../../mock/mock';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: menus,
  },
  argTypes: {
    links: { type: '' },
  },
  parameters: {},
};

export const Template = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
