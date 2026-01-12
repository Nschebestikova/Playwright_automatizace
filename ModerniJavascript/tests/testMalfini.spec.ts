import { test, expect } from '@playwright/test';
import { defineConfig } from '@playwright/test';
export default defineConfig({ testDir: './', use: { browser: 'chromium', }, });


// TEST 1 - Vyhledání eshop Malfini eshop na google.cz a ověření, že první výsledek vede na správnou URL
test('Vyhledání eshop Malfini na Google a zobrazení page', async ({ page }) => {
   // Navigace na Google
   await page.goto('https://www.google.com/');

   // Souhlas s cookies (pokud se objeví)
   const consentButton = page.getByRole('button', { name: 'Povolit vše' });
    if (await consentButton.isVisible())
      { await consentButton.click(); }
    else { console.log('Consent button not found, continuing...'); }


   //  Najdi vyhledávací pole
   const searchBox = page.locator('input[name="q"]');
   // Vyplnění vyhledávacího pole a vyhledání
   await searchBox.click();
   await searchBox.fill('Malfini eshop');
   await searchBox.press('Enter');
  });


// TEST 2 - Ověření, že jsme na správné URL eshopu Malfini
test('Ověření URL eshopu', async ({ page }) => {
  await expect(page).toHaveURL('https://shop.malfini.cz/');
});

// TEST 3 - vyhledání produktu "tričko" na eshopu Malfini a ověření, že výsledky hledání obsahují tento produkt
test('Vyhledání produktu na eshopu Malfini', async ({ page }) => {
  // Navigujeme se na eshop Malfini
  await page.goto('https://shop.malfini.cz/');
  // Vyhledání vyhledávacího pole a zadání hledaného výrazu
  const searchBox = page.getByRole('combobox', { name: 'Hledat produkty' });
  await searchBox.click();
  await searchBox.fill('tričko');
  await searchBox.press('Enter');
  // Čekání na načtení výsledků
  await page.waitForTimeout(2000); // nutno přidat, aby test stihl načíst wait time

  // Otevři detail produktu (100 CLASSIC)
  await page.locator('a.product-title:has-text("100 CLASSIC")').click();
  await expect(page).toHaveURL('https://shop.malfini.com/cz/cs/product/classic-100?color=00/');
});

  // TEST - 5 Ověř, že detail produktu obsahuje základní prvky (např. název produktu, produktový obrázek, popis nebo varianty)
test('Ověření detailu produktu na eshopu', async ({ page }) => {
    // Navigujeme se na eshop Malfini
    await page.goto('https://shop.malfini.cz/');
  await page.locator('a.product-title:has-text("100 CLASSIC")').click();
  await expect(page.locator('h1.product-name')).toContainText('CLASSIC 100'); // Ověř, že název obsahuje "CLASSIC 100"
  await expect(page.locator('img.product-image')).toBeVisible(); // Produktový obrázek
  await expect(page.locator('div.product-description')).toBeVisible(); // Popis produktu
  await expect(page.locator('select#variant-select')).toBeVisible(); // Varianty produktu
  });
