// cat class

export class Cat {
  constructor(name, color, breed) {
    this.name = name;
    this.color = color;
    this.breed = breed;
  }

  greet() {
    console.log(this.name + ", " + this.color + ", " + this.breed);
    // -----another way of getting the same result
    // console.log(`${this.name}, ${this.color}, ${this.breed}`);
  }

  setName(name) {
    this.name = name;
  }
}
