let WebButton = require("../controls/web.button");
let WebTextInput = require("../controls/web.text-input");
let WebText = require("../controls/web.text");

class LoginPage {
    constructor() {
        this.loginButton = new WebButton(element(by.css('.login-button')), "Login Button");
        this.signInButton = new WebButton(element(by.css('.iframe-wrap .login-button')), "Sign In Button");
        this.emailTextInput = new WebTextInput(element(by.id('email')), "email text input");
        this.passwordTextInput = new WebTextInput(element(by.id('userPassword')), "password text input");
        this.userNameText = new WebText(element(by.css(".user-name")), 'user name text');
        this.emailErrorMessage = new WebText(element(by.css("#email~div>span")), 'email error message');
        this.passwordErrorMessage = new WebText(element(by.css("#userPassword~div>span")), 'password error message');
        this.toastMessageText = new WebText(element(by.css(".toast-message")), 'user name text');
    }

    async get() {
        await browser.get(`${browser.params.siteUrl}/login`);
    }

    async pressLogin() {
        await this.loginButton.click();
    }

    getEmailElem() {
        return this.emailTextInput;
    }

    async setEmail(email) {
        await this.emailTextInput.sendKeys(email);
    }

    async getEmailErrorMessage() {
        return await this.emailErrorMessage.getText();
    }


    getPasswordElem() {
        return this.passwordTextInput;
    }

    async setPassword(password) {
        await this.passwordTextInput.sendKeys(password);
    }

    async getPasswordErrorMessage() {
        return await this.passwordErrorMessage.getText();
    }

    async pressSignIn() {
        await this.signInButton.click();
    }

    async toasterMessage() {
        return await this.toastMessageText.getText();
    }
}

module.exports = LoginPage;