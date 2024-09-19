import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// Create an array of vehicles
const vehicles: (Car | Truck | Motorbike)[] = [];

// Create a truck instance
const truck1 = new Truck(
  Cli.generateVin(),
  "red",
  "Ford",
  "F-150",
  2021,
  5000,
  120,
  10000, // Correct order for towingCapacity
  [] // Wheels are optional
);

// Create a car instance
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  []
);

// Create a motorbike instance
const motorbike1 = new Motorbike(
  Cli.generateVin(),
  "black",
  "Harley Davidson",
  "Sportster",
  2021,
  500,
  125,
  [] // Empty array for wheels
);

// Push vehicles to array
vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

// Create a new instance of the Cli class
const cli = new Cli(vehicles);

// Start the CLI
cli.start();
