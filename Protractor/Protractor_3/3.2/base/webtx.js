let WebControl = require("../base/web.control");

class WebTextInput extends WebControl {
    constructor(webElement, title) {
        super(webElement, title);
    }
	
    async getText () {
		await this.initializeWebControl();
 		console.log(`Get text from  \"${this.controlTitle}\"`);
		return this.getBaseControlWebElement().getText();
    }
}

module.exports = WebTextInput;