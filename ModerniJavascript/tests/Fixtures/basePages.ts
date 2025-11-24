import { test as baseTest, Page } from '@playwright/test';

import { HomePage } from '../page-object/homePage';
import { LoginPage } from '../page-object/loginPage';

const test = baseTest.extend<{
    homePage: HomePage;
    loginPage: LoginPage;
}>({
    homePage: async ({ page }: { page: Page }, use: (homePage: HomePage) => Promise<void>) => {
        await use(new HomePage(page));
    },
    loginPage: async ({ page }: { page: Page }, use: (loginPage: LoginPage) => Promise<void>) => {
        await use(new LoginPage(page));
    }
});

export default test;
export const { expect } = baseTest;