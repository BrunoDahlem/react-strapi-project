import { Menu } from '.';
import { menus } from '../../mock/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: menus,
    logoData: {
      text: 'LogoLink',
      src: 'assets/images/logo.svg',
      link: '#',
    },
  },
  parameters: {},
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
