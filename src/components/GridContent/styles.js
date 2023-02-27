import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    max-width: 58rem;
    margin: 0 auto;
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing.xhuge} 0;
    h1,h2,h3,h4,h5,h6 {
      margin: ${theme.spacing.medium} 0;
    }
    p {
      margin: ${theme.spacing.medium} 0;
    }
    ul,ol {
      padding: ${theme.spacing.medium} 0;
    }
  `}
`;
