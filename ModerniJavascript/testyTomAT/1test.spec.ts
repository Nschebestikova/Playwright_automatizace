
import test, { expect } from '../tests/Fixtures/basePages'; //TOTO JE IMPORTOVÁNO Z BASEPAGES TS, KDE JE TO DEFINOVÁNO testTomAT MAJÍCÍ LoginPage A HomePage MAJÍCÍ SPRÁVNÉ CESTY  A JAK MAJÍ PRACOVAT S PAGE OBJECTY - JSOU TAM OBSAŽENÉ TESTY PRO TOMAT A OVSAHEM JE I EXPECT -OČEKÁVÁNÍ

/*Vyhledání knihy a validace výsledků
Cíl: Automatizovat vyhledání konkrétního názvu knihy a ověřit výsledky.
Kroky:
Přejít na stránku s knihami
Do vyhledávacího pole zadat název knihy (např. „Git Pocket Guide“)
Ověřit, že výsledky obsahují alespoň jednu knihu se zadaným názvem
Ověřit, že nesouvisející knihy se ve výsledcích neobjeví
Ověřované dovednosti:
Práce se selektory (input, řádky tabulky)
Zvládání dynamického UI (filtrování)
Assertions a ověřování výsledků*/


//TEST 1 - VYHLEDÁNÍ KNIHY A VALIDACE VÝSLEDKŮ
test.describe('Vyhledání knihy a validace výsledků', () => {
    test('test', async ({ page }) => {
      await page.goto('https://demoqa.com');
      await page.locator('xpath=//div[@class="category-cards"]/div[5]').click(); //kliknutí na button Books
    });
});