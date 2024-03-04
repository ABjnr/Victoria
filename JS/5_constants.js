// CONSTANT IS A VARIABLE THAT CANNOT BE CHANGED

/* const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");

radius = Number(radius);

circumference = 2 * PI * radius;
console.log("The circumference is:", circumference);
 */

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("button").onclick = function () {
  radius = document.getElementById("input").value;
  circumference = 2 * PI * radius;
  let answer = console.log("The circumference is:", circumference);
  document.getElementById("result").innerHTML =
    "The circumference is: " + circumference;
};
