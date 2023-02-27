import P from 'prop-types';
import * as Styled from './styles';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { SectionContainer } from '../SectionContainer';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { useState } from 'react';

export const Menu = ({ links = [], logoData, slug = '' }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Buttom
        aria-label="Open/Close Menu"
        onClick={() => setVisible((v) => !v)}
      >
        {visible ? (
          <CloseIcon aria-label="Close Menu" />
        ) : (
          <MenuIcon aria-label="Open Menu" />
        )}
      </Styled.Buttom>
      <Styled.Container visible={visible}>
        <SectionContainer>
          <Styled.MenuContainer onClick={() => setVisible(false)}>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
  slug: P.string,
};
