/* 
this = reference to a particular object.
the object depends on the immediate context
*/

const car = {
  // THESE ARE THE PROPERTIES OF THE OBJECT
  model: "Mustang",
  color: "red",
  year: 2023,

  // THESE ARE THE METHODS
  drive: function () {
    // MAKE USE OF this INSTEAD OF TYPING OUT THE OBJECT NAME FOLLOWED BY THE PROPERTY
    console.log(`You are driving the ${this.model}!`);
  },
};

const car2 = {
  // THESE ARE THE PROPERTIES OF THE OBJECT
  model: "Corvette",
  color: "Blue",
  year: 2024,

  // THESE ARE THE METHODS
  drive: function () {
    // MAKE USE OF this INSTEAD OF TYPING OUT THE OBJECT NAME FOLLOWED BY THE PROPERTY
    console.log(`You are driving the ${this.model}!`);
  },
};

car.drive();
car2.drive();
