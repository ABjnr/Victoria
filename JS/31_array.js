/* 
array - think of it as a variable that 
can store multiple values.
*/

let fruits = ["apple", "orange", "banana"];
console.log(fruits);

// TO DISPLAY EXACTLY BY ELEMENT
console.log(fruits[0]);
console.log(fruits[1]);

// TO CHANGE AN ELEMENT IN AN ARRAY
fruits[1] = "coconut";
console.log(fruits[1]);

// TO ADDD AN ELEMENT INTO THE ARRAY
fruits.push("lemon");
console.log(fruits);

// TO REMOVE THE LAST ELEMENT
fruits.pop();
console.log(fruits);

// TO ADD AN ELEMENT TO THE BEGINNING
fruits.unshift("mango");
console.log(fruits);

// TO REMOVE THE BEGINNING ELEMENT
fruits.shift();
console.log(fruits);

// TO CHECK THE LENGTH PROPERTY OF AN ARRAY
let length = fruits.length;
console.log(length);

// TO FIND THE INDEX OF AN ELEMENT
let index = fruits.indexOf("apple");
console.log(index);

// TO LOOK THROUGH THE ELEMENTS OF AN ARRAY
let prices = [5, 10, 15, 20, 25];

// USING FOR LOOP
for (let i = 0; i < prices.length; i += 1) {
  console.log(prices[i]);
}
// TO ITERATE BACKWARDS
for (let i = prices.length - 1; i >= 0; i -= 1) {
  console.log(prices[i]);
}

// METHOD 2 - USING A FOR-OF STATEMENT
for (let i of prices) {
  console.log(i);
}
