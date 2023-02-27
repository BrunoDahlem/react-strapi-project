import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Test</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum officia
          fugiat mollitia quod non sint vitae rerum numquam, labore optio ipsa
          quae obcaecati. Voluptatibus, molestiae praesentium. Enim impedit
          dolore alias.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: '' },
  },
  parameters: {},
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
