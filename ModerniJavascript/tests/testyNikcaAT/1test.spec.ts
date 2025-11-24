import { test, expect } from '@playwright/test'; 

/* Vyhledání knihy a validace výsledků
Cíl: Automatizovat vyhledání konkrétního názvu knihy a ověřit výsledky.
Kroky:
Přejít na stránku s knihami
Do vyhledávacího pole zadat název knihy (např. „Git Pocket Guide")
Ověřit, že výsledky obsahují alespoň jednu knihu se zadaným názvem
Ověřit, že nesouvisející knihy se ve výsledcích neobjeví */

// TEST 1 – Vyhledání knihy a validace výsledků
test('Kliknutí na tlačítko Books a vyhledání knihy', async ({ page }) => {
  await page.goto('https://demoqa.com');
  await page.locator('xpath=//div[@class="category-cards"]/div[5]').click(); // toto jeětě opravit
  await expect(page.locator('input#searchBox')).toBeVisible();
  await page.locator('input#searchBox').click();
  await page.locator('input#searchBox').fill('Git Pocket Guide');
  await page.locator('input#searchBox').press('Enter');
  await page.waitForTimeout(2000);
  await expect(page.locator('div.rt-td:has-text("Git Pocket Guide")')).toBeVisible();
});




/* ******************************************** */
/* Cíl: Kliknout na vybranou knihu v seznamu a ověřit její detaily.
Kroky:
Přejít na stránku s knihami
Kliknout na odkaz s názvem knihy (např. „Learning JavaScript Design Patterns")
Ověřit změnu URL na stránku detailu knihy
Ověřit, že detaily (autor, vydavatel, ISBN) jsou zobrazené a správné
Ověřované dovednosti:
Navigace a práce s přechody mezi stránkami
Ověřování více prvků na stránce
Validace URL a textového obsahu */

// TEST 2 - Otevření detailu knihy a kontrola obsahu
test('Otevření detailu knihy a kontrola obsahu', async ({ page }) => {
  await page.goto('https://demoqa.com/books');
  await expect(page.locator('input#searchBox')).toBeVisible();
  await page.locator('input#searchBox').click();
  await page.locator('input#searchBox').fill('Git Pocket Guide');
  await page.locator('input#searchBox').press('Enter');
  await page.waitForTimeout(2000);
  await page.locator('a[href*="/books?book=9781449325862"]').click();
  await expect(page).toHaveURL(/book=9781449325862/); // protože nelze stránku zkontrolovat na základě selectoru a elementoru, zkontroluje se na základě obsahu URL
});



/* ********************************************** */
/* Validace stránkování
Cíl: Otestovat ovládání stránkování a ověřit změny v seznamu knih.
Kroky:
Přechod na stránku s knihami
Najít ovládací prvky stránkování (tlačítko “Next” nebo čísla stránek)
Přepnout na další stránku
Ověřit, že seznam knih se změnil (odlišné tituly)
Volitelně: vrátit se na první stránku a ověřit původní seznam
Ověřované dovednosti:
Práce se stránkováním
Ověřování dynamického obsahu
Porovnávání dat ve více stavech */

// TEST 3 - Validace stránkování
test('Validace stránkování', async ({ page }) => {
  await page.goto('https://demoqa.com/books');
  await page.waitForLoadState('networkidle');
  // Kliknutí na select pro výběr počtu řádků
  await page.locator('select[aria-label="rows per page"]').selectOption('5');
  await page.waitForTimeout(1000);
  // Kliknutí na tlačítko Next
  await page.locator('.-next').click();
  await page.waitForTimeout(2000);
  await expect(page.getByText('Programming JavaScript Applications')).toBeVisible();
  await expect(page.getByText('Eloquent JavaScript, Second Edition')).toBeVisible();
  await expect(page.getByText('Understanding ECMAScript 6')).toBeVisible(); // tohle je ověření že se na další stránce skutečně nachází tyto knihy
  // Kliknutí na tlačítko Previous
  await page.locator('.-previous').click();
  await expect (page.getByText('Git Pocket Guide')).toBeVisible(); //ověření že se vracím na předchozí stránku a nachází se tam tato kniha
});
