import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
});

test('homepage loads with key elements', async ({ page }) => {
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
  await expect(page.locator('.card')).toHaveCount(9);
});

test('nav menu redirects to the correct pages', async ({page}) => {
    // click on home button
    await page.locator('[data-test="nav-home"]').click();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/');
    // click on contact button 
    await page.locator('[data-test="nav-contact"]').click();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/contact');
    await expect(page).toHaveTitle(/Contact Us - Practice Software Testing/);
    // click on sign up button
    await page.locator('[data-test="nav-sign-in"]').click();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
    // click on categories dropdown menu
    await page.locator('[data-test="nav-categories"]').click();
    await expect(page.locator('[data-test="nav-hand-tools"]')).toBeVisible();
    await page.locator('[data-test="nav-hand-tools"]').click();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/category/hand-tools');
    // click on language button
    await page.locator('[data-test="language-select"]').click();
    await expect(page.locator('[data-test="lang-de"]')).toBeVisible();
});

[
  { name: 'EN', expected: 'Home' }, // Each object has two properties: name (the language code) and expected (the translated word you expect to see)
  { name: 'DE', expected: 'Start' },
  { name: 'ES', expected: 'Inicio' },
  { name: 'FR', expected: 'Accueil' },
  { name: 'NL', expected: 'Home' },
  { name: 'TR', expected: 'Anasayfa' },
].forEach(({ name, expected }) => { // forEach function collect name and expected from each object and passes them on into the test
  test(`switch language translate the whole page into the selected lang ${name}`, async ({ page }) => {
    await page.locator('[data-test="language-select"]').click();
    await page.locator(`[data-test="lang-${name.toLowerCase()}"]`).click(); //name.toLowerCase() turns 'DE' into 'de' to match the selector lang-de
    await expect(page.locator('[data-test="nav-home"]')).toHaveText(expected); //compares the expected with what written in the list
  });
});

test('categories dropdown shows subcategories', async ({ page }) => {
    await page.locator('[data-test="nav-categories"]').click();
    await expect(page.locator('[data-test="nav-hand-tools"]')).toBeVisible();
    await expect(page.locator('[data-test="nav-power-tools"]')).toBeVisible();
    await expect(page.locator('[data-test="nav-other"]')).toBeVisible();
    await expect(page.locator('[data-test="nav-special-tools"]')).toBeVisible();
    await expect(page.locator('[data-test="nav-rentals"]')).toBeVisible(); 
});