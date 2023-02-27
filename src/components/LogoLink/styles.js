import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    padding: ${theme.spacing.xsmall} 0;

    @media ${theme.medias.lteMedium} {
      font-size: ${theme.font.sizes.medium};
    }
    > img {
      max-height: 7rem;
    }
  `}
`;
