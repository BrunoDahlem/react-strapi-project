import styled, { css, keyframes } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Container as Heading } from '../Heading/styles';
import { Container as NavLinks } from '../NavLinks/styles';
import { Container as SectionBackground } from '../SectionBackground/styles';

export const Container = styled.div`
  ${({ theme }) => css`
      height: 100vh;
      width: 100%;
      border-bottom: 0.1rem solid ${theme.colors.mediumGray};
      transition: all 300ms ease-in-out;
      background: ${theme.colors.white};
    ${SectionBackground} {
      align-items: flex-start;
    }
    ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0;
    }
    ${Heading} {
      margin-top:0;
      margin-bottom:0;
      display: flex;
      justify-content: center;
    }
    ${NavLinks} {
      display: grid;
      grid-template-columns:repeat(auto-fill, minmax(10rem,1fr));
      gap: ${theme.spacing.xxsmall};

    @media ${theme.medias.lteMedium} {
      height: 100vh;

      ${SectionContainer} {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        align-items: center;
        overflow: auto;
      }
      ${Heading} {
      padding-bottom:${theme.spacing.small};
    }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`

  `}
`;
