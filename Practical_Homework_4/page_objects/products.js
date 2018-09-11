let HeaderPage = require('./header.page')

let addProdLinkLocator = 'a.section-body_actions'
let prodInputLocator = '.form-group .name-input '
let prodFamilyInputLocator = ' div.dropdown .dropdown-toggle'
let prodFamilySearchLocator = 'ul .input-group .form-control'
let prodSaveButtonLocator = '#saveProductAdd'
let tabProductsLocator = 'ul.tab-navbar__menu .tab-menu__item:nth-of-type(1)'
let tabCriteriaSetLocator = 'ul.tab-navbar__menu .tab-menu__item:nth-of-type(2)'
let tabAreasLocator = 'ul.tab-navbar__menu .tab-menu__item:nth-of-type(3)'
let tabCategoriesLocator = 'ul.tab-navbar__menu .tab-menu__item:nth-of-type(4)'
let tabCriteriaLocator = 'ul.tab-navbar__menu .tab-menu__item:nth-of-type(5)'
let tabModulesLocator = 'ul.tab-navbar__menu .tab-menu__item:nth-of-type(6)'
//let tableProductNameLocatorX = '/html/body/app/main/modules-navigator/products/div[2]/div/div[3]/products-table/div/div/div/div[1]/div/div[1]/span[1]'
let tableProductNameLocator = 'div.table-head div:nth-of-type(1)'

class ProductsPage {
    constructor() {
        this.header = new HeaderPage()
    }

    getAddProdLink() {
        return element(by.css(addProdLinkLocator))
    }

    getProdInput() {
        return element(by.css(prodInputLocator))
    }

    getProdFamilyInput() {
        return element(by.css(prodFamilyInputLocator))
    }

    getProdFamilySearch() {
        return element(by.css(prodFamilySearchLocator))
    }

    getProdSaveButton() {
        return element(by.css(prodSaveButtonLocator))
    }

    getTabProductsLocator() {
        return element(by.css(tabProductsLocator))
    }


    getTabCriteriaSetLocator() {
        return element(by.css(tabCriteriaSetLocator))
    }

    getTabAreasLocator() {
        return element(by.css(tabAreasLocator))
    }

    getTabCategoriesLocator() {
        return element(by.css(tabCategoriesLocator))
    }

    getTabCriteriaLocator() {
        return element(by.css(tabCriteriaLocator))
    }

    getTabModulesLocator() {
        return element(by.css(tabModulesLocator))
    }

    getTableProductNameLocator() {
        //return element(by.xpath(tableProductNameLocator))
        return element(by.css(tableProductNameLocator))
    }

    async isTableVisible() {
        return this.getTableProductNameLocator().isDisplayed()
    }

    async isTabProductsVisible() {
        return this.getTabProductsLocator().isDisplayed()
    }
}

module.exports = ProductsPage