import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProductsPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    get productCards(): Locator {
        return this.page.locator('.card');
    }

    // search WITHIN that card instead of the whole page
    productCardName(card: Locator): Locator {
        return card.locator('[data-test="product-name"]');
    }

    productCardPrice(card: Locator): Locator {
        return card.locator('[data-test="product-price"]');
    }

    productCardImage(card: Locator): Locator {
        return card.locator('.card-img-top');
    }

    // Page-wide (unscoped) versions — useful when you want ALL names/prices at once
    get allProductNames(): Locator {
        return this.page.locator('[data-test="product-name"]');
    }

    get allProductPrices(): Locator {
        return this.page.locator('[data-test="product-price"]');
    }

    get productSortMenu(): Locator {
        return this.page.locator('[data-test="sort"]');
    }

    get searchQuery(): Locator {
        return this.page.locator('[data-test="search-query"]');
    }

    get searchSubmit(): Locator {
        return this.page.locator('[data-test="search-submit"]');
    }

    get searchCaption(): Locator {
        return this.page.locator('[data-test="search-caption"]');
    }

    get brandFilter(): Locator {
        return this.page.locator('[data-test="brand-filter"]');
    }

    // Explicit filter checkbox getters — keeps selectors out of the spec file
    getCategoryCheckbox(label: string): Locator {
        return this.page.getByLabel(label);
    }
}