console.log(`1 step`);
console.log(`2 step`);

let promise = new Promise((resolve, reject) =>
setTimeout(() => {
    console.log(`3 step`);
    resolve(`ready`);
}, 3000));

/*
promise.then(() => {
    console.log(`4 step`);
});
*/

Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000)),
    
    ]).then((results) => {
       console.log(results[0]);
       console.log(results[2]);
    });

    
    
function login(email, pass) {
    emailInput.sendKeys (email).then(() => {
        passwordInput.sendKeys(pass).then(() => {
            loginButton.click()
        })
    });
}

async function login(email, pass) {
    await emailInput.sendKeys(email);
    await passwordInput.sendKeys(pass);
    await loginButton.click();
}