let Car = require('./Car.js');
let Truck = require('./Truck.js');



let Audi = new Car("A8 V6", 2019, 280);

let Liebherr = new Truck("T 284", 2017, 65);



Audi.displayInfo();

Audi.transportPeople();



Liebherr.displayInfo();

Liebherr.transportContainer();



Truck.displayStat_truck();