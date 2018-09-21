const LoginPage = require('./../page-objects/login.page');
const ProductsPage = require('./../page-objects/products.page');
const ProductPage = require('./../page-objects/product.page');
const HeaderPage = require('./../page-objects/header.page');
const ToasterMessage = require('./../components/toaster-messages');
const generatedNumber = new Date().valueOf();

let productName = `JS_Demo_2018 ${generatedNumber}`;

const productFamily = 'JS_Demo_2018 Product Family 1';
const productFamily2 = 'JS_Demo_2018 Product Family 2';

fdescribe('Product Family Is Not Selected: ', () => {
    before(async () => {
        await browser.restart();
    });
    
    it('Product should not be created. Product Family should be selected', async () => {
        const loginPage = new LoginPage();
        const headerPage = new HeaderPage();
        const productPage = new ProductPage();
        const productDescription = "product automation description";
        const productRepository = "product repository description";

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep(`Login to web-system with email "${browser.params.credentials.login}" and password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.login(browser.params.credentials.login, browser.params.credentials.password);

                expect(await headerPage.isHeaderVisible()).toEqual(true);
            }
        )();
        await allure.createStep("Go to Administration page", async () => await headerPage.goToAdministration())();
        await allure.createStep("Press create product", async () => await productPage.goToCreate())();
        await allure.createStep(`Enter product fields:  productName: "${productName}" productFamily: "${productFamily}"`,
            async () => {
                await productPage.setProductName(productName);
                await productPage.setProductDescription(productDescription);
                await productPage.setProductRepository(productRepository);
            }
        )();
        await allure.createStep("Press save product",
            async () => {
                await productPage.pressSave();
                const errorMessage = await productPage.getProductFamilyError();

                expect(errorMessage.trim()).toEqual('Product Family is required.');
            }
        )();
    });
});