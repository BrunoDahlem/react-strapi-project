import styled, { css } from 'styled-components';
import { sizes } from '../../styles/sizes';

const hCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Container = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    font-size: ${sizes[size](theme)};
    ${hCase(uppercase)}
    ${
      size == 'huge'
        ? css`
      @media ${theme.medias.lteMedium} {
        font-size: ${theme.font.sizes.xlarge};
      }
    `
        : ''
    }
  `}
`;
