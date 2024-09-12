// 1. Create a javascript function that takes firstname and lastname as 2 parameters and uses console.log() to output the person's name. Check that it works and is printet correctly.

import { Car } from "./car.js";
import { Cat } from "./cat.js";

const person1 = {
  firstname: "Marie",
  lastname: "Hansen",
};

function person(firstname, lastname) {
  return firstname + " " + lastname;
}

console.log(person(person1.firstname, person1.lastname));

// 2. Create a function that calculates the area of a rectangle. The function should return the result. Test that it works.

function calculateRectangle(a, b) {
  return a * b;
}

console.log(calculateRectangle(5, 5));
console.log(calculateRectangle(5, 10));

// 3. Create a function that takes speed and time as 2 parameters and calculates and returns the distance. Use the function to test that it works by using the 'log' again. Print out "You have travelled *x* km" where *x* is replaced by the result from the function.

function calculateDistance(speed, time) {
  return speed * time;
}

let speed = 60; // Speed in km/h
let time = 2; // Time in hours
let distance = calculateDistance(speed, time);

console.log(`You have travelled ${distance} km`);

// 4. Create an object called calculator with the name of the owner (eg. Your name) and modify your code so the 3 previous functions are attached to the object.

const calculator = {
  calculateDistance(speed, time) {
    return speed * time;
  },

  logDistance(owner, speed, time) {
    const distance = this.calculateDistance(speed, time);
    console.log(`${owner} has travelled ${distance} km`);
  },
};

calculator.logDistance("Vili", 220, 2);

// 5. Adjust your code so that you can call the functions and test that they still work.

// BasicJS in class

// Creating a cat object with a constructor
const cat1 = new Cat("Christian", "Black", "Siamese");
cat1.greet();
cat1.setName("Mimi");
console.log(cat1.name);

// --------------------------------------------

const car1 = new Car("Toyota", "model1", "2024");
//car1.getCarInfo();
const getCarInfo = car1.getCarInfo();
const start = car1.start();
console.log(getCarInfo);
console.log(start);

// const stop = car1.stop();
// console.log(stop);

// same solution with less code -->
console.log(car1.stop());

const car2 = new Car("Tesla", "S", "2023");
console.log(car2.getCarInfo());
console.log(car2.start());
console.log(car2.stop());
