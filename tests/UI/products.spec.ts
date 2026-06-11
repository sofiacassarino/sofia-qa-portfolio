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
    await page.selectOption('[data-test="sort"]', 'name,asc');
    const namesAsc = (await page.locator('[data-test="product-name"]').allTextContents()).map(name => name.trim());
    const sortedAsc = [...namesAsc].sort((a, b) => a.localeCompare(b));
    expect(namesAsc).toEqual(sortedAsc);
    await page.selectOption('[data-test="sort"]', 'name,desc');
    const namesDesc = (await page.locator('[data-test="product-name"]').allTextContents()).map(name => name.trim());
    const sortedDesc = [...namesDesc].sort((a, b) => b.localeCompare(a));
    expect(namesDesc).toEqual(sortedDesc);
  });

  test('search bar is visible and functional', async ({ page }) => {
    await expect(page.locator('[data-test="search-query"]')).toBeVisible();
    await page.locator('[data-test="search-query"]').fill('Hammer');
    await page.locator('[data-test="search-submit"]').click();
    await expect(page.locator('[data-test="search-caption"]')).toContainText('Searched for: Hammer');
  });
  
  test('filter by price range works', async ({ page }) => {
  });

  test('filter by category works', async ({ page }) => {
    // filter by Power Tools
    await page.getByLabel('Power Tools').check();
    await expect(page.getByLabel('Power Tools')).toBeChecked();

    // subcategories also get checked
    await expect(page.getByLabel('Grinder')).toBeChecked();
    await expect(page.getByLabel('Sander')).toBeChecked();
    await expect(page.locator('[data-test="category-01KTVFQRYB4AZ01K4RF76TQPSD"]')).toBeChecked();
    await expect(page.getByLabel('Drill')).toBeChecked();
    
    // verify only Power Tools products are shown
    const names = await page.locator('[data-test="product-name"]').allTextContents();
    for (const name of names) {
      console.log(name); // print each product name so we can see what appears
      }
      expect(names.length).toBeGreaterThan(0);
  });

  test('filter by brand works', async ({ page }) => {
  });

  test('filter by sustainability works', async ({ page }) => {
  });

  test('clicking a product opens the correct detail page', async ({ page }) => {
  });