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
  const response = await request.get('https://demoqa.com/BookStore/v1/Books'); // tohle zde musím mít protože tohle je GET request na endpoint vracející seznam knih
  
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
    expect(book).toHaveProperty('title');
    expect(book).toHaveProperty('subTitle');
    expect(book).toHaveProperty('author');
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
  const loginResponse = await api.post('https://demoqa.com/Account/v1/Login', { // tohle zaručuje že se přihlásím a získám token a to způsobem POST - jedná se o funkce Login a tu zjistím přes nastavení const = protože je to neměnná proměnná, pokud se přihlašuji přes uživatelelské jméno a heslo
    data: {
      userName: 'testuser',
      password: 'Test@1234'
    }
  });

  expect(loginResponse.status()).toBe(200); //tohle mi zajistí že ověřím status kód 200 OK - nejprve provolám expect a pak status funkci a toBe znamená že to má být rovno 200 = toBe jako rovno

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




///******************************************** */
/* Scénář 6: Odebrání tedy vymazání knihy z uživatelské kolekce pomocí API a ověření 
Cíl: Odeslat DELETE požadavek pro odebrání knihy z uživatelské kolekce a ověřit úspěch.
Kroky:
Provést autentizaci nebo použít testovací token
Pomocí APIRequestContext odeslat DELETE request na endpoint pro odebrání knihy
(např. https://demoqa.com/BookStore/v1/Book) s JSON payloadem obsahujícím ISBN a userID/token
Ověřit status 204 No Content nebo 200 OK
Ověřit, že odpověď potvrzuje úspěšné odebrání knihy
*/

test('Odebrání knihy z uživatelské kolekce pomocí API a ověření', async ({ request }) => {
  // Login + získání tokenu
  const loginResponse = await request.post('https://demoqa.com/Account/v1/Login', {
    data: {
      userName: 'testuser',
      password: 'Test@1234'
    }
  });
  expect(loginResponse.status()).toBe(200);

  const { token, userId } = await loginResponse.json();

  // ISBN k odebrání - toto je proměnná která obsahuje ISBN knihy kterou chci odebrat, proto zde musí být stejné jako ta kterou jsem přidal v předchozím testu - avšak je to constatní proměnná protože se to nemění
  const isbnToRemove = '9781449325862';

  // DELETE request pro odebrání knihy - musím zde mít deleteResponse protože to je odebrání knihy a nemůže tám být jiné response
  const deleteResponse = await request.delete('https://demoqa.com/BookStore/v1/Book', {
    headers: {
      Authorization: `Bearer ${token}` // {token} má funkci autorizace pro přístup k API, ten dolarový znak zde znamená že se jedná o šablonový řetězec kde se může vložit proměnná do řetězce = šablonový řetězec znamená že se používají zpětné apostrofy místo obyčejných uvozovek a umožňuje vkládání výrazů do řetězce pomocí ${expression} což je užitečné pro dynamické vytváření řetězců
    },
    data: {
      isbn: isbnToRemove,
      userId: userId
    }
  });

  expect(deleteResponse.status()).toBe(204); //toBe znamená že to má být rovno 204 No Content = toBe jako rovno

  // Kkontrola že kniha již není v kolekci
  const userBooksResponse = await request.get(`https://demoqa.com/BookStore/v1/Books?userId=${userId}`, { //userBooksResponse znamená že to je response z GET requestu na endpoint vracející knihy uživatele
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  expect(userBooksResponse.status()).toBe(200);
  const userBooks = await userBooksResponse.json();
  if (Array.isArray(userBooks.books)) {
    expect(userBooks.books.find((b: any) => b.isbn === isbnToRemove)).toBeUndefined();
  }
});