import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles';

export const SectionBackground = ({
  children,
  bg = false,
  section_id = '',
}) => {
  return (
    <Styled.Container bg={bg} id={section_id}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  bg: P.bool,
  section_id: P.string,
};
