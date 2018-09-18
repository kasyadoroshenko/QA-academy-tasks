let WebButton = require("../controls/web.button");
let WebText = require("../controls/web.text");
let WebTextInput = require("../controls/web.text-input");
let WebDropdown = require("../controls/web.dropdown");

let EC = protractor.ExpectedConditions;

class ProductPage {
    constructor() {
        this.newProductBtn = new WebButton(element(by.xpath('//*[text()="Add New Product"]')), 'add new product');
        this.productEditBtn = new WebButton(element(by.css('.section__group  .gds-edit-icon')), 'edit product');

        this.productNameTextInput = new WebTextInput(element(by.id('product-name')), 'product name input');
        this.productNameTextError = new WebText(element(by.css('.validation-message__name')), 'product name error');
        this.productNameView = new WebText(element(by.css('.section-title__details-name')), 'product name view');

        this.productFamilyDropdown = new WebDropdown(element(by.css('.product-family-list .dropdown')), 'product family dropdown');
        this.productFamilyView = new WebText(element(by.css('[for="change-product-family-list"]+.content-container')), 'product family view');
        this.productFamilyTextError = new WebText(element(by.css('.edit-poduct-family-list .validation-message')), 'product family error');

        this.descriptionView = new WebText(element(by.css('[for="Description"]+textarea-editor .content-container')), 'product description view');

        this.createBtn = new WebButton(element(by.id('saveProductAdd')), 'product create button');
        this.editBtn = new WebButton(element(by.id('saveProductEdit')), 'product edit button');

        this.deleteBtn = new WebButton(element(by.css('.section__group .gds-delete-icon')), 'product delete button');
        this.confirmDeleteBtn = new WebButton(element(by.css('.fade.in .modal-dialog .gds-btn-danger')), 'product confirm delete button');
    }

    async goToCreate() {
        await browser.waitForAngularEnabled(false);
        const productBtnISClickable = EC.elementToBeClickable(this.newProductBtn.getBaseControlWebElement());

        await browser.wait(productBtnISClickable, 5 * 1000);
        await this.newProductBtn.click();
        await browser.waitForAngularEnabled(true);
    }

    async pressSave() {
        await browser.waitForAngularEnabled(false);
        const awailableButton = EC.elementToBeClickable(this.createBtn.getBaseControlWebElement());

        await browser.wait(awailableButton, 5 * 1000);
        await this.createBtn.click();
        await browser.waitForAngularEnabled(true);
    }

    async pressSaveEdit() {
        await browser.waitForAngularEnabled(false);
        const awailableButton = EC.elementToBeClickable(this.editBtn.getBaseControlWebElement());

        await browser.wait(awailableButton, 5 * 1000);
        await this.editBtn.click();
        await browser.waitForAngularEnabled(true);
    }

    async pressDelete() {
        await browser.waitForAngularEnabled(false);
        const awailableButton = EC.elementToBeClickable(this.deleteBtn.getBaseControlWebElement());

        await browser.wait(awailableButton, 5 * 1000);
        await this.deleteBtn.click();
        await browser.waitForAngularEnabled(true);
    }

    async pressConfirmDelete() {
        await browser.waitForAngularEnabled(false);
        const awailableButton = EC.elementToBeClickable(this.confirmDeleteBtn.getBaseControlWebElement());

        await browser.wait(awailableButton, 5 * 1000);
        await this.confirmDeleteBtn.click();
        await browser.waitForAngularEnabled(true);
    }

    async pressEdit() {
        await browser.waitForAngularEnabled(false);
        const awailableButton = EC.elementToBeClickable(this.productEditBtn.getBaseControlWebElement());

        await browser.wait(awailableButton, 5 * 1000);
        await this.productEditBtn.click();
        await browser.waitForAngularEnabled(true);
    }

    async hasProduct(name) {
        await browser.waitForAngularEnabled(false);
        const elem = element(by.xpath(`//div[@class='section__left']//li[contains(@class,'preview-list__item')]/a[text()="${name}"]`));
        const elemIsExist = EC.presenceOf(elem);

        await browser.wait(elemIsExist, 10 * 1000);
        const rs = elem.isPresent();

        await browser.waitForAngularEnabled(true);

        return rs;
    }

    async selectProduct(name) {
        await browser.waitForAngularEnabled(false);
        const elem = element(by.xpath(`//div[@class='section__left']//li[contains(@class,'preview-list__item')]/a[text()="${name}"]`));
        const elemIsExist = EC.presenceOf(elem);

        await browser.wait(elemIsExist, 5 * 1000);
        elem.click();
        await browser.waitForAngularEnabled(true);
    }

    async setProductName(name) {
        await browser.waitForAngularEnabled(false);
        await this.productNameTextInput.sendKeys(name);
        await browser.waitForAngularEnabled(true);
    }

    async getProductNameView() {
        await browser.waitForAngularEnabled(false);
        const rs = await this.productNameView.getText();

        await browser.waitForAngularEnabled(true);
        return rs;
    }

    async getProductNameError() {
        await browser.waitForAngularEnabled(false);
        let rs = await this.productNameTextError.getText();
        await browser.waitForAngularEnabled(true);
        return rs;
    }

    async setProductFamily(name) {
        await browser.waitForAngularEnabled(false);
        const optionElem = element(by.xpath(`//*[@class="product-family-list"]//li//span[contains(., "${name}")]`));
        // const awailableButton = EC.visibilityOf(optionElem);

        // await browser.wait(awailableButton,  5 * 1000);
        await this.productFamilyDropdown.selectOptionByElement(optionElem);
        await browser.waitForAngularEnabled(true);
    }

    async getProductFamilyView(name) {
        await browser.waitForAngularEnabled(false);
        const rs = await this.productFamilyView.getText();

        await browser.waitForAngularEnabled(true);
        return rs;
    }


    async getProductFamilyError() {
        await browser.waitForAngularEnabled(false);
        let rs = await this.productFamilyTextError.getText();
        await browser.waitForAngularEnabled(true);
        return rs;
    }

    async setDescription(text) {
        await browser.waitForAngularEnabled(false);
        await browser.switchTo().frame(element(by.xpath('//label[text()="Description"]/following-sibling::textarea-editor//iframe')));
        const textareaDescription = new WebTextInput(element(by.css('body p')), 'description body');

        await textareaDescription.sendKeys(text);
        await browser.switchTo().defaultContent();
        await browser.waitForAngularEnabled(true);
    }

    async setProductDescription(description) {
        browser.executeScript(function (arg) {
            window.CKEDITOR.instances.editor1.setData(arg);
        }, description);
    }

    async getProductDescription() {
        await browser.waitForAngularEnabled(false);
        const rs = await this.descriptionView.getText();

        await browser.waitForAngularEnabled(true);
        return rs;
    }

    async setProductRepository(description) {
        // CKEDITOR.instances.editor2.setData("qweqweqweqweqweqweqweqweqws")
        browser.executeScript(function (arg) {
            window.CKEDITOR.instances.editor2.setData(arg);
        }, description);
    }
}

module.exports = ProductPage;