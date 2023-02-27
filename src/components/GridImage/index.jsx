import P from 'prop-types';
import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';

import * as Styled from './styles';

export const GridImage = ({
  title,
  bg,
  description,
  image_grid = [],
  section_id = '',
}) => {
  return (
    <SectionBackground bg={bg} section_id={section_id}>
      <Styled.Container>
        <Heading as="h2" size="huge" uppercase colorDark={!bg}>
          {title}
        </Heading>
        <TextComponent size="small">{description}</TextComponent>
        <Styled.GridContainer>
          {image_grid.map((image, index) => {
            const {
              attributes: { url: src, alternativeText },
            } = image;
            return (
              <Styled.GridElement key={index}>
                <Styled.Image src={src} alt={alternativeText} />
              </Styled.GridElement>
            );
          })}
        </Styled.GridContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  section_id: P.string,
  bg: P.bool,
  image_grid: P.array.isRequired,
};
