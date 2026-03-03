import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    watch: false,
    environment: 'happy-dom', // Specify happy-dom as the DOM environment
    setupFiles: ['./vitest-setup.ts'], // Optional: for setting up @testing-library/jest-dom matchers
    globals: true, // Optional: for using globals like 'screen', 'expect', 'vi' without manual imports
  },
});
