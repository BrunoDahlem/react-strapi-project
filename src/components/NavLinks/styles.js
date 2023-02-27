import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;

    @media ${theme.medias.lteMedium} {
      flex-flow: column nowrap;
      align-items: center;
    }
  `}
`;
