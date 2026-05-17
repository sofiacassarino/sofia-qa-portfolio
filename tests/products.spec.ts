import { expect, test } from "@playwright/test";

test('home page loads correctly', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await expect(page).toHaveTitle(/Practice Software Testing - Toolshop/);
});