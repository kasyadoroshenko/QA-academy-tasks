class Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
    }

    displayInfo() {
        console.log(`Name: ${this.model};
        Year: ${this.year};
        Max Speed: ${this.maxSpeed};
        Type: ${this.type};`);
    }
}


class Car extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "car";
    }

    trasportPeople() {
        console.log(`I am starting transporting passengers`);
    }
}


class Truck extends Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "truck";
    }

    transportContainer() {
        console.log(`I am starting transporting heavy container`);
    }
}


class Bentley extends Car {
    constructor(carModel, carYear, maxSpeed) {
        super(carModel, carYear, maxSpeed);
        this.type = "bentley";
    }

    displayInfo() {
        console.log(`Model: ${this.model};
        made in year: ${this.year};
        car max speed: ${this.maxSpeed};`);
    }

    transportPeople() {
        console.log(`I am starting driving Bentley`);
    }
}
