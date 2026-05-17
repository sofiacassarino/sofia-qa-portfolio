import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/'); // go

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click(); // do 

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible(); // verify
});

// example with login test on demo website https://www.saucedemo.com

// import { test, expect } from '@playwright/test';

// test('login page loads correctly', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com');
//   await expect(page).toHaveTitle(/Swag Labs/);
// });

// test('login with valid credentials', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com');
//   await page.fill('[data-test="username"]', 'standard_user');
//   await page.fill('[data-test="password"]', 'secret_sauce');
//   await page.click('[data-test="login-button"]');
//   await expect(page).toHaveURL(/inventory/);
// });

// test('login with wrong password shows error', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com');
//   await page.fill('[data-test="username"]', 'standard_user');
//   await page.fill('[data-test="password"]', 'wrongpassword');
//   await page.click('[data-test="login-button"]');
//   await expect(page.locator('[data-test="error"]')).toBeVisible();
// });
