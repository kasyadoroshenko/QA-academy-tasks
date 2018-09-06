let randomstring = require("randomstring");
let random1 = randomstring.generate();
let random2 = randomstring.generate(10);
let random3 = randomstring.generate({
    length: 8,
    charset: 'alphabetic'
});

console.log(random1)
console.log(random2)
console.log(random3)

let random4 = Math.random()
console.log(random4)

let random5 = Math.floor((Math.random() * 100) + 1)
console.log(random5)