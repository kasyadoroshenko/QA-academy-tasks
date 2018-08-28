let Vehicle = require('./vehicle');

class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "truck";
    }

    transportContainer() {
        console.log(`I am starting to transport heavy container`);
    }

    static displayStat_truck() {
        console.log(`Trucks vary greatly in size, power, and configuration; smaller varieties may be mechanically similar to some automobiles.`);
    }


    displayInfo() {
        console.log(`A truck or lorry is a motor vehicle designed to transport cargo`);
        super.displayInfo();
    }
}

module.exports = Truck;
