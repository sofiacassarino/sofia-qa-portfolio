import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async goto() {
        await this.page.goto('/auth/login');
    }

    get emailInput(): Locator {
        return this.page.locator('[data-test="email"]');
    }

    get passwordInput(): Locator {
        return this.page.locator('[data-test="password"]');
    }

    get loginSubmitButton(): Locator {
        return this.page.locator('[data-test="login-submit"]');
    }

    get loginError(): Locator {
        return this.page.locator('[data-test="login-error"]');
    }
    async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginSubmitButton.click();
    }
}