import styled, { css } from 'styled-components';

const containerBackground = (theme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${({ theme, bg }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    ${bg && containerBackground(theme)}
  `}
`;
