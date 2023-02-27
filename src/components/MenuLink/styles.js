import styled, { css } from 'styled-components';

export const Container = styled.a`
${({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${theme.font.sizes.small};
  text-decoration: none;
  padding: ${theme.spacing.small};
  color: ${theme.colors.primaryColor};

  @media ${theme.medias.lteMedium} {
    font-size: ${theme.font.sizes.medium};
  }
  &::after {
    content: '';
    width: 0;
    height: 0.2rem;
    background: linear-gradient(to left, ${theme.colors.secondaryColor}, ${theme.colors.primaryColor});
    transition: all 300ms ease-in-out;
    margin: ${theme.spacing.xsmall} 0 0 0;
    align-self: flex-start;
    }
  ::before {
    content: '';
    align-self: flex-end;
    width: 0;
    height: 0.2rem;
    background: linear-gradient(to left, ${theme.colors.secondaryColor}, ${theme.colors.primaryColor});
    transition: all 300ms ease-in-out;
    margin: 0 0 ${theme.spacing.xsmall} 0;
  }
  :hover::before, :hover::after {
    width: 100%;
  }
`}
`;
