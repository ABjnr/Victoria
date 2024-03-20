/* 
setTimeout() = invokes a function after a number of milliseconds.
it is an asynchronous function (meaning it does not pause execution)
*/

// IF YOU NEED TO PASS ARGUMENTS TO A FUNCTION
let item = "Cryptocurrency";
let price = 420.6;

let timer1 = setTimeout(firstMessage, 3000);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage() {
  alert(`Buy this ${item} for ${price}!`);
}
function secondMessage() {
  alert(`This is not a scam!`);
}
function thirdMessage() {
  alert(`DO ITTT!`);
}

document.getElementById("myButton").onclick = function () {
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);
  alert(`Thanks for buying <3`);
};
