import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import Driveable from '../interfaces/Driveable.js';

class Car extends Vehicle implements Driveable {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super(vin, color, make, model, year, weight, topSpeed); // Call super with parameters

    // Initialize properties
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    // Ensure wheels array has 4 elements
    this.wheels = wheels.length !== 4
      ? [new Wheel(), new Wheel(), new Wheel(), new Wheel()]
      : wheels;
  }

  // Implementing Driveable methods
  start(): void {
    console.log(`${this.make} ${this.model} started.`);
  }

  accelerate(change: number): void {
    this.currentSpeed = Math.min(this.currentSpeed + change, this.topSpeed);
    console.log(`${this.make} ${this.model} accelerated to ${this.currentSpeed} MPH.`);
  }

  decelerate(change: number): void {
    this.currentSpeed = Math.max(this.currentSpeed - change, 0);
    console.log(`${this.make} ${this.model} decelerated to ${this.currentSpeed} MPH.`);
  }

  stop(): void {
    this.currentSpeed = 0;
    console.log(`${this.make} ${this.model} has stopped.`);
  }

  turn(direction: 'left' | 'right'): void {
    console.log(`${this.make} ${this.model} is turning ${direction}.`);
  }

  reverse(): void {
    console.log(`${this.make} ${this.model} is reversing.`);
  }

  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the Car class
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);

    // Print details of the wheels
    this.wheels.forEach((wheel, index) => {
      console.log(
        `Wheel ${index + 1}: ${wheel.getDiameter()} inch with a ${wheel.getTireBrand()} tire`
      );
    });
  }
}

export default Car;
