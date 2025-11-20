
import test, { expect } from './fixtures/basePages';

// Testy pro screenshot stránku
test.describe('Screenshots', () => {
  // Každý test začíná otevřením stránky s alerty
  test.beforeEach(async ({ loginPage }) => { 
    await loginPage.gotoLoginPage();
    await loginPage.login();                      // přihlášení platným uživatelem
  });

  // Test 1: Viewport screenshot
  test('Viewport screenshots', async ({ page }) => { 
    await page.screenshot({ path: 'screenshots/viewport.png'});
  });

  /*Test 2: Full page screenshot*/
  test('Full page screenshot', async ({ page }) => { 
    await page.screenshot({ path: 'screenshots/fullpage.png'});
  });

  test('Element screenshot', async ({ page }) => { 
    await page.locator('#item_4_img_link').screenshot({ path: 'screenshots/element.png'});
  });
});

