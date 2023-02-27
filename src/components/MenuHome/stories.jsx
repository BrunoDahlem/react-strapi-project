import { MenuHome } from '.';
import { menus } from '../../mock/mock';

export default {
  title: 'Menu',
  component: MenuHome,
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
      <MenuHome {...args} />
    </div>
  );
};
