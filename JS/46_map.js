/* 
map = is an object that holds key-value pairs of any data type.
*/

const store = new Map([
  ["T-shirt", 20],
  ["Jeans", 30],
  ["Socks", 10],
  ["Underwear", 50],
]);

let shoppingCart = 0;

// EMPLOYING AN ARROW FUNCTION EXPRESSION
store.forEach((value, key) => console.log(`${key} $${value}`));

if (1 == 1) {
  alert("PHEW! WHAT A WORLD!");
}
