let person = {
    "first_name": "Kateryna ",
    "last_name": "Doroshenko",
    "location": "Lviv",
    "rate": "1"
}

console.log(person.first_name)

let string = JSON.stringify(person)

console.log(string)

person.rate = 5

console.log(person.rate)