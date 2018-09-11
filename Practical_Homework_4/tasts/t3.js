let LoginPage = require('../page_objects/login.page')
let ProductsPage = require('../page_objects/products.page')

//logoutDropdown = '.dropdown-toggle  .caret'
//logoutButton = 'ul.dropdown-menu .dropdown-item'

describe('products suite', function () {
    // beforeAll(function(done) {
    //  $(done);
    //  console.log("DOM fully loaded and parsed");
    // })
    // beforeEach(function(done) {
    //  $(done);
    //  console.log("DOM fully loaded and parsed");
    // })  //afterEach(function () {
    //
    //  // element(by.css(logoutDropdown)).click()
    //  // element(by.css(logoutButton)).click()
    //  let loginPage = new LoginPage()
    //  //loginPage.logout()
    //
    //  await loginPage.logout()
    //  console.log("After Each block")
    //
    // })

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('Eleks')
    })

    it('select administration menu', async function () {
        let loginPage = new LoginPage()

        await loginPage.open()
        let productsPage = await loginPage.login('olena.halenok@gmail.com', '>#MKIg>2o')
        // await browser.sleep(500);

        // expect(await productsPage.header.isHeaderVisible()).toEqual(true)
        // console.log("After isHeaderVisible block")
        // expect(await productsPage.header.isDropdownVisible()).toEqual(true)
        // console.log("After isDropdownVisible block")
        // expect(await productsPage.header.getAdministrationMenu().isPresent()).toBe(true)

        // browser.waitForAngular();
        // expect(await productsPage.header.isButtonVisible()).toBe(true)
        // console.log("After isButtonVisible block")
        // browser.refresh()

        browser.waitForAngular()
        await productsPage.header.openAdministrationMenu()
        console.log('After ProductsPage block')
        browser.refresh()
        browser.waitForAngular()
        expect(await productsPage.isTabProductsVisible()).toBe(true)
    })

    it('add product test', async function () {
        // browser.driver.navigate().refresh()
        // browser.refresh()
        // console.log("After refresh block")
        expect(browser.getTitle()).toEqual('Eleks')
        console.log('After getTitle block')
        let productsPage = new ProductsPage()
        // await productsPage.open()
        // console.log(productsPage)

        // await productsPage.header.openAdministrationMenu()
        // console.log("After ProductsPage block")

        expect(await productsPage.header.isHeaderVisible()).toEqual(true)
        console.log('After expect block')
        // await loginPage.logout()
    })
})