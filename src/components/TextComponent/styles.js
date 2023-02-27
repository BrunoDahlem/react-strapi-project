import styled, { css } from 'styled-components';
import { sizes } from '../../styles/sizes';

export const Container = styled.div`
${({ theme, size }) => css`
  font-size: ${sizes[size](theme)};
  font-family: ${theme.font.family.openSans};
`}
`;
