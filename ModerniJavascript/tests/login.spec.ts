import test, { expect } from './Fixtures/basePages';

// Testy pro login stránku
test.describe('Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  // Test 1: Úspěšné přihlášení se správnými údaji
  test('Successful login', async ({ page }) => {
    await page.locator('input#user-name').fill('standard_user');
    await page.locator('input#password').fill('secret_sauce');
    await page.locator('input#login-button').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  // Test 2: Platný username + neplatné heslo
  test.skip('Cannot login with valid username and invalid password', async ({ page, browserName }) => {
    test.skip(browserName === 'firefox', 'Still working on it');
    
    test.info().annotations.push({
      type: 'Test',
      description: 'This test will pass if the user is not able to login with valid username and invalid password'
    });

    await test.step('Enter valid username', async () => {
      await page.locator('input#user-name').fill('standard_user');
    });

    await test.step('Enter invalid password', async () => {
      await page.locator('input#password').fill('wrong_password');
    });

    await test.step('Click login button', async () => {
      await page.locator('input#login-button').click();
    });

    await test.step('Check error message visibility', async () => {
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    });
  });

  // Test 3: Neplatný username + platné heslo
  test.fixme('Cannot login with invalid username and valid password', async ({ page }) => {
    await page.locator('input#user-name').fill('invalid_user');
    await page.locator('input#password').fill('secret_sauce');
    await page.locator('input#login-button').click();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  // Test 4: Prázdná pole
  test('Cannot login with blank fields', async ({ page }) => {
    await page.locator('input#login-button').click();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });



  // Další mé přidané negativní testy 
  // Test 5: Locked out user
  test('Cannot login with locked out user', async ({ page }) => {
    await page.locator('input#user-name').fill('locked_out_user');
    await page.locator('input#password').fill('secret_sauce');
    await page.locator('input#login-button').click();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  // Test 6: Prázdné heslo
  test('Cannot login with blank field - password', async ({ page }) => {
    await page.locator('input#user-name').fill('standard_user');
    await page.locator('input#login-button').click();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
  // Test 6: Prázdné username
  test('Cannot login with blank field - username', async ({ page }) => {
    await page.locator('input#password').fill('secret_sauce');
    await page.locator('input#login-button').click();
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
});