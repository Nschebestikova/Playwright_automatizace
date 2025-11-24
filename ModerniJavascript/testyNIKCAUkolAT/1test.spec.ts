import { test, expect, request } from '@playwright/test';
import { appendFile } from 'fs/promises'; 

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




/* *****************
Scénář 5: Přidání knihy do uživatelské kolekce pomocí API a ověření
Cíl: Odeslat POST požadavek pro přidání knihy uživateli a ověřit úspěch.
Kroky:
Provést autentizaci nebo použít testovací token
Pomocí APIRequestContext odeslat POST request na endpoint pro přidání knihy
(např. https://demoqa.com/BookStore/v1/Books)s JSON payloadem obsahujícím ISBN a userID/token
Ověřit status 201 Created nebo 200 OK
Ověřit, že odpověď potvrzuje úspěšné přidání knihy
*/
const loginResponse = await appendFile.post('https://demoqa.com/swagger/None#/Account/AccountV1LoginPost', {
  data: {
    userName: 'testuser',
    password: 'Test@1234'
  }
});
const loginData = await loginResponse.json();
const token = loginData.token; 
const addBookResponse = await api.post(
  'https://demoqa.com/BookStore/v1/Books',
  {
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      userId: userId,
      collectionOfIsbns: [
        { isbn: '9781449325862' }
      ]
    }
  }
);

test('Přidání knihy do uživatelské kolekce pomocí API a ověření', async () => {

  // Vytvoření API kontextu
  const api = await request.newContext();

  // 2️⃣ Login + získání tokenu
  const loginResponse = await api.post('https://demoqa.com/Account/v1/Login', {
    data: {
      userName: 'testuser',
      password: 'Test@1234'
    }
  });

  expect(loginResponse.status()).toBe(200);

  const loginData = await loginResponse.json();
  const token = loginData.token;
  const userId = loginData.userId;

  // Připravíme payload pro přidání knihy
  const isbnToAdd = '9781449325862';

  const payload = {
    userId: userId,
    collectionOfIsbns: [
      { isbn: isbnToAdd }
    ]
  };

  // POST request pro přidání knihy
  const addBookResponse = await api.post('https://demoqa.com/BookStore/v1/Books', {
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: payload
  });

  expect(addBookResponse.status()).toBe(201);

  const addBookData = await addBookResponse.json();

  // Ověření, že vrácená kniha má správné ISBN
  expect(addBookData.books[0].isbn).toBe(isbnToAdd);

});
