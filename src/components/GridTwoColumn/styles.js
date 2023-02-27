import styled, { css } from 'styled-components';
import { Container as Heading } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme, bg }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    gap: ${theme.spacing.large};
    ${Heading} {
      margin-bottom: ${theme.spacing.large} ;
    }
    @media ${theme.medias.lteMedium} {
      grid-template-columns: 1fr;
      text-align: center;
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    @media ${theme.medias.lteMedium} {
      margin-bottom: ${theme.spacing.xlarge} ;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css``}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
  `}
`;
