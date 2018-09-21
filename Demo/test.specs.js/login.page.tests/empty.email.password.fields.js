const LoginPage = require('./../page-objects/login.page');
const ProductsPage = require('./../page-objects/products.page');

describe('Login Functionality', () => {

    before(async () => {
        await browser.restart();
    });


    it('User is not able to login with empty email and password fields', async () => {
        const loginPage = new LoginPage();

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep("Click login button", async () => await loginPage.pressLogin())();
        await allure.createStep("Click on input elements",
            async () => {
                await loginPage.getEmailElem().click();
                await loginPage.getPasswordElem().click();
                await loginPage.getEmailElem().click();
            }
        )();
        await allure.createStep("Get error messages",
            async () => {
                const emailErrorMessage = await loginPage.getEmailErrorMessage();

                expect(emailErrorMessage).toEqual('Email is required');

                const passwordErrorMessage = await loginPage.getPasswordErrorMessage();

                expect(passwordErrorMessage).toEqual('Password is required');
            }
        )();
    });
});