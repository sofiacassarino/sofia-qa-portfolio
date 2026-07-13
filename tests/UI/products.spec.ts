import { test, expect } from '../../fixtures/pages.fixture';

test.beforeEach(async ({ productsPage }) => {
  await productsPage.goto();
});

test('all products are displayed with name, price, and image', async ({ productsPage }) => {
  const cards = productsPage.productCards;
  const count = await cards.count();
  for (let i = 0; i < count; i++) {
    const card = cards.nth(i);
    await expect(productsPage.productCardName(card)).toBeVisible();
    await expect(productsPage.productCardPrice(card)).toBeVisible();
    await expect(productsPage.productCardImage(card)).toBeVisible();
  }
});

// test('clicking a product opens the correct detail page', async ({ page, productsPage }) => {
//   // TODO: click first card, assert navigation to /product/:id and that the
//   // detail page name matches the name on the card that was clicked.
// });

test.describe('Sorting products in homepage', () => {
  test('sorting works - low to high, high to low', async ({ productsPage }) => {
    const defaultFirst = await productsPage.allProductPrices.first().textContent();

    await productsPage.productSortMenu.selectOption('price,asc');
    await expect(productsPage.allProductPrices.first()).not.toHaveText(defaultFirst!);
    const pricesAsc = await productsPage.allProductPrices.allTextContents();
    const numbersAsc = pricesAsc.map(p => parseFloat(p.replace('$', '')));
    for (let i = 0; i < numbersAsc.length - 1; i++) {
      expect(numbersAsc[i]).toBeLessThanOrEqual(numbersAsc[i + 1]);
    }

    const ascFirst = await productsPage.allProductPrices.first().textContent();
    await productsPage.productSortMenu.selectOption('price,desc');
    await expect(productsPage.allProductPrices.first()).not.toHaveText(ascFirst!);
    const pricesDesc = await productsPage.allProductPrices.allTextContents();
    const numbersDesc = pricesDesc.map(p => parseFloat(p.replace('$', '')));
    for (let i = 0; i < numbersDesc.length - 1; i++) {
      expect(numbersDesc[i]).toBeGreaterThanOrEqual(numbersDesc[i + 1]);
    }
  });

  test('sorting works - A to Z, Z to A', async ({ productsPage }) => {
    await productsPage.productSortMenu.selectOption('name,asc');
    const namesAsc = (await productsPage.allProductNames.allTextContents()).map(n => n.trim());
    expect(namesAsc).toEqual([...namesAsc].sort((a, b) => a.localeCompare(b)));

    await productsPage.productSortMenu.selectOption('name,desc');
    const namesDesc = (await productsPage.allProductNames.allTextContents()).map(n => n.trim());
    expect(namesDesc).toEqual([...namesDesc].sort((a, b) => b.localeCompare(a)));
  });
});

test('search bar is visible and functional', async ({ productsPage }) => {
  await expect(productsPage.searchQuery).toBeVisible();
  await productsPage.searchQuery.fill('Hammer');
  await productsPage.searchSubmit.click();
  await expect(productsPage.searchCaption).toContainText('Searched for: Hammer');
});

// test.describe('Filtering products in homepage', () => {
//   test('filter by price range works', async ({ productsPage }) => {
//     // TODO: set min/max price inputs, assert every visible product price
//     // falls within [min, max].
//   });

  test('filter by category works', async ({ productsPage }) => {
    await productsPage.getCategoryCheckbox('Power Tools').check();
    await expect(productsPage.getCategoryCheckbox('Power Tools')).toBeChecked();

    // subcategories should auto-check too
    await expect(productsPage.getCategoryCheckbox('Grinder')).toBeChecked();
    await expect(productsPage.getCategoryCheckbox('Sander')).toBeChecked();
    await expect(productsPage.getCategoryCheckbox('Drill')).toBeChecked();

    const names = await productsPage.allProductNames.allTextContents();
    expect(names.length).toBeGreaterThan(0);
    // TODO: once you know the fixed set of Power Tools product names in the
    // seed data, assert the returned names are a subset of that known list -
    // that's a stronger check than just "some products showed up".
  });

  // test('filter by brand works', async ({ productsPage }) => {
  //   await expect(productsPage.brandFilter).toBeChecked();
  // });

  // test('filter by sustainability works', async ({ page, productsPage }) => {
  //   // TODO: toggle the sustainability filter, assert all visible products
  //   // carry the sustainability badge/attribute.