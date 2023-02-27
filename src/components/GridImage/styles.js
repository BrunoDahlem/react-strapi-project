import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacing.xhuge} 0 0 0;
    ${TextComponent} {
      margin: 0 0 ${theme.spacing.xhuge} 0;
    }
  `}
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(28rem,1fr));
    gap: ${theme.spacing.small};
    overflow: hidden;
    width: 100%;
    @media ${theme.medias.lteMedium} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    border-radius: 12px;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
      width: 100%;
      height: 100%;
      transition: all 300ms ease-in-out;

      &:hover {
        transform: scale(1.2) rotate(10deg);
      }
  `}
`;
