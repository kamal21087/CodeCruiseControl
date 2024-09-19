import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

class Cli {
  vehicles: (Car | Truck | Motorbike)[];
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  constructor(vehicles: (Car | Truck | Motorbike)[]) {
    this.vehicles = vehicles;
  }

  static generateVin(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => ({
            name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
            value: vehicle.vin,
          })),
        },
      ])
      .then((answers) => {
        this.selectedVehicleVin = answers.selectedVehicleVin;
        this.performActions();
      });
  }

  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          choices: ['Car', 'Truck', 'Motorbike'],
        },
      ])
      .then((answers) => {
        this.createVehicleOfType(answers.vehicleType);
      });
  }

  private async createVehicleOfType(type: 'Car' | 'Truck' | 'Motorbike'): Promise<void> {
    const questions = [
      { type: 'input', name: 'color', message: 'Enter Color' },
      { type: 'input', name: 'make', message: 'Enter Make' },
      { type: 'input', name: 'model', message: 'Enter Model' },
      { type: 'input', name: 'year', message: 'Enter Year' },
      { type: 'input', name: 'weight', message: 'Enter Weight' },
      { type: 'input', name: 'topSpeed', message: 'Enter Top Speed' },
    ];

    if (type === 'Truck') {
      questions.push({ type: 'input', name: 'towingCapacity', message: 'Enter Towing Capacity' });
    }

    const answers = await inquirer.prompt(questions);
    
    let vehicle;
    if (type === 'Car') {
      vehicle = new Car(
        Cli.generateVin(),
        answers.color,
        answers.make,
        answers.model,
        parseInt(answers.year),
        parseInt(answers.weight),
        parseInt(answers.topSpeed),
        [] // No need for 'as Wheel[]'
      );
    } else if (type === 'Truck') {
      vehicle = new Truck(
        Cli.generateVin(),
        answers.color,
        answers.make,
        answers.model,
        parseInt(answers.year),
        parseInt(answers.weight),
        parseInt(answers.topSpeed),
        parseInt(answers.towingCapacity), // Correct order
        [] // No need for 'as Wheel[]'
      );
    } else if (type === 'Motorbike') {
      vehicle = new Motorbike(
        Cli.generateVin(),
        answers.color,
        answers.make,
        answers.model,
        parseInt(answers.year),
        parseInt(answers.weight),
        parseInt(answers.topSpeed),
        [] // No need for 'as Wheel[]'
      );
    }

    if (vehicle) {
      this.vehicles.push(vehicle);
      this.selectedVehicleVin = vehicle.vin;
      this.performActions();
    }
  }

  performActions(): void {
    const selectedVehicle = this.vehicles.find(vehicle => vehicle.vin === this.selectedVehicleVin);

    if (!selectedVehicle) return;

    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action to perform',
          choices: [
            'Print Details',
            ...(selectedVehicle instanceof Truck ? ['Tow'] : []),
            ...(selectedVehicle instanceof Motorbike ? ['Wheelie'] : []),
            'Back to Vehicle Selection',
          ],
        },
      ])
      .then((answers) => {
        switch (answers.action) {
          case 'Print Details':
            selectedVehicle.printDetails();
            this.performActions();
            break;
          case 'Tow':
            this.towVehicle(selectedVehicle as Truck);
            break;
          case 'Wheelie':
            (selectedVehicle as Motorbike).wheelie();
            this.performActions();
            break;
          case 'Back to Vehicle Selection':
            this.chooseVehicle();
            break;
        }
      });
  }

  towVehicle(truck: Truck): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles
            .filter(vehicle => vehicle !== truck)
            .map(vehicle => ({
              name: `${vehicle.make} ${vehicle.model}`,
              value: vehicle,
            })),
        },
      ])
      .then((answers) => {
        truck.tow(answers.vehicleToTow);
        this.performActions();
      });
  }

  start(): void {
    inquirer
      .prompt([
        {
          type: 'confirm',
          name: 'start',
          message: 'Do you want to start managing vehicles?',
          default: true,
        },
      ])
      .then((answers) => {
        if (answers.start) {
          this.createVehicle();
        }
      });
  }
}

export default Cli;
