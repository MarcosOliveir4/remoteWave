import { Providers } from '@/app/providers/theme-provider';
import { render } from '@testing-library/react';
import React from 'react';

export function renderWithProviders(ui: React.ReactElement) {
  return render(<Providers>{ui}</Providers>);
}
