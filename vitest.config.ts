import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      reporter: 'lcov',
      cleanOnRerun: true,
    },
    alias: {
      '@/app/hooks': path.resolve(__dirname, 'app/hooks'),
      '@/app/shared': path.resolve(__dirname, 'app/shared'),
      '@/app/providers': path.resolve(__dirname, 'app/providers'),
      '@/app/utils': path.resolve(__dirname, 'app/utils'),
    },
    watch: false,
    environment: 'happy-dom', // Specify happy-dom as the DOM environment
    setupFiles: ['./vitest-setup.ts'], // Optional: for setting up @testing-library/jest-dom matchers
    globals: true, // Optional: for using globals like 'screen', 'expect', 'vi' without manual imports
  },
});
