
import test, { expect } from './fixtures/basePages';

// Testy pro alert stránky
test.describe('Alert Tests', () => {
  // Každý test začíná otevřením stránky s alerty
  test.beforeEach(async ({ page }) => { 
    await page.goto('https://demoqa.com/alerts');
  });

  // Test 1: Simple alert
  test('Simple alert', async ({ page }) => { 
    page.on('dialog', async dialog => {
      await dialog.accept();
    });
    await page.locator('#alertButton').click();
  });
// Test 2: Confirm alert
  test('Confirm alert', async ({ page }) => { 
    page.on('dialog', async dialog => {
      await dialog.dismiss();
    });
    await page.locator('#confirmButton').click();
    await expect(page.locator('#confirmResult')).toHaveText('You selected Cancel');
  });
// Test 3: Prompt alert
  test('Prompt alert', async ({ page }) => {
    page.on('dialog', async dialog => {
      await dialog.accept('Skillmea');
    });
    await page.locator('#promtButton').click();
    await expect(page.locator('#promptResult')).toHaveText('You entered Skillmea');
  });
});
