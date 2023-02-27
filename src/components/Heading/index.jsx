import P from 'prop-types';
import * as styled from './styles';

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'large',
  uppercase = false,
}) => {
  return (
    <styled.Container
      colorDark={colorDark}
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </styled.Container>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: P.oneOf([
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
    'huge',
    'xhuge',
  ]),
  uppercase: P.bool,
};
