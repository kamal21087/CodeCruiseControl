# CodeCruiseControl
Bootcamp week 8 project

## Vehicle Management CLI
Welcome to the Vehicle Management CLI application! This tool allows you to create, manage, and perform actions on various types of vehicles, including Cars, Trucks, and Motorbikes.

## Features
***Create Vehicles:*** Easily create new vehicles by specifying their attributes such as color, make, model, year, weight, top speed, and towing capacity for trucks.

***Manage Vehicles:*** View and manage the list of vehicles, with options to print details or perform specific actions like towing.

***Interactive CLI:*** User-friendly command-line interface powered by Inquirer.js for easy navigation.

## Getting Started
***Prerequisites***
- Node.js (version 14 or higher)
npm (Node Package Manager)
- Installation:
1. Clone the repository:
```
git clone https://github.com/yourusername/vehicle-management-cli.git
```
2. Navigate to the project directory:
```
cd CodeCruiseControl
```
3. Install the required dependencies:
```
npm install
```
### Running the Application
To start managing vehicles, run the following command:
```
npm run start OR npm start
```
When prompted, you can choose to create a new vehicle or manage existing ones. Follow the instructions in the command line to navigate through the options.

### How to Use
***Create Vehicle:*** Choose the type of vehicle you want to create (Car, Truck, or Motorbike) and provide the required information.

***View Vehicle Details:*** Select a vehicle to view its details including VIN, color, make, model, year, weight, top speed, and for trucks, towing capacity.

***Tow a Vehicle:*** If you have selected a truck, you will have the option to tow another vehicle. The application will check if the truck can handle the weight of the vehicle being towed.

***Perform Other Actions:*** Depending on the vehicle type, you can also perform specific actions like wheelies for motorbikes.
### Example Interaction
When you start the application, you will be greeted with:
```
Do you want to start managing vehicles?
```
Choose ***Yes*** to proceed with vehicle management or ***No*** to exit the application.

### Contributing
Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request.

### License
TBD.