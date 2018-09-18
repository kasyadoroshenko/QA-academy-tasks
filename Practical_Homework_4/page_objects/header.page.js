let productsMenuLocator = 'ul.navbar-nav li:nth-child(1) a'
//let administrationMenuLocator = 'ul.navbar-nav li:nth-child(2) a';
let administrationMenuLocator = 'ul.nav li:nth-of-type(2) a'
let xAdministrationMenuLocator = '/html/body/app/navbar/nav/div/div[2]/ul/li[2]/a'
// let xAdministrationMenuLocator = '/html/body/app/main/modules-navigator/products/div[2]/div/div[2]/div/button[1]'
let dropdownLocator = '.nav .dropdown div.user-data div:nth-of-type(2)'

class HeaderPage {
    constructor() { }

    getProductsMenu() {
        return element(by.css(productsMenuLocator))
    }

    getAdministrationMenu() {
        return element(by.css(administrationMenuLocator))
    }

    getAdministrationMenuX() {
        return element(by.xpath(xAdministrationMenuLocator))
    }

    getDropdown() {
        return element(by.css(dropdownLocator))
    }

    async isHeaderVisible() {
        // TODO: does it give proper result <Promise> AND <Promise>?
        return this.getProductsMenu().isDisplayed() &&
            this.getAdministrationMenu().isDisplayed()
    }

    async isButtonVisible() {
        return this.getAdministrationMenu().isDisplayed()
    }

    async isDropdownVisible() {
        return this.getDropdown().isDisplayed()
    }
    async openAdministrationMenu() {
        await this.getAdministrationMenu().click()

        return this
    }
}

module.exports = HeaderPage