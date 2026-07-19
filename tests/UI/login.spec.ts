import { test, expect } from '../../fixtures/pages.fixture';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto();
});

test('login with valid credentials', async ({ page, loginPage }) => {
await loginPage.login(
  process.env.TEST_USER_EMAIL!,
  process.env.TEST_USER_PASSWORD!
);
  await expect(page).toHaveURL(/account/);
});

test('login with invalid credentials shows error', async ({ loginPage }) => {
  await loginPage.login('wrong@email.com', 'wrongpassword');
  await expect(loginPage.loginError).toBeVisible();
});