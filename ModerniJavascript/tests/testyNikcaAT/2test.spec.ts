import { test, expect, request } from '@playwright/test';

/* ********** Scénář 4: Ověření API odpovědi se seznamem knih (status a schéma)
Cíl: Odeslat GET požadavek pomocí APIRequestContext a validovat odpověď.
Kroky:
Pomocí Playwright APIRequestContext odeslat GET request na endpoint vracející seznam knih
(např. https://demoqa.com/BookStore/v1/Books)
Ověřit status 200 OK
Ověřit, že JSON obsahuje neprázdné pole knih
Ověřit, že každá kniha obsahuje povinná pole (title, author, isbn, …)
*/

test('Ověření API odpovědi se seznamem knih (status a schéma)', async ({ request }) => {
  const response = await request.get('https://demoqa.com/BookStore/v1/Books');
  
  // Ověření status kódu
  expect(response.status()).toBe(200);
  
  const data = await response.json(); // tohle ověřuje získání dat z response
  
  // Ověření, že pole knih není prázdné
  expect(data.books.length).toBeGreaterThan(0); //toto ověřuje, že pole books má délku větší než 0, tedy že není prázdné pomocí funkce toBeGreaterThan(0) = což v TS znamená "být větší než 0"
  
  // Ověření povinných polí v každé knize
  data.books.forEach((book: any) => {
    expect(book).toHaveProperty('title'); //očekává naplnění dat v book - a to have property znamená funkci, která ověřuje, že daný objekt má danou vlastnost
    expect(book).toHaveProperty('author'); //očekává naplnění dat v book - a to have property znamená funkci, která ověřuje, že daný objekt má danou vlastnost
    expect(book).toHaveProperty('isbn');
    expect(book).toHaveProperty('subtitle');
    expect(book).toHaveProperty('publish_date');
    expect(book).toHaveProperty('publisher');
    expect(book).toHaveProperty('pages');
    expect(book).toHaveProperty('description');
    expect(book).toHaveProperty('website');
  });
});


/* ***************** 
Scénář 5: Přidání knihy do uživatelské kolekce pomocí API a ověření
Cíl: Odeslat POST požadavek pro přidání knihy uživateli a ověřit úspěch.
Kroky: Provést autentizaci nebo použít testovací token
Pomocí APIRequestContext odeslat POST request na endpoint pro přidání knihy
(např. https://demoqa.com/BookStore/v1/Books)s JSON payloadem obsahujícím ISBN a userID/token
Ověřit status 201 Created nebo 200 OK
Ověřit, že odpověď potvrzuje úspěšné přidání knihy
*/

test('Přidání knihy do uživatelské kolekce pomocí API a ověření', async () => {

  // Vytvoření API kontextu
  const api = await request.newContext();

  // Login + získání tokenu
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

  // 3️⃣ Připravíme ISBN a payload
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