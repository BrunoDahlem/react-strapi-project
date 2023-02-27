import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as Styled from './styles';

export const GridSection = ({
  title,
  description,
  bg,
  text_grid = [],
  section_id = '',
}) => {
  return (
    <SectionBackground section_id={section_id} bg={bg}>
      <Styled.Container>
        <Heading as="h2" colorDark={!bg}>
          {title}
        </Heading>
        <TextComponent size="small">{description}</TextComponent>
        <Styled.GridContainer>
          {text_grid.map(({ title, description }, index) => (
            <Styled.GridElement key={index}>
              <Heading as="h3" colorDark={!bg} size="medium">
                {title}
              </Heading>
              <TextComponent>{description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.GridContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridSection.propTypes = {
  section_id: P.string.isRequired,
  title: P.string.isRequired,
  description: P.string.isRequired,
  bg: P.bool,
  text_grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
};
