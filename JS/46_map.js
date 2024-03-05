/* 
map = is an object that holds key-value pairs of any data type.
*/

const store = new Map([
  ["T-shirt", 20],
  ["Jeans", 30],
  ["Socks", 10],
  ["Underwear", 50],
]);

// TO ADD A PAIR TO OUR MAP WE USE THE .set
store.set("Hat", 40);

// TO DELETE A PAIR WE USE .delete
store.delete("Hat", 40);

// TO SEARCH FOR A KEY WITHING THE MAP USE .has and place in a console.log()
console.log(store.has("Hat"));

// USE THE .size TO GET THE TOTAL NUMBER OF PAIRS IN THE MAP
console.log(store.size);
let shoppingCart = 0;

//USE .get TO BRING OUT AN ITEM
shoppingCart += store.get("T-shirt");
shoppingCart += store.get("Underwear");
console.log(shoppingCart);

// EMPLOYING AN ARROW FUNCTION EXPRESSION
/* the keys are strings representing items (T-shirt, Jeans, Socks, Underwear), and the values are numbers representing their prices. */
store.forEach((value, key) => console.log(`${key} $${value}`));
