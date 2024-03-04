/* 
GIVES US THE ABILITY TO CHECK MORE THAN ONE CONDITIOJN CONCURRENTLY

&& AND (BOTH CONDITIONS MUST BE TRUE)

|| OR (EITHER CONDITION CAN BE TRUE)
*/

const weatherMesssage = document.getElementById("weatherMesssage");
const weatherMesssage2 = document.getElementById("weatherMesssage2");
const weatherMesssage3 = document.getElementById("weatherMesssage3");

let temp = 15;
let sunny = false;

// AND OPERATOR
if (temp > 0 && temp < 30) {
  console.log("The weather is good!");
  weatherMesssage.innerHTML = "The weather is good!";
} else {
  console.log("The weather is bad!");
  weatherMesssage.innerHTML = "The weather is bad!";
}

//OR OPERATOR
if (temp <= 0 || temp >= 30) {
  console.log("The weather is bad!");
  weatherMesssage2.innerHTML = "The weather is bad!";
} else {
  console.log("The weather is good!");
  weatherMesssage2.innerHTML = "The weather is good!";
}

// USING BOOLEAN
if (
  temp > 0 &&
  temp < 30 &&
  sunny == true /* THE TRUE PART IN NOT NECESSARY */
) {
  console.log("The weather is good!");
  weatherMesssage3.innerHTML = "The weather is good!";
} else {
  console.log("The weather is bad!");
  weatherMesssage3.innerHTML = "The weather is bad!";
}
