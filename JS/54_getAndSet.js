/* 
get = binds an object property to a function when the property is accessed

set = binds an object property to a function when that property is assigned a value
*/

class Car {
  constructor(power, gas) {
    // THE UNDERSCORE HELPS DEVELOPERS TO KNOW THAT IT SHOULD NOT BE MESSED WITH AS IT A PROTECTED PROPERTY
    this._power = power;
    this._gas = gas;
  }

  // get HELPS TO INCREASE DATA SECURITY
  get power() {
    return `${this._power}hp`;
  }
  get gas() {
    // TO KNOW THE PERCENTAGE OF THE GAS LEVEL ALSO
    return `${this._gas}L (${(this._gas / 50) * 100}%)`;
  }
  set gas(value) {
    // TO LIMIT THE VALUE SO IT DOES NOT EXCEED A PARTICULAR VALUE
    if (value > 50) {
      value = 50;
    } else if (value < 0) {
      value = 0;
    }
    this._gas = value;
  }
}

let car = new Car(400, 50);

console.log(car.gas);
console.log(car.power);
