import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuHome } from '.';

describe('<Menu/>', () => {
  it('should render', () => {
    renderTheme(<MenuHome>Children</MenuHome>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
