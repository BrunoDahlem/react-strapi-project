import { createGlobalStyle, css } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    scroll-behavior: smooth;
  }
  html {
    font-size: 62.5%; /* para usar rem como pixel */
  }
  body {
    font-family: ${theme.font.family.default};
    font-size: 1.6rem;
  }
  a {
      color: ${theme.colors.secondaryColor};
      text-decoration: none;
    }
`;
