import P from 'prop-types';
import * as Styled from './styles';

export const TextComponent = ({ children = '', size = 'medium' }) => {
  return (
    <Styled.Container
      size={size}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
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
};
