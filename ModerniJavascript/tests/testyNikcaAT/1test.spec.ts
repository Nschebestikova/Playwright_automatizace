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
  await page.locator('.card-body:has-text("Book Store Application")').click(); // jedna z možností je zde vložit cad-body jako class co obsahuje text Book Store Application
  await expect(page.locator('input#searchBox')).toBeVisible(); // tOBeVisible = ověření že je prvek viditelný
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








/* *****************
Přejít v menu na Text Box
Vyhledání polí ve formuláři
Vyplnění TextBox formuláře  a odeslání tlačítkem submit
Validace údajů v potvrzovacím dialogu
Správné vyplnění všech polí a odeslání formuláře
Ověření, že potvrzovací dialog obsahuje správné údaje
Cíl: Validace správnosti formuláře
*/

// TEST 4 - SPRÁVNÉ VYPLNĚNÍ TEXTBOX FORMULÁŘE A ODESLÁNÍ
test('Správné vyplnění TextBox formuláře a odeslání', async ({ page }) => {
  await page.goto('https://demoqa.com');
  await page.locator('.card-body:has-text("Elements")').click();
  await page.locator('span:has-text("Text Box")').click();

  // Vyplnění formuláře
  await page.locator('input#userName').fill('Nikola Štěpánová'); // fill znamená vyplnit
  await page.locator('input#userEmail').fill('nikola.stepanova@example.com');
  await page.locator('textarea#currentAddress').fill('Hlavní 123, Ostrava');
  await page.locator('textarea#permanentAddress').fill('Vedlejší 456, Praha'); // teyxtarea je pro větší textová pole a je to selektor a za nám dávám id pomocí # a konkrétní název id
  expect(page.locator('input#userName')).toHaveValue('Nikola Štěpánová'); // Ověření, že pole Name bylo správně vyplněno
  expect(page.locator('input#userEmail')).toHaveValue('nikola.stepanova@example.com');
  expect(page.locator('textarea#currentAddress')).toHaveValue('Hlavní 123, Ostrava');
  expect(page.locator('textarea#permanentAddress')).toHaveValue('Vedlejší 456, Praha'); //tady bych ráda, jak to napsat, aby tam nebyly na tvrdo data, která se mohou měnit... 


  // Odeslání formuláře
  await page.locator('button#submit').click();

 //Kontrola vložených dat po odeslání
  await expect(page.locator('p#name')).toHaveText('Name:Nikola Štěpánová');
  await expect(page.locator('p#email')).toHaveText('Email:nikola.stepanova@example.com');
  await expect(page.locator('p#currentAddress')).toHaveText('Current Address :Hlavní 123, Ostrava');
  await expect(page.locator('p#permanentAddress')).toHaveText('Permananet Address :Vedlejší 456, Praha');
});









/* ******************************************** */
// TEST 5 ALE NAPSANÝ S PROMĚNNÝMI - PRO OVĚŘENÍ VLOŽENÝCH DAT PO ODESLÁNÍ
test('Correct filling and submission of TextBox form with variables', async ({ page }) => {
   // Use let – we change the data during the test
  let name = 'Nikola Štěpánová';
  let email = 'nikola.stepanova@example.com';
  let currentAddress = 'Hlavní 123, Ostrava';
  let permanentAddress = 'Vedlejší 456, Praha';

  await page.goto('https://demoqa.com'); // TADY PŘEJDEME NA STRÁNKU 
  await page.locator('.card-body:has-text("Elements")').click();
  await page.locator('span:has-text("Text Box")').click(); //kliknutí na Text Box v levém menu

  // Fill the form for the first time
  await page.locator('#userName').fill(name);
  await page.locator('#userEmail').fill(email);
  await page.locator('#currentAddress').fill(currentAddress);
  await page.locator('#permanentAddress').fill(permanentAddress);

  // Verification of the first set of values
  await expect(page.locator('#userName')).toHaveValue(name);
  await expect(page.locator('#userEmail')).toHaveValue(email);
  await expect(page.locator('#currentAddress')).toHaveValue(currentAddress);
  await expect(page.locator('#permanentAddress')).toHaveValue(permanentAddress);

  // Use let – we change the data during the test
  name = 'Testerka Nikča';
  email = 'tester.nikca@example.com';
  currentAddress = 'Nová 789, Brno';
  permanentAddress = 'Konečná 999, Plzeň';

  // Clear the form and fill in new values
  await page.locator('#userName').fill(name);
  await page.locator('#userEmail').fill(email);
  await page.locator('#currentAddress').fill(currentAddress);
  await page.locator('#permanentAddress').fill(permanentAddress);

  // Values verification of the new set
  await expect(page.locator('#userName')).toHaveValue(name);
  await expect(page.locator('#userEmail')).toHaveValue(email);
  await expect(page.locator('#currentAddress')).toHaveValue(currentAddress);
  await expect(page.locator('#permanentAddress')).toHaveValue(permanentAddress);

  // Sent form
  await page.locator('#submit').click();

  // Control output
  await expect(page.locator('p#name')).toHaveText(`Name:${name}`);
  await expect(page.locator('p#email')).toHaveText(`Email:${email}`);
  await expect(page.locator('p#currentAddress')).toHaveText(`Current Address :${currentAddress}`);
  await expect(page.locator('p#permanentAddress')).toHaveText(`Permananet Address :${permanentAddress}`);
});






