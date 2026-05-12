import { test, expect } from '@playwright/test';

test('login page loads correctly', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('login with valid credentials', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  await expect(page).toHaveURL(/inventory/);
});

test('login with wrong password shows error', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'wrongpassword');
  await page.click('[data-test="login-button"]');
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

// test('login with valid credentials', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.fill('[data-v-957b4417="username"]', 'Admin');
//   await page.fill('[data-v-957b4417="password"]', 'admin13');
//   await page.click('[data-v-10d463b7="login-button"]');
//   await expect(page).toHaveURL(/dashboard/);
// });