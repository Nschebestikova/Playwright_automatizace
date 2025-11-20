import test, { expect } from './fixtures/basePages';


test.describe('Visual testing', () => {
  // Každý test začíná otevřením stránky s alerty
  test.beforeEach(async ({ loginPage }) => { 
    await loginPage.gotoLoginPage();                
  });

  // Test 1: Visual testing
  test(' Visual test login page', async ({ page }) => { 
    await expect(page).toHaveScreenshot({maxDiffPixels: 100});
  }); 
  })