import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  testDir: './tests', // Where your test files live
  timeout: 30 * 1000, // Max time one test can run before it's marked failed

  expect: {
    timeout: 5000, // Max time expect(locator).toBeVisible() etc. will wait before failing
  },

  // fullyParallel: true, // Run test files in parallel (not individual tests within a describe block
  retries: process.env.CI ? 2 : 0, // Retry failed tests automatically on CI (flaky-test safety net), never locally; so you always see real failures while developing.
  workers: process.env.CI ? 1 : undefined, // Limit parallel workers on CI (shared runners are often resource constrained); let it use full parallelism locally.

  reporter: [ // Console output locally, HTML report always generated for review
    ['list'],
    ['html', { open: 'never' }],
  ],

  use: {
    baseURL: 'https://practicesoftwaretesting.com',
    trace: 'on-first-retry', // Keep a trace ONLY for failed tests that are retried
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  // projects: [  // Run the same suite across multiple browsers
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'] },
  //   },
  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'] },
  //   },
  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] },
  //   },
  // ],
});