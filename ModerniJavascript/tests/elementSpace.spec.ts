import { test, expect } from '@playwright/test';
import { only } from 'node:test';

test.only('Element state', async ({ page }) => {
  await page.goto('http://www.saucedemo.com');
  console.log(await page.locator('#user-name').isEditable());
  console.log(await page.locator('#password').isVisible());
  console.log(await page.locator('#login-button').isHidden());
});