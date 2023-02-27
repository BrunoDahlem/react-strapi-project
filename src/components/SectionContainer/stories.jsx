import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <section>
        <h1>Test</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum officia
          fugiat mollitia quod non sint vitae rerum numquam, labore optio ipsa
          quae obcaecati. Voluptatibus, molestiae praesentium. Enim impedit
          dolore alias.
        </p>
      </section>
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
      <SectionContainer {...args} />
    </div>
  );
};
