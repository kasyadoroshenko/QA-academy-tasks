//JSON 
var _ = require(`lodash`); 
global._ = _ ; 
var student =  
    {
    "name": " John ",
    "surname": " Dou ",
    "rate": 1
}; //Create a variable student and set ‘name’, ‘surname’ and ‘rate’ in json format 

console.log (`Student name is ${student.name
}.`); //Output ‘name’ value 

console.log (`Student rate changed to ${student.rate
}.`); //Change ‘rate’ value and output it 


//Lodash  
var students = [
    {
        "name": " Jane ",
        "surname": " Dou ",
        "rate": 2
    },
    {
        "name": " Gill ",
        "surname": " Dou ",
        "rate": 3
    },
    {
        "name": " Gilbert ",
        "surname": " Dou",
        "rate": 4
    },
] 

let n2 = _.filter(students,
{
    "rate": 3
}) ; 

console.log(n2); //_.filter LoDash 
let str1 = JSON.stringify(students); 
console.log(str1); //converts an object to a JSON string 
let str2 = JSON.parse(str1) 
console.log(str2); 

//converts a JSON string to an object 
//Randomstring 

var randomstring = require(`randomstring`); 
let rstr1 = randomstring.generate({ 

    length: 10, 

    charset: 'alphabetic'
}); 


let rstr2 = randomstring.generate({ 

    length: 8, 

    charset: 'numeric'
}); 

console.log(rstr1); //Create js program which will provide you a string with a defined length 
console.log(rstr2); //Create js program which will provide you a number with a defined length 

let rstr3 = randomstring.generate({ 
    length : 10, 
    charset : `TEST`, 
    capitalization : `uppercase`
}); //custom 

let rstr4 = randomstring.generate({ 
    length : 5, 
    charset : `hex`, 
    capitalization : `lowercase`
}); // [0-9 a-f] 

console.log(rstr3); 
console.log(rstr4); 
console.log (Math.random()); 
console.log (Math.floor((Math.random()*100)+1)); 

let fs = require(`fs`); 
fs.open(`textfile.txt`,`w`,function (err, file){ 
    if (err)throw err; 
    console.log(`Saved!`);
}); //Create a file using open() 

 
fs.appendFile('textfile.txt', ' Test text ', function (err) { 
    if (err) throw err; 
    console.log('Updated!');
}); // Update created file using appendFile 

fs.writeFile('textfile.txt', 'New test text', function (err) { 
    if (err) throw err; 
    console.log('Replaced!');
}); //Update created file using writeFile()(replaces the specified file and content) 


fs.readFile(`textfile.txt`, function(err, data){ 
    if(err) throw err; 
    console.log(data);
}); 

  // ReadFile() and output its value 
  