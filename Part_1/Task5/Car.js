let Vehicle = require('./vehicle.js'); 
class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

    trasportPeople() {
        console.log(`I am starting transporting passengers`);
    }
}

module.exports = Car;