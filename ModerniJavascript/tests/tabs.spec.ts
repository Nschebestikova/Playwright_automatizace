
import test, { expect } from './fixtures/basePages';

test.describe('Tabs', () => {

  // Test 1: Multi tabs
  test.only('Multi tabs', async ({ page, context }) => { 
   await page.goto('https://demoqa.com');
   
   // create second tab
   const newTab = await context.newPage();
   await newTab.goto('https://saucedemo.com/');

   // bring demoqa to the front
    await page.bringToFront();

    await newTab.locator('#login-button').click();
    await page.close();
  });
});