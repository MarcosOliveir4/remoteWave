import { render, screen } from '@testing-library/react';
import Home from './page';

describe('<Home />', () => {
  it('should render title', () => {
    render(<Home />);
    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
  });
});
