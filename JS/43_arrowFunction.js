/* 
ARROW FUNCTION ( => )= COMPACT ALTERNATIVE TO A TRADITIONAL FUNCTION
*/

// TRADITIONAL METHOD
const greeting = function (username) {
  console.log(`Hello, ${username}!`);
};

greeting("Bro");

// USING ARROW FUNCTION

const greeting2 = (username2) => {
  console.log(`Hello, ${username2}!`);
};

greeting2("Sokka");

// EXAMPLE 2
const percent = (x, y) => {
  return (x / y) * 100;
};
console.log(`${percent(75, 100)}%`);
// ALL YOU HAVE TO DO IS REMOVE 'function' AND ADD THE ARROW ( => ) AFTER THE ARGUMENT IN PARENTHESIS

// ANOTHER EXAMPLE WITH TRADITIONAL METHOD
let grades = [100, 50, 90, 60, 80, 70];
grades.sort(descending);
grades.forEach(print);

function descending(x, y) {
  return y - x;
}

function print(element) {
  console.log(element);
}

// SAME EXAPLE BUT WITH ARROW FUNCTION

let grades2 = [100, 50, 90, 60, 80, 70];
grades2.sort((x, y) => {
  return y - x;
});
grades2.forEach((element) => {
  console.log(element);
});
