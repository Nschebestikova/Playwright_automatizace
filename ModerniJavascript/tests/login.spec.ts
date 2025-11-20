/* Popis celého testovacího souboru
beforeEach
Před každým testem se otevře přihlašovací stránka pomocí loginPage.gotoLoginPage().

Test 1 – Successful login
Otevře login stránku.
Přihlásí se pomocí správného uživatele a hesla.
Ověří, že URL ukazuje na /inventory.html.

Test 2 – Valid username + invalid password
Zadá platné uživatelské jméno.
Zadá neplatné heslo.
Klikne na login.
Ověří, že se zobrazila chyba.
Test je anotovaný pomocí test.info().annotations.

Test 3 – Invalid username + valid password
Zadá neplatné uživatelské jméno.
Zadá platné heslo.
Klikne na login.
Ověří, že se zobrazila chyba.

Test 4 – Blank fields
Nevyplní žádný údaj.
Klikne login.
Ověří, že se zobrazila chyba o povinných údajích.

Test 5 – Locked out user
Zadá locked out username.
Zadá platné heslo.
Klikne login.
Ověří, že se zobrazila chyba. */

import test, { expect } from './fixtures/basePages';

// Testy pro login stránku
test.describe('Login Tests', () => {
  // Každý test začíná otevřením login stránky
  test.beforeEach(async ({ loginPage }) => { 
    await loginPage.gotoLoginPage();
  });

  // Test 1: Úspěšné přihlášení se správnými údaji - přidáním only určujeme, jaké testy se mají spustit (nechceme všechny totiž)
  test.only('Successful login', async ({ page, loginPage }) => { 
    await loginPage.gotoLoginPage();                        // otevření login stránky
    await loginPage.login();                                // přihlášení platným uživatelem
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html'); // kontrola URL
  });

  // Test 2: Platný username + neplatné heslo - skip znamená, že test nebude spuštěn
  test.skip('Cannot login with valid username and invalid password', async ({ page, loginPage, browserName }) => { 
    // anotace skip pro konkrétní prohlížeč - znamená, že test se nespustí v tom prohlížeči
    test.skip(browserName === 'firefox', 'Still working on it'); 
    // anotace testu pro report
    test.info().annotations.push({
      type: 'Test',
      description: 'This test will pass if the user is not able to login with valid username and invalid password'
    });

    // krok 1: zadání správného username
    await test.step('Enter valid username', async () => {
      await loginPage.enterValidUserName();
    });

    // krok 2: zadání chybného hesla
    await test.step('Enter invalid password', async () => {
      await loginPage.enterInvalidPassword();
    });

    // krok 3: kliknutí na login button
    await test.step('Click login button', async () => {
      await loginPage.clickLoginButton();
    });

    // krok 4: ověření zobrazení chybové hlášky
    await test.step('Check error message visibility', async () => {
      await expect(
        loginPage.invalidCredentialsErrorMessage,
        'Can not find login error message'
      ).toBeVisible();
    });
  });

  // Test 3: Neplatný username + platné heslo - fixme znamená, že test je označen jako nedokončený a nebude spuštěn
  test.fixme('Cannot login with invalid username and valid password', async ({ page, loginPage }) => { 
    await loginPage.enterInvalidUserName();                   // zadání neplatného jména
    await loginPage.enterValidPassword();                     // zadání platného hesla
    await loginPage.clickLoginButton();                       // odeslání přihlášení
    await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible(); // očekávaná chyba
  });

  // Test 4: Nevyplněná pole - anotace slow znamená, že test může trvat déle, test zpomalí o několik sekund a @slow znamená, že test je označen jako pomalý
  test('Cannot login with blank fields @slow', async ({ page, loginPage }) => {
//    await loginPage.clickLoginButton();                       // pokus o přihlášení bez údajů
    await expect(loginPage.requiredCredentialsErrorMessage).toBeVisible(); // chyba o prázdných polích
  });
  test.slow();
  // Test 5: Locked out user - @fast znamená, že test je označen jako rychlý
  test('Cannot login with locked out user @fast', async ({ page, loginPage }) => {
    await loginPage.enterInvalidUserName();                   // zde bude locked out username
    await loginPage.enterValidPassword();                     // platné heslo
    await loginPage.clickLoginButton();                       // pokus o login
    await expect(loginPage.invalidCredentialsErrorMessage).toBeVisible(); // chyba
  });
});