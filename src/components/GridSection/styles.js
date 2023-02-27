import styled, { css } from 'styled-components';
import { Container as Heading } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacing.xhuge};
    ${TextComponent} {
      margin: 0 0 ${theme.spacing.xhuge} 0;
    }
  `}
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    gap: ${theme.spacing.large};
    overflow: hidden;
    width: 100%;
    @media ${theme.medias.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${Heading} {
      display: flex;
      align-items:center;
    }

    ${Heading}::before {
      counter-increment: grid-counter;
      content: counter(grid-counter);
      font-size: ${theme.font.sizes.xhuge};
      padding: 0 ${theme.font.sizes.small} 0 0;
      font-family: ${theme.font.family.montserrat};
      transform: rotate(10deg);
    }
  `}
`;
