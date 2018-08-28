console.log("1");
console.log("2");

let p1 = new Promise((resolve, reject) =>
    setTimeout(() => {
        console.log("3");
        resolve();
    }, 3000));

p1.then(() => {
    console.log("4")
});
/*
promise.then(() => {
    console.log(`4 step`);
});
*/
async function test(promise){
    await promise;
    console.log("4");
}
test (p1);




console.log("1");
console.log("2");

let p1 = new Promise((resolve, reject) =>
    setTimeout(() => {
        console.log("3");
        resolve("ready");
    }, 3000));

p1.then(() => {
    console.log("4")
});
/*
promise.then(() => {
    console.log(`4 step`);
});
*/
async function test(promise){
    await promise;
    console.log("4");
}
test (p1);




console.log("1");
console.log("2");

let p1 = new Promise((resolve, reject) =>
setTimeout(() => {
    console.log("3");
    resolve("ready");
}, 3000));
/*
promise.then(() => {
    console.log(`4 step`);
});
*/
async function test(promise){
    let s1 = await promise;
    console.log("4");
    console.log(s1)
}
test (p1);



console.log("1");
console.log("2");

let p1 = new Promise((resolve, reject) =>
setTimeout(() => {
    console.log("3");
    resolve("ready");
}, 3000));
/*
promise.then(() => {
    console.log(`4 step`);
});
*/
async function test(promise){
    promise.then((result) => console.log("then result" + result));
    console.log("4");
    //console.log(s1)
}
test (p1);
