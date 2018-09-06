let WebButton = require("../controls/web.button");
let WebTextInput = require("../controls/web.text-input");
let WebText = require("../controls/web.text");
 const LoginPage = require('./../page-objects/login-page');
const ProductsPage = require('./../page-objects/products-page');
const LoginPage = require('./../pages-object/login-page');
const ProductsPage = require('./../pages-object/products-page');
 describe('Login Functionality', () => {
      beforeEach(async() => {
          await browser.restart();
     });
 
     it('User should be able to login to eds_university.eleks.com', async () => {
         const loginPage = new LoginPage();
         const productsPage = new ProductsPage();
 
         await loginPage.get();
         await loginPage.pressLogin();
         await loginPage.setEmail(browser.params.credentials.login);
         await loginPage.setPassword(browser.params.credentials.password);
         await loginPage.pressSignIn();
 
         let name = await productsPage.getUserName();
 
         expect(name).toEqual(`${browser.params.user.firstName} ${browser.params.user.lastName}`);
     });
       
     it('User should not be able to login with incorrecEmail. Error should appear', async () => {
         const loginPage = new LoginPage();
 
         await loginPage.get();
         await loginPage.pressLogin();
         await loginPage.setEmail("1");
         await loginPage.setPassword(browser.params.credentials.password);
         await loginPage.pressSignIn();
 
         let errorMessage = await loginPage.getEmailErrorMessage();
 
         expect(errorMessage).toEqual('Email is not valid');
     });
 
     it('User is not able to login with empty email and password fields', async () => {
         const loginPage = new LoginPage();
 
         await loginPage.get();
         await loginPage.pressLogin();
         await loginPage.getEmailElem().click();
         await loginPage.getPasswordElem().click();
         await loginPage.getEmailElem().click();
 
         const emailErrorMessage = await loginPage.getEmailErrorMessage();
 
         expect(emailErrorMessage).toEqual('Email is required');
 
         const passwordErrorMessage = await loginPage.getPasswordErrorMessage();
         
         expect(passwordErrorMessage).toEqual('Password is required');
     });
 
     it('User is not able to login with invalid email', async () => {
         const loginPage = new LoginPage();
         const productsPage = new ProductsPage();
 
         await loginPage.get();
         await loginPage.pressLogin();
         await loginPage.setEmail("test@google.com");
         await loginPage.setPassword(browser.params.credentials.password);
         await loginPage.pressSignIn();
 
         const errorMessage = await loginPage.toasterMessage();
 
         expect(errorMessage).toEqual('Login or password is not correct');
     });
 
     it('User is not able to login with invalid password', async () => {
         const loginPage = new LoginPage();
         const productsPage = new ProductsPage();
 
         await loginPage.get();
         await loginPage.pressLogin();
         await loginPage.setEmail(browser.params.credentials.login);
         await loginPage.setPassword("password");
         await loginPage.pressSignIn();
 
         const errorMessage = await loginPage.toasterMessage();
 
         expect(errorMessage).toEqual('Login or password is not correct');
     });
 });