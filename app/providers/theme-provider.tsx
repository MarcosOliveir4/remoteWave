'use client';

import { ThemeProvider } from 'next-themes';

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="winter"
      enableSystem={false}
      storageKey="remote_theme"
    >
      {children}
    </ThemeProvider>
  );
}
