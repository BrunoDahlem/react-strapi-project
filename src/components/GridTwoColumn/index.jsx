import P from 'prop-types';
import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridTwoColumn = ({
  title,
  text,
  src,
  bg = false,
  section_id = '',
}) => {
  return (
    <SectionBackground section_id={section_id} bg={bg}>
      <Styled.Container bg={bg}>
        <Styled.TextContainer>
          <Heading as="h2" uppercase colorDark={!bg}>
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.TextContainer>
        <Styled.ImageContainer>
          <Styled.Image src={src} alt={title} />
        </Styled.ImageContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  section_id: P.string.isRequired,
  title: P.string.isRequired,
  text: P.string.isRequired,
  src: P.string.isRequired,
  bg: P.bool,
};
