/* 
sorting an array of strings in JS
*/

let fruits = ["banana", "apple", "orange", "mango"];

// TO SORT THE ELEMENTS IN THE ARRAY IN ASSCENDING ORDER
fruits = fruits.sort();

// TO SORT THE ELEMENTS IN THE ARRAY IN DESCENDING ORDER
fruits = fruits.sort().reverse();

for (let fruit of fruits) {
  console.log(fruit);
}
