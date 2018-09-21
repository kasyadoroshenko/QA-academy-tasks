const LoginPage = require('./../page-objects/login.page');
const ProductsPage = require('./../page-objects/products.page');

describe('Login Functionality', () => {

    before(async () => {
        await browser.restart();
    });

    it('User is not able to login with invalid email', async () => {
        const loginPage = new LoginPage();
        const productsPage = new ProductsPage();

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep("Click login button", async () => await loginPage.pressLogin())();
        await allure.createStep(`Enter invalid email "shopopalo@gmail.com", password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.setEmail("shopopalo@gmail.com");
                await loginPage.setPassword(browser.params.credentials.password);
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