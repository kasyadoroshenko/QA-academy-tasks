let WebButton = require("../controls/web.button");
let WebTextInput = require("../controls/web.text-input");
let WebText = require("../controls/web.text");
 describe('Login Functionality', () => {
     let loginButton = new WebButton(element(by.css('.login-button')), "Login Button");
    let signInButton = new WebButton(element(by.css('.iframe-wrap .login-button')), "Sign In Button"); 
    let emailTextInput = new WebTextInput(element(by.id('email')), "email input"); 
    let passwordTextInput = new WebTextInput(element(by.id('userPassword')), "password input"); 
    let userNameText = new WebText(element(by.css(".user-name")), "user name"); 
     it('User should be able to login into eds_university.eleks.com', async () => {
        await browser.get('<siteUrl>/login');
         await loginButton.click();
     
        await emailTextInput.sendKeys("<login>");
        await passwordTextInput.sendKeys("<password>");
        await signInButton.click();
         let name = await userNameText.getText();
         expect(name).toEqual('<firstName> <lastName>');
        console.log("User Name - " + name );
    });
}); 