import { expect, test } from "@playwright/test"

test('home page loads correctly', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await expect(page).toHaveTitle(/Practice Software Testing - Toolshop/);
});

test('navigate to sign in page and login with valid credentials', async ({page}) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.locator('[data-test="nav-sign-in"]').click();
    await expect(page).toHaveURL(/auth\/login/); //The / character has special meaning inside a regex — you need \/ to use it literally. 
    await page.fill('[data-test="email"]', 'itsatest2000@gmail.com');
    await page.fill('[data-test="password"]', 'Miciomiao2000!');
    await page.locator('[data-test="login-submit"]').click();
    await expect(page).toHaveURL(/account/);
});