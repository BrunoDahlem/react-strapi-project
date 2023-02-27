import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    src: 'assets/images/logo.svg',
    link: '#',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {},
};

export const ImgOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
TextOnly.args = {
  src: '',
};
