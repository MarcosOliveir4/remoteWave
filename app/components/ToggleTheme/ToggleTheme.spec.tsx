import { Theme } from '@/app/shared/model';
import { renderWithProviders } from '@/app/utils/test';
import { screen } from '@testing-library/react';
import { ToggleTheme } from './ToggleTheme';

describe('<ToggleTheme />', () => {
  it('should render toggle button', () => {
    renderWithProviders(<ToggleTheme />);
    expect(screen.getByTestId('toggle-button')).toBeInTheDocument();
  });

  it.each([
    { theme: Theme.dark, icon: 'toggle-icon-sun' },
    { theme: Theme.light, icon: 'toggle-icon-moon' },
  ])('should render icon theme $theme', ({ theme, icon }) => {
    localStorage.setItem('remote_theme', theme);
    renderWithProviders(<ToggleTheme />);
    expect(screen.getByTestId(icon)).toBeInTheDocument();
  });
});
