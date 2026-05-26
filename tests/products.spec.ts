  import { expect, test } from "@playwright/test";

  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
  });

  test('all products are displayed with name, price, and image', async ({ page }) => {
    const cards = page.locator('.card');
    const count = await cards.count();
    
    for (let i = 0; i < count; i++) { // this check each card
      const card = cards.nth(i);
      await expect(card.locator('[data-test="product-name"]')).toBeVisible();
      await expect(card.locator('[data-test="product-price"]')).toBeVisible();
      await expect(card.locator('.card-img-top')).toBeVisible();
    }
  });
  
  test('sorting works - low to high, high to low', async ({ page }) => {
    // get the default first price before sorting
    const defaultFirst = await page.locator('[data-test="product-price"]').first().textContent();
    // sort price low to high
    await page.selectOption('[data-test="sort"]', 'price,asc');
    // wait until first price actually changes
    await expect(page.locator('[data-test="product-price"]').first()).not.toHaveText(defaultFirst!);
    const pricesAsc = await page.locator('[data-test="product-price"]').allTextContents();
    const numbersAsc = pricesAsc.map(p => parseFloat(p.replace('$', '')));
    for (let i = 0; i < numbersAsc.length - 1; i++) {
        expect(numbersAsc[i]).toBeLessThanOrEqual(numbersAsc[i + 1]);
      }
      
    // sort price high to low
    const ascFirst = await page.locator('[data-test="product-price"]').first().textContent();
    await page.selectOption('[data-test="sort"]', 'price,desc');
    await expect(page.locator('[data-test="product-price"]').first()).not.toHaveText(ascFirst!);
    const pricesDesc = await page.locator('[data-test="product-price"]').allTextContents();
    const numbersDesc = pricesDesc.map(p => parseFloat(p.replace('$', '')));
    for (let i = 0; i < numbersDesc.length - 1; i++) {
        expect(numbersDesc[i]).toBeGreaterThanOrEqual(numbersDesc[i + 1]);
    }
  });
    
  test('sorting works - A to Z, Z to A', async ({ page }) => {
    const defaultFirst = await page.locator('[data-test="product-name"]').first().textContent();
    await page.selectOption('[data-test="sort"]', 'name,asc');
    await expect(page.locator('[data-test="product-name"]').first()).not.toHaveText(defaultFirst!);
    const namesAsc = await page.locator('[data-test="product-name"]').allTextContents();
    for (let i = 0; i < namesAsc.length - 1; i++) {
      expect(namesAsc[i].localeCompare(namesAsc[i + 1])).toBeLessThanOrEqual(0);
    }

    const ascFirst = await page.locator('[data-test="product-name"]').first().textContent();
    await page.selectOption('[data-test="sort"]', 'name,desc');
    await expect(page.locator('[data-test="product-name"]').first()).not.toHaveText(ascFirst!);
    const namesDesc = await page.locator('[data-test="product-name"]').allTextContents();
    for (let i = 0; i < namesDesc.length - 1; i++) {
      expect(namesDesc[i].localeCompare(namesDesc[i + 1])).toBeGreaterThanOrEqual(0);
    }
  });

  test('filter by price range works', async ({ page }) => {
  });

  test('search bar is visible and functional', async ({ page }) => {
    await expect(page.locator('[data-test="search-query"]')).toBeVisible();
    await page.locator('[data-test="search-query"]').fill('Hammer');
    await page.locator('[data-test="search-submit"]').click();
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