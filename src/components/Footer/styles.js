import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../SectionContainer/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    & ${SectionContainer} {
      text-align: center;
      border-top: 0.1rem solid ${theme.colors.mediumGray};
    }
    a {
      color: inherit;
      text-decoration: none;
      font-size: inherit;
    }
  `}
`;
