import { defineConfig, devices } from '@playwright/test';

const hostedBaseURL = process.env.PLAYWRIGHT_BASE_URL?.replace(/\/$/, '');
const baseURL = hostedBaseURL ?? 'http://localhost:3000';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  fullyParallel: false,
  reporter: 'line',
  use: {
    baseURL,
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 1000 } } },
    { name: 'mobile', use: { ...devices['iPhone 13'] } },
  ],
  webServer: hostedBaseURL
    ? undefined
    : {
        command: 'npm run dev -- --port 3000',
        url: 'http://localhost:3000',
        reuseExistingServer: true,
        timeout: 120_000,
      },
});
