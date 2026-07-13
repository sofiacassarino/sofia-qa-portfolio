import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/auth/login');
    }
    async login(email: string, password: string) {
    await this.page.fill('[data-test="email"]', email);
    await this.page.fill('[data-test="password"]', password);
    await this.page.locator('[data-test="login-submit"]').click();
    }
}