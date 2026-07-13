import { test, expect } from '../../fixtures/pages.fixture';

test.beforeEach(async ({ homePage }) => {
  await homePage.goto();
});

test.describe('Homepage', () => {
  test('homepage loads with key elements', async ({ page, homePage }) => {
    // check page tab title
    await expect(page).toHaveTitle(/Practice Software Testing - Toolshop/);
    // check logo
    await expect(homePage.logo).toBeVisible();
    // check banner
    await expect(homePage.banner).toBeVisible();
    // check nav menu
    await expect(homePage.navMenu).toBeVisible();
  });

  test('at least 9 products are displayed', async ({ homePage }) => {
    await expect(homePage.productCards).toHaveCount(9);
  });

  test('categories dropdown shows subcategories', async ({ homePage }) => {
    await homePage.clickCategoriesDropdown();
    await expect(homePage.handToolsCategoryLink).toBeVisible();
    await expect(homePage.powerToolsCategoryLink).toBeVisible();
    await expect(homePage.otherCategoryLink).toBeVisible();
    await expect(homePage.specialToolsCategoryLink).toBeVisible();
    await expect(homePage.rentalsCategoryLink).toBeVisible();
  });
});

test.describe('Homepage navigation', () => {
  test('nav menu redirects to the correct pages', async ({ page, homePage }) => {
    // click on home button
    await homePage.clickHome();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/');
    // click on contact button
    await homePage.clickContact();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/contact');
    await expect(page).toHaveTitle(/Contact Us - Practice Software Testing/);
    // click on sign up button
    await homePage.clickSignIn();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/auth/login');
    // click on categories dropdown menu
    await homePage.clickCategoriesDropdown();
    await expect(homePage.handToolsCategoryLink).toBeVisible();
    await homePage.clickHandToolsCategory();
    await expect(page).toHaveURL('https://practicesoftwaretesting.com/category/hand-tools');
    // click on language button
    await homePage.clickLanguageSelect();
    await expect(homePage.langOption('de')).toBeVisible();
  });
});

test.describe('Language switching', () => {
  [
    { name: 'EN', expected: 'Home' },
    { name: 'DE', expected: 'Start' },
    { name: 'ES', expected: 'Inicio' },
    { name: 'FR', expected: 'Accueil' },
    { name: 'NL', expected: 'Home' },
    { name: 'TR', expected: 'Anasayfa' },
  ].forEach(({ name, expected }) => {
    test(`switch language translate the whole page into the selected lang ${name}`, async ({ homePage }) => {
      await homePage.clickLanguageSelect();
      await homePage.langOption(name).click();
      await expect(homePage.homeNavLink).toHaveText(expected);
    });
  });
});