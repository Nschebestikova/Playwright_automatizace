import{test as baseTest, Page} from '@playwright/test';

import { HomePage } from '../page-object/homePage';
import { LoginPage } from '../page-object/loginPage';


export default test;
export const {expect} = test;

const test = baseTest.extend<{
    homePage: HomePage;
}>({
    homePage: async ({ page }: { page: Page }, use: (homePage: HomePage) => Promise<void>) => {
        await use(new HomePage(page));
    }
});



const test = baseTest.extend<{
    loginPage: LoginPage;
}>({
    loginPage: async ({ page }: { page: Page }, use: (loginPage: LoginPage) => Promise<void>) => { //promiseVoid znamená že to nic nevrací ale musí zde být protože je to asynchronní funkce a jejím účelem je vrátit instanci třídy LoginPage
        await use(new LoginPage(page)); //to vrací instanci třídy LoginPage
    }
});

// instatní třídy znamenají že se vytvoří instance těchto tříd a můžou být použity v testech přes tento základní testový framework (base test) jejich funkčnností je zpřístupnit metody a vlastnosti těchto tříd v jednotlivých testech = můžeme je tak použít v testech jednodušeji a přehledněji