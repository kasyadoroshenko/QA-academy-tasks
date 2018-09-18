let LoginPage = require('../page_objects/login.page')
let ProductsPage = require('../page_objects/products.page')

describe('login suite', function () {
    it('login pass test', async function () {
        let loginPage = new LoginPage()

        await loginPage.open()
        let productsPage = await loginPage.login('olena.halenok@gmail.com', '>#MKIg>2o')
        browser.waitForAngular()

        //expect(await productsPage.header.isHeaderVisible()).toEqual(true)
        expect(await productsPage.header.isButtonVisible()).toBe(true)
    })
})