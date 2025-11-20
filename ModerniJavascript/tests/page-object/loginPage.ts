import {Locator,Page} from '@playwright/test';

// POM na login page
export class LoginPage {
     page: Page;
    userNameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    invalidCredentialsErrorMessage: Locator;
    requiredCredentialsErrorMessage: Locator;
    lockedOutErrorMessage: Locator;

    
 // inicializace locatorů
    constructor(page: Page){
        this.page = page;
        this.userNameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
        this.invalidCredentialsErrorMessage = page.getByText('Epic sadface: Username and password do not match any user in this service');
        this.requiredCredentialsErrorMessage = page.getByText('Epic sadface: Username is required');
        this.lockedOutErrorMessage = page.getByText('Epic sadface: Sorry, this user has been locked out.');
        
    }
//vstup na stránku
    async gotoLoginPage () {
        await this.page.goto('https://www.saucedemo.com/');
    }
//validní přihlášení na standart_user
    async enterValidUserName() {
        await this.userNameInput.fill('standard_user');
    }
//nevalidní přihlášení na stadart_user1
     async enterInvalidUserName() {
        await this.userNameInput.fill('standard_user1');
    }
// přihlášování na locked_out_user
      async enterLockedOutUser() {
        await this.userNameInput.fill('locked_out_user');
    }
//validní heslo
     async enterValidPassword() {
        await this.passwordInput.fill('secret_sauce');
    }
// nevalidní heslo
     async enterInvalidPassword() {
        await this.passwordInput.fill('wrong_password');
    }

//potvrzení přihlášení   
     async clickLoginButton() {
        await this.loginButton.click();
    }

 // kontrola přihlášení   
    async login (){
       await this.userNameInput.fill('standard_user');
       await this.passwordInput.fill('secret_sauce');
       await this.loginButton.click();
    }
}