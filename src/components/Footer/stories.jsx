import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    footerHtml: `<p><a href="https://lp.brunodahlem.com.br">Developed by Bruno Dahlem </a></p>`,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {},
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
