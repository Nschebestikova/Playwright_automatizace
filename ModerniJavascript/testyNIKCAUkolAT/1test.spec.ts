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
    await page.locator('xpath=//div[@class="category-cards"]/div[5]').click(); //kliknutí na button Book Store Application 
    expect(page.locator('div.main-header')).toHaveText('Book Store'); //validace, že se skutečně nacházím na stránce Books 
    await page.locator('input#searchBox').click(); //Kliknu do vyhledávacího pole 
    await page.locator('input#searchBox').fill('Git Pocket Guide'); //Do vyhledávacího pole zadám název knihy (např. „Git Pocket Guide“) 
    await page.locator('input#searchBox').press('Enter'); //stisknu Enter pro vyhledání 
    await page.waitForTimeout(2000); //čekání alespoň 2 sekundy, aby se stihly načíst výsledky před ověřením
    await expect(page.locator('div.rt-td:has-text("Git Pocket Guide")')).toBeVisible(); // Ověřuji, že výsledky hledaní obsahují knihu s tímto názvem 
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
    await expect(page.locator('div.main-header')).toHaveText('Book Store'); //validace, že se skutečně nacházím na stránce Books 
    await page.locator('input#searchBox').click(); //Kliknu do vyhledávacího pole 
    await page.locator('input#searchBox').fill('Git Pocket Guide'); //Do vyhledávacího pole zadám název knihy (např. „Git Pocket Guide“) 
    await page.locator('input#searchBox').press('Enter'); //stisknu Enter pro vyhledání 
    await page.waitForTimeout(2000); //čekání alespoň 2 sekundy, aby se stihly načíst výsledky před ověřením
    await page.locator('a[href*´="/books?book=9781449325862"´]').click(); //clikne přímo na odkaz knihy a otevře tak knihu
    await expect(page.locator('text=ISBN')).toBeVisible();   // Ověřit, že se zobrazily detaily knihy

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
    await page.goto('https://demoqa.com');
    await page.locator('xpath=//div[@class="category-cards"]/div[5]').click(); //kliknutí na button Book Store Application 
    await expect(page.locator('div.main-header')).toHaveText('Book Store'); //validace, že se skutečně nacházím na stránce Books
    await page.locator('.-next').click(); //kliknutí na rozbalovací nabídku pro počet položek na stránku
    await page.waitForTimeout(2000); //čekání alespoň 2 sekundy, aby se stihly načíst výsledky před ověřením
    await expect(page.getByText('Programming JavaScript Applications')).toBeVisible();  // Ověřuji, že výsledky hledaní obsahují knihu s tímto názvem
    await expect(page.getByText('Eloquent JavaScript, Second Edition')).toBeVisible();  // Ověřuji, že výsledky hledaní obsahují knihu s tímto názvem
    await expect(page.getByText('Understanding ECMAScript 6')).toBeVisible();  // Ověřuji, že výsledky hledaní obsahují knihu s tímto názvem
    await page.locator('.Previous').click(); // kliknutí na zpětné tlačítko previous a návrat na předchozí stránku
});












/* ********** */
/* Ověření API odpovědi se seznamem knih (status a schéma)

Cíl: Odeslat GET požadavek pomocí APIRequestContext a validovat odpověď.

Kroky:
Pomocí Playwright APIRequestContext odeslat GET request na endpoint vracející seznam knih
(např. https://demoqa.com/BookStore/v1/Books)

Ověřit status 200 OK
Ověřit, že JSON obsahuje neprázdné pole knih
Ověřit, že každá kniha obsahuje povinná pole (title, author, isbn, …)
Ověřované dovednosti:
Práce s API requesty
Validace status kódů a těla odpovědi
Kontrola přítomnosti klíčů nebo jednoduchého JSON schématu */











/* *****************
Scénář 5: Přidání knihy do uživatelské kolekce pomocí API a ověření
Cíl: Odeslat POST požadavek pro přidání knihy uživateli a ověřit úspěch.
Kroky:
Provést autentizaci nebo použít testovací token
Pomocí APIRequestContext odeslat POST request na endpoint pro přidání knihy
(např. https://demoqa.com/BookStore/v1/Books)s JSON payloadem obsahujícím ISBN a userID/token

Ověřit status 201 Created nebo 200 OK
Ověřit, že odpověď potvrzuje úspěšné přidání knihy
Ověřované dovednosti:
POST request s JSON payloadem
Práce s autentizací
Validace odpovědi u akce měnící stav */