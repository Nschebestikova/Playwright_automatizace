import { expect, Locator, Page } from '@playwright/test';

export class DemoQAHomePage {
    page: Page;
    bookStoreCard: Locator;
    headerTitle: Locator;
    searchBox: Locator;

    constructor(page: Page) {
        this.page = page;
        this.bookStoreCard = page.locator('xpath=//div[@class="category-cards"]/div[5]');
        this.headerTitle = page.locator('div.main-header');
        this.searchBox = page.locator('#searchBox');
    }

    // Vstup na stránku
    async navigate() {
        await this.page.goto('https://demoqa.com/');
    }

    async clickItem() {
        await this.bookStoreCard.click();
    }

    async getHeaderTitleText() {
        return await this.headerTitle.textContent();
    }
}

export class BookStorePage {
    page: Page;
    searchBox: Locator;
    bookTitleInTable: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBox = page.locator('#searchBox');
        this.bookTitleInTable = page.locator('div.rt-td');
    }

    async searchBook(title: string) {
        await this.searchBox.click();
        await this.searchBox.fill(title);
        await this.searchBox.press('Enter');
    }

    async validateBookVisible(title: string) {
        await expect(this.bookTitleInTable.filter({ hasText: title })).toBeVisible();
    }
}