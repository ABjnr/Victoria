/* 
METHOD CHAINING - IS CALLING ONE METHOD
AFTER ANOTHER IN ONE CONTINOUS LINE OF CODE
*/

// WITHOUT METHOD CHAINING
let username = "bro";

let letter = username.charAt(0);
letter = letter.toUpperCase();

console.log(letter);

// WITH METHOD CHAINING

letter = username.charAt(0).toUpperCase().trim();
console.log(letter);
