/* 
object = A group of properties and methods 
properties = what an object has
methods = what an object can do
use . to access properties/methods
*/

// EXAMPLE OF AN OBJECT
const car = {
  // THESE ARE THE PROPERTIES OF THE OBJECT
  model: "Mustang",
  color: "red",
  year: 2023,

  // THESE ARE THE METHODS
  drive: function () {
    console.log("You are driving!");
  },
  brake: function () {
    console.log("You just steppped on the brake!");
  },
};

const car2 = {
  // THESE ARE THE PROPERTIES OF THE OBJECT
  model: "Corvette",
  color: "Blue",
  year: 2024,

  // THESE ARE THE METHODS
  drive: function () {
    console.log("You are driving!");
  },
  brake: function () {
    console.log("You just steppped on the brake!");
  },
};
// TO GET THE PROPERTIES OF THE OBJECT
console.log(car.model);
console.log(car.color);
console.log(car.year);

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

// TO INVOKE ONE OF THE METHODS IN THE OBJECT
car.drive();
car.brake();

car2.drive();
car2.brake();
