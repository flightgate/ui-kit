import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',
      reporter: ['text'],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 70,
        lines: 70,
      },
      include: ['src/**/*.spec.ts'],
    },
  },
});
