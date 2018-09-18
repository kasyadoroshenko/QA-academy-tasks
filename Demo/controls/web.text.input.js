let WebControl = require("../base/web.control");

class WebTextInput extends WebControl {
    constructor(webElement, title) {
        super(webElement, title);
    }
	
    async sendKeys (text) {
		await this.initializeWebControl();
 		console.log(`Send \"${text}\" to ${this.constructor.name} \"${this.controlTitle}\"`);
		await this.getBaseControlWebElement().clear().sendKeys(text);
    }
}

module.exports = WebTextInput;