let LoginPage = require("../page_objects/login.page")

describe('login suite', function () {
    it('login error test', async function () {
        let loginPage = new LoginPage()

        await loginPage.open()
        await loginPage.loginError("olena.halenok@gmail.com", "1234")
        browser.waitForAngular()

        expect(await loginPage.getErrorMessage().isDisplayed()).toEqual(true)
    });
});