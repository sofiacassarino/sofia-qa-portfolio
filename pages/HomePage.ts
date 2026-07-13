import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/');
    }

    get logo(): Locator {
        return this.page.locator ('.navbar-brand'); // class > .
    }

    get banner(): Locator {
        return this.page.getByAltText('Banner'); // alt="Banner"
    }

    get navMenu(): Locator {
        return this.page.locator('#navbarSupportedContent'); // id > #
    }

    get productCards(): Locator {
        return this.page.locator('.card');
    }

    get homeNavLink(): Locator {
        return this.page.locator('[data-test="nav-home"]'); // data-test="nav-home"
    }

    get contactNavLink(): Locator {
        return this.page.locator('[data-test="nav-contact"]'); // data-test="nav-contact"
    }
    
    get signInNavLink(): Locator {
        return this.page.locator('[data-test="nav-sign-in"]');
    }

    get categoriesDropdown(): Locator {
        return this.page.locator('[data-test="nav-categories"]');
    }

    get languageSelectButton(): Locator {
        return this.page.locator('[data-test="language-select"]');
    }

    get handToolsCategoryLink(): Locator {
        return this.page.locator('[data-test="nav-hand-tools"]');
    }

    get powerToolsCategoryLink(): Locator {
        return this.page.locator('[data-test="nav-power-tools"]');
    }

    get otherCategoryLink(): Locator {
        return this.page.locator('[data-test="nav-other"]');
    }
    
    get specialToolsCategoryLink(): Locator {
        return this.page.locator('[data-test="nav-special-tools"]');
    }

    get rentalsCategoryLink(): Locator {
        return this.page.locator('[data-test="nav-rentals"]');
    }

    langOption(code: string): Locator {
        return this.page.locator(`[data-test="lang-${code.toLowerCase()}"]`);
    }

    async clickHome() {
        await this.homeNavLink.click();
    }

    async clickContact() {
        await this.contactNavLink.click();
    }

    async clickSignIn() {
        await this.signInNavLink.click();
    }

    async clickCategoriesDropdown() {
        await this.categoriesDropdown.click();
    }

    async clickLanguageSelect() {
        await this.languageSelectButton.click();
    }

    async clickHandToolsCategory() {
        await this.handToolsCategoryLink.click();
    }

    async clickPowerToolsCategory() {
        await this.powerToolsCategoryLink.click(); 
    }
    
    async clickOtherCategory() {
        await this.otherCategoryLink.click();
    }

    async clickSpecialToolsCategoryLink() {
        await this.specialToolsCategoryLink.click();
    }

    async clickRentalsCategoryLink() {
        await this.rentalsCategoryLink.click();
    }
}