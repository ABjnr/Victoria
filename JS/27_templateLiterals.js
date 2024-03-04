/* 
TEMPLATE LITERALS - DELIMITED WITH (`)
INSTEAD OF DOUBLE OR SINGLE QUOTES
ALLOWS EMBEDDED VARIABLES AND EXPRESSIONS
*/

// THIS IS HOW YOU'D NORMALLY DO IT
let userName = "Bro";
let items = 3;
let total = 75;
console.log("Hello", userName);
console.log("You have", items, "items in your cart.");
console.log("Your total is $", total);

// USING TEMPLATE LITERALS

let name = "Bola";
let things = 7;
let addUp = 89;
console.log(`Hello ${name}`);
console.log(`You have ${things} things in your cart`);
console.log(`The sum of your things is $${addUp}`);

// ANOTHER WAY
let myName = "Sam";
let myAge = 23;
let myHeight = 6.1;

let text = `Hello, ${myName}! <br>
You are ${myAge} years old. <br>
Your height is ${myHeight} in foot.<br>`;
console.log(text);

// CONNECTING WITH HTML
document.getElementById("myLabel").innerHTML = text;
