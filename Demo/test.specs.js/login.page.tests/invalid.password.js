const LoginPage = require('./../page-objects/login.page');
const ProductsPage = require('./../page-objects/products.page');

describe('Login Functionality', () => {

    before(async () => {
        await browser.restart();
    });

    it('User is not able to login with invalid password', async () => {
        const loginPage = new LoginPage();
        const productsPage = new ProductsPage();

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep("Click login button", async () => await loginPage.pressLogin())();
        await allure.createStep(`Enter invalid email "${browser.params.credentials.login}", password "shopopalo"`,
            async () => {
                await loginPage.setEmail(browser.params.credentials.login);
                await loginPage.setPassword("shopopalo");
            }
        )();
        await allure.createStep("Click Sign In button",
            async () => {
                await loginPage.pressSignIn();

                const errorMessage = await loginPage.toasterMessage();

                expect(errorMessage).toEqual('Login or password is not correct');
            }
        )();
    });
});