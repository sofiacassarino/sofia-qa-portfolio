import { expect, test } from "@playwright/test";
import { LoginPage } from '../pages/LoginPage';

test('home page loads correctly', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await expect(page).toHaveTitle(/Practice Software Testing - Toolshop/);
});

test('login with valid credentials', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('itsatest2000@gmail.com', 'Miciomiao2000!');
    await expect(page).toHaveURL(/account/);
});