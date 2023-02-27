import P from 'prop-types';
import * as Styled from './styles';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { SectionContainer } from '../SectionContainer';
import { SectionBackground } from '../SectionBackground';

export const MenuHome = ({ links = [], logoData, slug = '', bg = false }) => {
  return (
    <>
      <Styled.Container>
        <SectionBackground bg={bg}>
          <SectionContainer>
            <Styled.MenuContainer>
              <LogoLink {...logoData} />
              <NavLinks links={links} />
            </Styled.MenuContainer>
          </SectionContainer>
        </SectionBackground>
      </Styled.Container>
    </>
  );
};

MenuHome.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
  slug: P.string,
  bg: P.bool,
};
