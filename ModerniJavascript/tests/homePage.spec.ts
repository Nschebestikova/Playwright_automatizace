/*Popis testu (co přesně dělá)
Struktura - Testy používají vlastní fixture basePages, takže do každého testu se automaticky injektují objekty page, loginPage a homePage.beforeEach

Před každým testem:
otevře login stránku pomocí loginPage.gotoLoginPage().

Test 1: Verify home title
Přihlásí se pomocí loginPage.login().
Ověří, že element homePage.title je viditelný.

Test 2: Verify add to cart functionality
Přihlášení.
Klikne na tlačítko Add to Cart.
Ověří, že badge na košíku má hodnotu 1.

Test 3: Verify click on Product
Přihlášení.
Kliknutí na Add to Cart.
Kliknutí na produkt.
Ověření, že stránka produktu (locator homePage.productPage) je viditelná.

Test 4: Verify back to products
Přihlášení.
Přidá položku do košíku.
Otevře detail produktu.
Klikne tlačítko „Back to Products“.
Ověří, že je zpět na stránce produktů (titulek stránky je viditelný).*/

import test, { expect } from './Fixtures/basePages';

interface TestFixtures {
  page: any;
  loginPage: any;
  homePage: any;
}

test.describe('Login Tests', () => {

  // Spuštěno před každým testem – přechod na login stránku
  test.beforeEach(async ({ page, loginPage }) => { 
    await loginPage.gotoLoginPage();
  });

  // Test 1: Ověření, že po přihlášení se zobrazí titulní text domovské stránky
  test('Verify home title', async ({ page, loginPage, homePage }: TestFixtures) => {
    await loginPage.login();                 // provedeme přihlášení
    await expect(homePage.title).toBeVisible(); // ověříme, že se titulek zobrazil
  });

  // Test 2: Ověření funkčnosti "Add to Cart"
  test('Verify add to cart funcionality', async ({ page, loginPage, homePage }) => {
    await loginPage.login();                    // přihlášení
    await homePage.clickOnaddToCart();          // kliknutí na Add to Cart
    await expect(homePage.cartBadge).toHaveText('1'); // ověření, že badge ukazuje 1 položku
  });

  // Test 3: Ověření, že jde kliknout na produkt a otevřít jeho detail
  test('Verify click on Product', async ({ page, loginPage, homePage }) => {
    await loginPage.login();                // přihlášení
    await homePage.clickOnaddToCart();      // přidání produktu do košíku
    await homePage.productPage.click();     // klik na produkt – otevření detailu
    await expect(homePage.productPage).toBeVisible(); // ověření zobrazení stránky produktu
  });

  // Test 4: Ověření návratu zpět na stránku produktů
  test('Verify back to products', async ({ page, loginPage, homePage }) => {
    await loginPage.login();                    // přihlášení
    await homePage.clickOnaddToCart();          // přidání do košíku
    await homePage.productPage.click();         // otevření detailu produktu
    await homePage.backToProductsButton.click(); // klik na "Back to Products"
    await expect(homePage.title).toBeVisible(); // ověření návratu na seznam produktů
  });

});