// TEST 5 ALE NAPSANÝ S PROMĚNNÝMI a s použítím IF a ELSE - NENÍ NUTNÉ ALE PRO OVĚŘENÍ VLOŽENÝCH DAT PO ODESLÁNÍ
test('Correct filling and submission of TextBox form with variables and conditional checks', async ({ page }) => {
   // Use let – we change the data during the test
  let name = 'Nikola Štěpánová'; // toto jsou PROMĚNNÉ S POMOCÍ LET, PROTOŽE LET ZNAMENÁ ŽE SE HODNOTA MŮŽE BĚHEM TESTU MĚNIT
  let email = 'nikola.stepanova@example.com';
  let currentAddress = 'Hlavní 123, Ostrava';
  let permanentAddress = 'Vedlejší 456, Praha';

  await page.goto('https://demoqa.com'); // TADY PŘEJDEME NA STRÁNKU 
  await page.locator('.card-body:has-text("Elements")').click(); // TADY KLIKNEME NA ELEMENTS
  await page.locator('span:has-text("Text Box")').click(); //kliknutí na Text Box v levém menu
  // Fill the form for the first time
  await page.locator('#userName').fill(name); // TADY VYPLNÍME JMÉNO PODLE PROMĚNNÉ name
  await page.locator('#userEmail').fill(email); // TADY VYPLNÍME EMAIL PODLE PROMĚNNÉ email
  await page.locator('#currentAddress').fill(currentAddress);
  await page.locator('#permanentAddress').fill(permanentAddress);

  // Verification of the first set of values with conditional checks  - TADY POUŽIJEME IF A ELSE PRO OVĚŘENÍ ŽE JSOU DATA SPRÁVNĚ VLOŽENA
  if ((await page.locator('#userName').inputValue()) === name) {
    console.log('Name field is correctly filled.');
  } else {
    console.error('Name field is incorrectly filled.');
  }
  if ((await page.locator('#userEmail').inputValue()) === email) {
    console.log('Email field is correctly filled.');
  } else {
    console.error('Email field is incorrectly filled.');
  }
  if ((await page.locator('#currentAddress').inputValue()) === currentAddress) {
    console.log('Current Address field is correctly filled.');
  } else {
    console.error('Current Address field is incorrectly filled.');
  }
  if ((await page.locator('#permanentAddress').inputValue()) === permanentAddress) {
    console.log('Permanent Address field is correctly filled.');
  } else {
    console.error('Permanent Address field is incorrectly filled.');
  }
 // SENT FORM
  await page.locator('#submit').click(); // TÍMTO PŘÍKAZEM ODEŠLEME FORMULÁŘ

  // Control output - TADY ZKONTROLUJEME VÝSTUPNÍ DATA
  await expect(page.locator('p#name')).toHaveText(`Name:${name}`);
  await expect(page.locator('p#email')).toHaveText(`Email:${email}`);
  await expect(page.locator('p#currentAddress')).toHaveText(`Current Address :${currentAddress}`);
  await expect(page.locator('p#permanentAddress')).toHaveText(`Permananet Address :${permanentAddress}`);
});
