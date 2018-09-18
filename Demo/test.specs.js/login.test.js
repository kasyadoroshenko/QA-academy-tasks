const LoginPage = require('./../page-objects/login.page');
const ProductsPage = require('./../page-objects/products.page');

describe('Login Functionality', () => {

    beforeEach(async () => {
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

    it('User should not be able to login with incorrecEmail. Error should appear', async () => {
        const loginPage = new LoginPage();

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep("Click login button", async () => await loginPage.pressLogin())();
        await allure.createStep(`Enter invalid email "1", password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.setEmail("1");
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

    it('User is not able to login with invalid email', async () => {
        const loginPage = new LoginPage();
        const productsPage = new ProductsPage();

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep("Click login button", async () => await loginPage.pressLogin())();
        await allure.createStep(`Enter invalid email "test@google.com", password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.setEmail("test@google.com");
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

    it('User is not able to login with invalid password', async () => {
        const loginPage = new LoginPage();
        const productsPage = new ProductsPage();

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep("Click login button", async () => await loginPage.pressLogin())();
        await allure.createStep(`Enter invalid email "${browser.params.credentials.login}", password "password"`,
            async () => {
                await loginPage.setEmail(browser.params.credentials.login);
                await loginPage.setPassword("password");
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