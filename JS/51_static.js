/* 
static = belongs to the class, not the objects 
properties; useful for caches, fixed-configuration
methods; useful for utitlity functions
*/

class car {
  static numberOfCars = 0;

  constructor(model) {
    this.model = model;
    car.numberOfCars += 1;
  }

  static startRace() {
    console.log(`3...2...1...GO!`);
  }
}

const car1 = new car("Mustang");
const car2 = new car("Corvette");
const car3 = new car("BMW");
const car4 = new car("Ferrari");
const car5 = new car("Lambo");

console.log(car.numberOfCars);

/* car1.startRace();
 // THIS IS FOR ONE OBJECT TO START RACE (DOES NOT HAVE STATIC IN PLACE)
 */
car.startRace(); // THIS IS FOR THE ENTIRE CLASS TO START RACE (HAS STATIC IN PLACE)

// ANYTHING THAT IS STATIC BELONGS TO THE CLASS NOT THE OBJECT
