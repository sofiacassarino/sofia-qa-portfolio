import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';
// import { CartPage } from '../pages/CartPage';
// import { CheckoutPage } from '../pages/CheckoutPage';

type Pages = {
  loginPage: LoginPage;
  homePage: HomePage;
  productsPage: ProductsPage;
  // cartPage: CartPage;
  // checkoutPage: CheckoutPage;
};

export const test = base.extend<Pages>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
    homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
  // cartPage: async ({ page }, use) => {
  //   await use(new CartPage(page));
  // },
  // checkoutPage: async ({ page }, use) => {
  //   await use(new CheckoutPage(page));
  // }
});

export { expect } from '@playwright/test';