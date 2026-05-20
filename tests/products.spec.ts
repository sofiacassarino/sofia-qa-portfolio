import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
});

test('products are displayed with name, price, and image', async ({ page }) => {
});

test('sorting works - low to high, high to low', async ({ page }) => {
});

test('sorting works - A to Z, Z to A', async ({ page }) => {
});

test('filter by price range works', async ({ page }) => {
});

test('search bar is visible and functional', async ({ page }) => {
    // check search input is visible
    await expect(page.locator('[data-test="search-query"]')).toBeVisible();
    // type in search box
    await page.locator('[data-test="search-query"]').fill('Hammer');
    // click search button
    await page.locator('[data-test="search-submit"]').click();
    // check results appear
    await expect(page.locator('[data-test="search-caption"]')).toContainText('Searched for: Hammer');
});

test('filter by category works', async ({ page }) => {
});

test('filter by brand works', async ({ page }) => {
});

test('filter by sustainability works', async ({ page }) => {
});

test('clicking a product opens the correct detail page', async ({ page }) => {
});