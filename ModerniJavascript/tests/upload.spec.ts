
import test, { expect } from './fixtures/basePages';

// Testy pro alert stránky
test.describe('Upload', () => {
  // Každý test začíná otevřením stránky s alerty
  test.beforeEach(async ({ page }) => { 
    await page.goto('https://https://demoqa.com/upload-download');
  });

  // Test 1: Upload file
  test('Upload file', async ({ page }) => { 
    await page.locator('#uploadFile').setInputFiles(['./Zdrojaky/textfile.txt']);
    await expect(page.locator('#uploadedFilePath')).toBeVisible();
    });
});