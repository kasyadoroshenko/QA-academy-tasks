const LoginPage = require('./../page-objects/login.page');
const ProductsPage = require('./../page-objects/products.page');

describe('Login Functionality', () => {

    before(async () => {
        await browser.restart();
    });

    it('User should not be able to login with incorrecEmail. Error should appear', async () => {
        const loginPage = new LoginPage();

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep("Click login button", async () => await loginPage.pressLogin())();
        await allure.createStep(`Enter invalid email "qwerty", password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.setEmail("qwerty");
                await loginPage.setPassword(browser.params.credentials.password);
            }
        )();
        await allure.createStep("Click Sign In button",
            async () => {
                await loginPage.pressSignIn();

                let errorMessage = await loginPage.getEmailErrorMessage();
                console.log('error message check');
                expect(errorMessage).toEqual('Email is not valid');
            }
        )();
    });
});