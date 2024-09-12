// car class

export class Car {
  constructor(brand, model, year, isRunning) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.isRunning = isRunning;
  }

  getCarInfo() {
    return `${this.brand}, ${this.model}, ${this.year}`;
  }

  start() {
    this.isRunning = true;
    return "isStarted";
  }

  stop() {
    this.isRunning = false;
    return "isStopped";
  }
}
