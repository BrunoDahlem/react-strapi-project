import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const GridContent = ({
  title,
  contentHtml,
  bg = false,
  section_id = '',
}) => {
  return (
    <SectionBackground bg={bg} section_id={section_id}>
      <Styled.Container>
        <Heading as="h2" uppercase colorDark={!bg}>
          {title}
        </Heading>
        <Styled.TextContainer>
          <TextComponent>{contentHtml}</TextComponent>
        </Styled.TextContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  contentHtml: P.string.isRequired,
  section_id: P.string,
  bg: P.bool,
};
