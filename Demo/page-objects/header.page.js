let WebButton = require("../controls/web.button");
let WebTextInput = require("../controls/web.text-input");
let WebText = require("../controls/web.text");

let EC = protractor.ExpectedConditions;

class HeaderPage {
    constructor() {
        this.productText = new WebText(element(by.css(".gds-navigation > li:nth-child(1)")), 'product menu');
        this.administrationText = new WebText(element(by.css(".gds-navigation > li:nth-child(2)")), 'administration menu');
    }

    getProductsMenu() {
        return this.productText;
    }

    async goToProducts() {
     
        return await this.getProductsMenu().click();
    }

    getAdministrationMenu() {
        return this.administrationText;
    }

    async goToAdministration() {
        const productIsDisplayed = EC.visibilityOf(this.getAdministrationMenu().getBaseControlWebElement());
        await browser.waitForAngularEnabled(false);
        await browser.wait(productIsDisplayed, 5 * 1000);
        await this.getAdministrationMenu().click();
        await browser.waitForAngularEnabled(true);
    }

    async isHeaderVisible() {
        browser.waitForAngularEnabled(false);
        const productIsDisplayed = EC.visibilityOf(this.getProductsMenu().getBaseControlWebElement());

        await browser.wait(productIsDisplayed, 5 * 1000);

        const administrationIsDisplayed = EC.visibilityOf(this.getAdministrationMenu().getBaseControlWebElement());

        await browser.wait(administrationIsDisplayed, 5 * 1000);

        let rs = await this.getProductsMenu().isDisplayed()
            && await this.getAdministrationMenu().isDisplayed();
        browser.waitForAngularEnabled(true);
        return rs;
    }

}

module.exports = HeaderPage;