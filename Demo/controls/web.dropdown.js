let WebControl = require("../base/web.control");

class WebDropdown extends WebControl {
    constructor(webElement, title) {
        super(webElement, title);
    }

    async selectOptionByElement(element) {
    	await this.initializeWebControl();
    	await this.getBaseControlWebElement().click();
    	await element.click();
    }
}

module.exports = WebDropdown;