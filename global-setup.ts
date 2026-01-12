import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Login process
  await page.goto('https://demoq.com');
  await page.fill('input[name="username"]', 'nikca');
  await page.fill('input[name="password"]', 'nikca123');
  await page.click('button[type="submit"]');
  
  // Save auth state
  await page.context().storageState({ path: 'auth.json' });
  await browser.close();
}

export default globalSetup;
