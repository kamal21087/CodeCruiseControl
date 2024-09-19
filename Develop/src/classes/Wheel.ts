// Wheel class that defines the properties of a wheel
class Wheel {
  private diameter: number;
  private tireBrand: string;

  constructor(diameter: number = 18, tireBrand: string = "GoodYear") {
    if (diameter <= 0) {
      throw new Error("Diameter must be a positive number");
    }
    this.diameter = diameter;
    this.tireBrand = tireBrand;
  }

  get getDiameter(): number {
    return this.diameter;
  }

  get getTireBrand(): string {
    return this.tireBrand;
  }
}

// Exporting the Wheel class
export default Wheel;
