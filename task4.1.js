let Vehicle = require('./vehicle.js');
class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

    transportPeople() {
        console.log(`I am starting to transport passengers`);
    }

    displayInfo() {
        console.log(`Car model: ${this.model};
        	         made in: ${this.year};
            	     maximum speed ${this.maxSpeed}`);
    }
}

module.exprts = Car;
