const LoginPage = require('./../page-objects/login.page');
const ProductsPage = require('./../page-objects/products.page');
const ProductPage = require('./../page-objects/product.page');
const HeaderPage = require('./../page-objects/header.page');
const ToasterMessage = require('./../components/toaster-messages');
const generatedNumber = new Date().valueOf();

let productName = `Ilona-Vasylyshyn automation ${generatedNumber}`;

const productFamily = 'Ilona_Vasylyshyn Product Family 1';
const productFamily2 = 'Ilona_Vasylyshyn Product Family 2';

fdescribe('Product Functionality: ', () => {
    before(async () => {
        await browser.restart();
    });

    it('Change product Family.', async () => {
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
        await allure.createStep("Check if product exist", async () => {
            const productExist = await productPage.hasProduct(productName);

            expect(productExist).toBe(true);
        })();

        await allure.createStep("select product", async () => {
            const productNameView = await productPage.getProductNameView();

            if (productNameView !== productName) {
                await productPage.selectProduct(productName);
            }
        })();

        await allure.createStep("change product name", async () => {
            await productPage.pressEdit();
            await productPage.setProductFamily(productFamily2);
        })();

        await allure.createStep("Press save product",
            async () => {
                await productPage.pressSaveEdit();
                const productView = await productPage.getProductFamilyView();

                expect(productView).toBe(productFamily2);
            })();
    });
});