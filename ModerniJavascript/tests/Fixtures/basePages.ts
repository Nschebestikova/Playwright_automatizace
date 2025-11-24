import{test as baseTest, Page} from '@playwright/test';

import { HomePage } from '../page-object_2/homePage';

const test = baseTest.extend<{
    homePage: HomePage;
}>({
    homePage: async ({ page }: { page: Page }, use: (homePage: HomePage) => Promise<void>) => {
        await use(new HomePage(page));
    }
});

export default test;
export const {expect} = test;