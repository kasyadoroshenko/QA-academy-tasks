let ProductsPage = require('./products.page')

let loginBtnLocator = '.login-panel .login-button';
let emailInputLocator = '#email';
let passInputLocator = '#userPassword';
let signInBtnLocator = '.iframe-wrap .login-button';
let loginErrorMessage = '.toast-error .toast-message';
let logoutDropdown = '.dropdown-toggle  .caret'
let logoutButton = 'ul.dropdown-menu .dropdown-item'

class LoginPage {
    constructor() { }

    getLoginBtn() {
        return element(by.css(loginBtnLocator))
    }

    getEmailInput() {
        return element(by.css(emailInputLocator))
    }

    getPassInput() {
        return element(by.css(passInputLocator))
    }

    getSignInBtn() {
        return element(by.css(signInBtnLocator))
    }

    getErrorMessage() {
        return element(by.css(loginErrorMessage))
    }

    getLogoutDropdown() {
        return element(by.css(logoutDropdown))
    }

    getLogoutButton() {
        return element(by.css(logoutButton))
    }

    async open() {
        browser.driver.manage().window().maximize()
        await browser.get('http://eds_university.eleks.com')
        return this
    }

    async login(email, pass) {
        await this.getLoginBtn().click()
        await this.getEmailInput().sendKeys(email)
        await this.getPassInput().sendKeys(pass)
        await this.getSignInBtn().click()

        return new ProductsPage()
    }

    async loginError(email, pass) {
        await this.getLoginBtn().click()
        await this.getEmailInput().sendKeys(email)
        await this.getPassInput().sendKeys(pass)
        await this.getSignInBtn().click()

        return this
    }

    async logout() {
        await this.getLogoutDropdown().click()
        await this.getLogoutButton().click()

        return this
    }
}

module.exports = LoginPage