import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/#google_vignette');
  await page.locator('[id="google_ads_iframe_/21849154601,22343295815/Ad.Plus-300x250_0"]').contentFrame().locator('iframe[name="ad_iframe"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
  await page.getByRole('heading', { name: 'Forms' }).click();
  await page.getByText('Forms').click();
});