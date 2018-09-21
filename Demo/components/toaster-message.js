let WebText = require("../controls/web.text");
let EC = protractor.ExpectedConditions;
let timeToWaitElement = 5 * 1000;

class ToasterMessage {
    constructor() {
        this.toastSuccessMessage = new WebText(element(by.css(".toast-success .toast-message")), 'toaster message');
        this.toastErrorMessage = new WebText(element(by.css(".toast-error")), 'user name text');
    }

    async getSuccessMessage() {
        await browser.waitForAngularEnabled(false);
        const elementExist = EC.presenceOf(this.toastSuccessMessage.getBaseControlWebElement());

        await browser.wait(elementExist, timeToWaitElement);

        const text = await this.toastSuccessMessage.getText();
        await browser.waitForAngularEnabled(true);
        return text;
    }

    async hasErrorMessage() {
        await browser.waitForAngularEnabled(false);
        const elementExist = EC.presenceOf(this.toastErrorMessage.getBaseControlWebElement());

        await browser.wait(elementExist, timeToWaitElement);

        const text = await this.toastErrorMessage.getText();
        await browser.waitForAngularEnabled(true);
        return text;
    }
}

module.exports = ToasterMessage;