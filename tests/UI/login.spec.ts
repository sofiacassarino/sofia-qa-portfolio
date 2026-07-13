import { expect, test } from "@playwright/test";
import { LoginPage } from '../../pages/LoginPage';

test('login with valid credentials', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.TEST_USER_EMAIL!, process.env.TEST_USER_PASSWORD!);    
    await expect(page).toHaveURL(/account/);
});

test('login with invalid credentials shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('wrong@email.com', 'wrongpassword');
  await expect(page.locator('[data-test="login-error"]')).toBeVisible();
});