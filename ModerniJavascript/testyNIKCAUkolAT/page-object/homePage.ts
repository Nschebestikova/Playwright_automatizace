import {Locator,Page} from '@playwright/test';

export class HomePage{
    page: Page;
    menu: Locator;
    title: Locator;
    item: Locator;
    addToCart: Locator;
    cartBadge: Locator;
    productPage: Locator;
    backToProductsButton: Locator;


    constructor(page: Page){
        this.page = page;
        this.menu = page.locator('#react-burger-menu-btn');
        this.title = page.getByText('Swag Labs');
        this.item = page.locator('#inventory_item_name');
        this.addToCart = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.productPage = page.getByText('Sauce Labs Backpack');
        this.backToProductsButton = page.locator('#back-to-products');
    }

//vstup na stránku
    async clickOnMenu () {
        await this.menu.click();
    }

    async clickItem() {
        await this.item.click();
    }

    async clickOnaddToCart() {
        await this.addToCart.click();
    }

}


export class CartPage {
    page: Page;
    cartTitle: Locator;
    checkoutButton: Locator;
    continueShoppingButton: Locator;
    removeItemButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartTitle = page.getByText('Your Cart');
        this.checkoutButton = page.locator('#checkout');
        this.continueShoppingButton = page.locator('#continue-shopping');
        this.removeItemButton = page.locator('#remove-sauce-labs-backpack');
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }

    async clickContinueShoppingButton() {
        await this.continueShoppingButton.click();
    }

    async removeItemFromCart() {
        await this.removeItemButton.click();
    }
}