const LoginPage = require('./../page-objects/login.page');
const ProductsPage = require('./../page-objects/products.page');

describe('Login Functionality', () => {

    before(async () => {
        await browser.restart();
    });

    it('User should be able to login to eds_university.eleks.com', async () => {
        const loginPage = new LoginPage();
        const productsPage = new ProductsPage();

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep("Click login button", async () => await loginPage.pressLogin())();
        await allure.createStep(`Enter valid email "${browser.params.credentials.login}", password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.setEmail(browser.params.credentials.login);
                await loginPage.setPassword(browser.params.credentials.password);
            }
        )();
        await allure.createStep("Click Sign In button", async () => {
            await loginPage.pressSignIn();
            let name = await productsPage.getUserName();

            expect(name).toEqual(`${browser.params.user.firstName} ${browser.params.user.lastName}`);
        })();
    });
}); 