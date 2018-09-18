class WebControl {

    constructor(baseControlWebElement, title) {
        if (new.target === WebControl) {
            throw new TypeError("Cannot construct Abstract WebControl instances directly");
        }
        this._baseControlWebElement = baseControlWebElement;
        this.controlTitle = title;
    }

    getBaseControlWebElement() {
        if (this._baseControlWebElement) {
            return this._baseControlWebElement;
        } else {
            throw new Error(`Web Control \"${this.controlTitle}\" is \"Undefined\"`);
        }
    }

    async initializeWebControl() {
        console.log(`Initialising \"${this.controlTitle}\" ${this.constructor.name} control`)
        return await browser.wait(ExpectedConditions.presenceOf(this.getBaseControlWebElement()), browser.params.implicitWait
            , `\"${this.controlTitle}\" is not located ${this.getBaseControlWebElement().locator()}`);
    };

    async click() {
        await this.initializeWebControl();
        console.log(`Click on ${this.constructor.name} \"${this.controlTitle}\"`)
        await this.getBaseControlWebElement().click();
    }

    async isDisplayed () {
        await this.initializeWebControl();
        return await this.getBaseControlWebElement().isDisplayed();
    }
};

module.exports = WebControl;