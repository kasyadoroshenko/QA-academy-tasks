const LoginPage = require('./../page-objects/login.page');
const ProductsPage = require('./../page-objects/products.page');
const ProductPage = require('./../page-objects/product.page');
const HeaderPage = require('./../page-objects/header.page');
const ToasterMessage = require('./../components/toaster-messages');
const generatedNumber = new Date().valueOf();

let productName = `JS_Demo_2018 ${generatedNumber}`;

const productFamily = 'JS_Demo_2018 Product Family 1';
const productFamily2 = 'JS_Demo_2018 Product Family 2';

fdescribe('Change Product Name: ', () => {
    before(async () => {
        await browser.restart();
    });

    
    it('Change product name.', async () => {
        const loginPage = new LoginPage();
        const headerPage = new HeaderPage();
        const productPage = new ProductPage();
        const toasterMessage = new ToasterMessage();

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep(`Login to web-system with email "${browser.params.credentials.login}" and password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.login(browser.params.credentials.login, browser.params.credentials.password);

                expect(await headerPage.isHeaderVisible()).toEqual(true);
            }
        )();
        await allure.createStep("Go to Administration page", async () => await headerPage.goToAdministration())();
        
        await allure.createStep("select product", async () => {
            const productNameView = await productPage.getProductNameView();

            if (productNameView !== productName) {
                await productPage.selectProduct(productName);
            }
        })();

        await allure.createStep("change product name", async () => {
            await productPage.pressEdit();
            productName += ' new';
            await productPage.setProductName(productName);
        })();

        await allure.createStep("Press save product",
            async () => {
                await productPage.pressSaveEdit();
                expect(await productPage.hasProduct(productName)).toBe(true);
            })();
    });
});
