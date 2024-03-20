/* 
setInterval() = invokes a function repeatedly after a number of milliseconds 

it is an asynchrounous function (it does not pause the execution of your program)
*/

let count = 0;
let max = window.prompt("Count up to what number?");
max = Number(max);

let myTimer = setInterval(countUp, 1000);

function countUp() {
  count += 1;
  console.log(count);
  if (count >= max) {
    clearInterval(myTimer);
  }
}
