let WebText = require("../controls/web.text");
 class ProductPage {
let EC = protractor.ExpectedConditions;
 class ProductsPage {
	constructor () {
        this.userNameText = new WebText(element(by.css(".user-name")), 'user name text');
        this.userNameText = new WebText(element(by.css(".user-data .user-name")), 'user name text');
	}
 	getUserName () {
		return this.userNameText.getText();
	async getUserName () {
		await browser.waitForAngularEnabled(false);
		const productIsDisplayed = EC.visibilityOf(this.userNameText.getBaseControlWebElement());
 		await browser.wait(productIsDisplayed,  5 * 1000);
 		let rs = await this.userNameText.getText();
		await browser.waitForAngularEnabled(true);
		return rs;
	}
}
 module.exports = ProductPage; 
module.exports = ProductsPage; 