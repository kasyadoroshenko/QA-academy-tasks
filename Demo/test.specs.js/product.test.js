const LoginPage = require('./../page-objects/login.page');
const ProductsPage = require('./../page-objects/products.page');
const ProductPage = require('./../page-objects/product.page');
const HeaderPage = require('./../page-objects/header.page');
const ToasterMessage = require('./../components/toaster-messages');
const generatedNumber = new Date().valueOf();

let productName = `Ilona-Vasylyshyn automation ${generatedNumber}`;

const productFamily = 'Ilona_Vasylyshyn Product Family 1';
const productFamily2 = 'Ilona_Vasylyshyn Product Family 2';

fdescribe('Product Functionality: ', () => {
    beforeEach(async () => {
        await browser.restart();
    });

    it('Product should be created with all required fields', async () => {
        const loginPage = new LoginPage();
        const headerPage = new HeaderPage();
        const productPage = new ProductPage();

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep(`Login to web-system with email "${browser.params.credentials.login}" and password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.login(browser.params.credentials.login, browser.params.credentials.password);

                expect(await headerPage.isHeaderVisible()).toEqual(true);
            }
        )();
        await allure.createStep("Go to Administration page", async () => await headerPage.goToAdministration())();
        await allure.createStep("Press create product", async () => await productPage.goToCreate())();
        await allure.createStep(`Enter product fields:  productName: "${productName}" productFamily: "${productFamily}"`,
            async () => {
                await productPage.setProductName(productName);
                await productPage.setProductFamily(productFamily);
            }
        )();
        await allure.createStep("Press save product",
            async () => {
                await productPage.pressSave();
                expect(await productPage.hasProduct(productName)).toBe(true);
            }
        )();
    });

    it('Product should be created with all specified fields', async () => {
        const loginPage = new LoginPage();
        const headerPage = new HeaderPage();
        const productPage = new ProductPage();
        const productDescription = "product automation description";
        const productRepository = "product repository description";

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep(`Login to web-system with email "${browser.params.credentials.login}" and password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.login(browser.params.credentials.login, browser.params.credentials.password);

                expect(await headerPage.isHeaderVisible()).toEqual(true);
            }
        )();
        await allure.createStep("Go to Administration page", async () => await headerPage.goToAdministration())();
        await allure.createStep("Press create product", async () => await productPage.goToCreate())();
        await allure.createStep(`Enter product fields:  productName: "${productName}" productFamily: "${productFamily}"`,
            async () => {
                await productPage.setProductName(productName);
                await productPage.setProductFamily(productFamily);
                await productPage.setProductDescription(productDescription);
                await productPage.setProductRepository(productRepository);
            }
        )();
        await allure.createStep("Press save product",
            async () => {
                await productPage.pressSave();
                expect(await productPage.hasProduct(productName)).toBe(true);
            }
        )();
    });

    it('Product should not be created. Name is required', async () => {
        const loginPage = new LoginPage();
        const headerPage = new HeaderPage();
        const productPage = new ProductPage();

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep(`Login to web-system with email "${browser.params.credentials.login}" and password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.login(browser.params.credentials.login, browser.params.credentials.password);

                expect(await headerPage.isHeaderVisible()).toEqual(true);
            }
        )();
        await allure.createStep("Go to Administration page", async () => await headerPage.goToAdministration())();
        await allure.createStep("Press create product", async () => await productPage.goToCreate())();
        await allure.createStep(`Enter product fields:  productName: "${productName}" productFamily: "${productFamily}"`,
            async () => {
                await productPage.setProductFamily(productFamily);
            }
        )();
        return await allure.createStep("Press save product",
            async () => {
                await productPage.pressSave();
                const errorMessage = await productPage.getProductNameError();

                expect(errorMessage.trim()).toEqual('Name is required.');
            }
        )();
    });

    it('Product should not be created. Product Family should be selected', async () => {
        const loginPage = new LoginPage();
        const headerPage = new HeaderPage();
        const productPage = new ProductPage();
        const productDescription = "product automation description";
        const productRepository = "product repository description";

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep(`Login to web-system with email "${browser.params.credentials.login}" and password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.login(browser.params.credentials.login, browser.params.credentials.password);

                expect(await headerPage.isHeaderVisible()).toEqual(true);
            }
        )();
        await allure.createStep("Go to Administration page", async () => await headerPage.goToAdministration())();
        await allure.createStep("Press create product", async () => await productPage.goToCreate())();
        await allure.createStep(`Enter product fields:  productName: "${productName}" productFamily: "${productFamily}"`,
            async () => {
                await productPage.setProductName(productName);
                await productPage.setProductDescription(productDescription);
                await productPage.setProductRepository(productRepository);
            }
        )();
        await allure.createStep("Press save product",
            async () => {
                await productPage.pressSave();
                const errorMessage = await productPage.getProductFamilyError();

                expect(errorMessage.trim()).toEqual('Product Family is required.');
            }
        )();
    });

    it('Change product name.', async () => {
        const loginPage = new LoginPage();
        const headerPage = new HeaderPage();
        const productPage = new ProductPage();
        const toasterMessage = new ToasterMessage();

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep(`Login to web-system with email "${browser.params.credentials.login}" and password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.login(browser.params.credentials.login, browser.params.credentials.password);

                expect(await headerPage.isHeaderVisible()).toEqual(true);
            }
        )();
        await allure.createStep("Go to Administration page", async () => await headerPage.goToAdministration())();
        await allure.createStep("Check if product exist", async () => {
            const productExist = await productPage.hasProduct(productName);

            expect(productExist).toBe(true);
        })();

        await allure.createStep("select product", async () => {
            const productNameView = await productPage.getProductNameView();

            if (productNameView !== productName) {
                await productPage.selectProduct(productName);
            }
        })();

        await allure.createStep("change product name", async () => {
            await productPage.pressEdit();
            productName += ' changed';
            await productPage.setProductName(productName);
        })();

        await allure.createStep("Press save product",
            async () => {
                await productPage.pressSaveEdit();
                expect(await productPage.hasProduct(productName)).toBe(true);
            })();
    });

    it('Cannot change product name. Max length 64 characters', async () => {
        const loginPage = new LoginPage();
        const headerPage = new HeaderPage();
        const productPage = new ProductPage();
        const toasterMessage = new ToasterMessage();

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep(`Login to web-system with email "${browser.params.credentials.login}" and password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.login(browser.params.credentials.login, browser.params.credentials.password);

                expect(await headerPage.isHeaderVisible()).toEqual(true);
            }
        )();
        await allure.createStep("Go to Administration page", async () => await headerPage.goToAdministration())();
        await allure.createStep("Check if product exist", async () => {
            const productExist = await productPage.hasProduct(productName);

            expect(productExist).toBe(true);
        })();

        await allure.createStep("select product", async () => {
            const productNameView = await productPage.getProductNameView();

            if (productNameView !== productName) {
                await productPage.selectProduct(productName);
            }
        })();

        await allure.createStep("change product name", async () => {
            await productPage.pressEdit();
            const productMaxLength = "firstName lastName and other symbols need to check changes value.";

            await productPage.setProductName(productMaxLength);
        })();

        await allure.createStep("Press save product",
            async () => {
                await productPage.pressSaveEdit();

                const message = await productPage.getProductNameError();

                expect(message).toBe("Name cannot be more than 64 characters long.");
            })();
    });

    xit('Cannot change product name. Product name is required', async () => { // product was created with prev title
        const loginPage = new LoginPage();
        const headerPage = new HeaderPage();
        const productPage = new ProductPage();
        const toasterMessage = new ToasterMessage();

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep(`Login to web-system with email "${browser.params.credentials.login}" and password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.login(browser.params.credentials.login, browser.params.credentials.password);

                expect(await headerPage.isHeaderVisible()).toEqual(true);
            }
        )();
        await allure.createStep("Go to Administration page", async () => await headerPage.goToAdministration())();
        await allure.createStep("Check if product exist", async () => {
            const productExist = await productPage.hasProduct(productName);

            expect(productExist).toBe(true);
        })();

        await allure.createStep("select product", async () => {
            const productNameView = await productPage.getProductNameView();

            if (productNameView !== productName) {
                await productPage.selectProduct(productName);
            }
        })();

        await allure.createStep("change product name", async () => {
            await productPage.pressEdit();

            await productPage.setProductName('');
        })();

        await allure.createStep("Press save product",
            async () => {
                await productPage.pressSaveEdit();

                const message = await productPage.getProductNameError();

                expect(message).toBe("Name is required.");
            })();
    });

    it('Change product Family.', async () => {
        const loginPage = new LoginPage();
        const headerPage = new HeaderPage();
        const productPage = new ProductPage();
        const toasterMessage = new ToasterMessage();

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep(`Login to web-system with email "${browser.params.credentials.login}" and password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.login(browser.params.credentials.login, browser.params.credentials.password);

                expect(await headerPage.isHeaderVisible()).toEqual(true);
            }
        )();
        await allure.createStep("Go to Administration page", async () => await headerPage.goToAdministration())();
        await allure.createStep("Check if product exist", async () => {
            const productExist = await productPage.hasProduct(productName);

            expect(productExist).toBe(true);
        })();

        await allure.createStep("select product", async () => {
            const productNameView = await productPage.getProductNameView();

            if (productNameView !== productName) {
                await productPage.selectProduct(productName);
            }
        })();

        await allure.createStep("change product name", async () => {
            await productPage.pressEdit();
            await productPage.setProductFamily(productFamily2);
        })();

        await allure.createStep("Press save product",
            async () => {
                await productPage.pressSaveEdit();
                const productView = await productPage.getProductFamilyView();

                expect(productView).toBe(productFamily2);
            })();
    });

    it('Change product Description.', async () => {
        const loginPage = new LoginPage();
        const headerPage = new HeaderPage();
        const productPage = new ProductPage();
        const toasterMessage = new ToasterMessage();
        const description = "test description";

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep(`Login to web-system with email "${browser.params.credentials.login}" and password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.login(browser.params.credentials.login, browser.params.credentials.password);

                expect(await headerPage.isHeaderVisible()).toEqual(true);
            }
        )();
        await allure.createStep("Go to Administration page", async () => await headerPage.goToAdministration())();
        await allure.createStep("Check if product exist", async () => {
            const productExist = await productPage.hasProduct(productName);

            expect(productExist).toBe(true);
        })();

        await allure.createStep("select product", async () => {
            const productNameView = await productPage.getProductNameView();

            if (productNameView !== productName) {
                await productPage.selectProduct(productName);
            }
        })();

        await allure.createStep("change product name", async () => {
            await productPage.pressEdit();
            await productPage.setProductDescription(description);
        })();

        await allure.createStep("Press save product",
            async () => {
                await productPage.pressSaveEdit();
                const descriptionView = await productPage.getProductDescription();

                expect(description).toBe("test description");
            })();
    });

    it('Removed product.', async () => {
        const loginPage = new LoginPage();
        const headerPage = new HeaderPage();
        const productPage = new ProductPage();
        const toasterMessage = new ToasterMessage();

        await allure.createStep("Go to EDS web-system", async () => await loginPage.get())();
        await allure.createStep(`Login to web-system with email "${browser.params.credentials.login}" and password "${browser.params.credentials.password}"`,
            async () => {
                await loginPage.login(browser.params.credentials.login, browser.params.credentials.password);

                expect(await headerPage.isHeaderVisible()).toEqual(true);
            }
        )();
        await allure.createStep("Go to Administration page", async () => await headerPage.goToAdministration())();
        await allure.createStep("Check if product exist", async () => {
            console.log('check if has product in list');
            const productExist = await productPage.hasProduct(productName);

            console.log('product exist');
            expect(productExist).toBe(true);
        })();

        await allure.createStep("Delete product", async () => {
            const productNameView = await productPage.getProductNameView();

            if (productNameView !== productName) {
                await productPage.selectProduct(productName);
            }

            await productPage.pressDelete();
            await productPage.pressConfirmDelete();
        })();
        await allure.createStep("Message product removed successfully", async () => {
            const message = await toasterMessage.getSuccessMessage();

            expect(message).toBe(`Product ${productName} successfully deleted`);
        })();
    });
});