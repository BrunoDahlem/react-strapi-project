import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';
import { Container as Heading } from '../Heading/styles';

const menuVisible = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 0.1rem solid ${theme.colors.mediumGray};
    transition: all 300ms ease-in-out;
    background: ${theme.colors.white};
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
    @media ${theme.medias.lteMedium} {
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${visible && menuVisible(theme)}

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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media ${theme.medias.lteMedium} {
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  `}
`;
export const Buttom = styled.button`
  ${({ theme }) => css`
    position: fixed;
    z-index: 6;
    top:2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border-radius: 1.2rem;
    display: none;
    border: 0.1rem solid ${theme.colors.white};
    box-shadow: 0 0 10px 0px ${theme.colors.white};

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
    @media ${theme.medias.lteMedium} {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`;
