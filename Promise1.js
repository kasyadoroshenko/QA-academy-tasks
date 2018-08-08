console.log("1");
console.log("2");

let p1 = new Promise((resolve, reject) =>
setTimeout(() =>{
    console.log("3");
    resolve();
}, 3000)); 

p1.then(() =>{
    console.log("4")
});