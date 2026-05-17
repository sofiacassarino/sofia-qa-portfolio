import { expect, test } from "@playwright/test";

test('homepage loads with key elements', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  // check page tab title
  await expect(page).toHaveTitle(/Practice Software Testing - Toolshop/);
  // check logo
  await expect(page.locator('.navbar-brand')).toBeVisible();
  // check banner
  await expect(page.getByAltText('Banner')).toBeVisible();  
  // check nav menu
  await expect(page.locator('#navbarSupportedContent')).toBeVisible();
});

test('at least 9 products are displayed', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  await expect(page.locator('.card')).toHaveCount(9);
});

test('search bar is visible and functional', async ({ page }) => {
    // await for the page to go to 
    await page.goto('https://practicesoftwaretesting.com/');
    // check search input is visible
    await expect(page.locator('[data-test="search-query"]')).toBeVisible();
    // type in search box
    await page.locator('[data-test="search-query"]').fill('Hammer');
    // click search button
    await page.locator('[data-test="search-submit"]').click();
    // check results appear
    await expect(page.locator('[data-test="search-caption"]')).toContainText('Searched for: Hammer');
});