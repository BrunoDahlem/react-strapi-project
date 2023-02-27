import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Default } from '.';

describe('<Default/>', () => {
  it('should render', () => {
    renderTheme(<Default>Children</Default>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
