/* 
DO WHILE LOOP - do something, then check the 
condition, repeat if condition is true.
*/

let userName = "";

do {
  userName = window.prompt("Enter your name:");
  userName = userName.toUpperCase();
} while (userName == "");

console.log("Hello,", userName);
