import P from 'prop-types';
import { Heading } from '../Heading';
import * as Styled from './styles';

export const LogoLink = ({ text, src = '', link }) => {
  return (
    <Heading as="h1" size="small" uppercase>
      <Styled.Container href={link}>
        {!!src && <img src={src} alt={text} />}
        {!src && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  src: P.string,
  link: P.string.isRequired,
};
