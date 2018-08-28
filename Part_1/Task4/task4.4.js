import Car from './Car.js';
import Truck, { displayStat_truck } from './Truck.js';
let BMW = new Car("E89 Z4", 2018, 250);
let Freightliner = new Truck("M2 112", 2016, 190);

BMW.displayInfo();
BMW.transportPeople();
Freightliner.displayInfo();
Freightliner.transportContainer();

displayStat_truck();
