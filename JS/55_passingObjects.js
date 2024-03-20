// PASSING OBJECTS TO A FUNCTION

class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
}
const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");

changeColor(car3, "gold");
displayInfo(car3);

// DISPLAYING INFORMATION GIVEN ABOUT THE CAR
function displayInfo(car) {
  console.log(`${car.model}`);
  console.log(`${car.year}`);
  console.log(`${car.color}`);
}

// CHANGING THE COLOR OF A CAR
function changeColor(car, color) {
  car.color = color;
}
