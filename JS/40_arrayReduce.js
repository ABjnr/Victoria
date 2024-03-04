/* 
array.reduce() = reduces an array to as single value
*/

let prices = [5, 10, 15, 20, 25];
let total = prices.reduce(checkOut);

// YPU DON'T USE forEach WITH THE REDUCE METHOD
console.log(`The total is: $${total}.`);

function checkOut(total, element) {
  return total + element;
}
