/* 
function expression = function without a name (anonymous function) 
avoid polluting the global scope with names
write it and forget about it
*/

const greeting = function () {
  console.log("Hello!");
};

greeting();

let count = 0;

document.getElementById("increaseBtn").onclick = function () {
  count += 1;
  document.getElementById("myLabel").innerHTML = count;
};
document.getElementById("decreaseBtn").onclick = function () {
  count -= 1;
  document.getElementById("myLabel").innerHTML = count;
};
// STEP 2 WITH THE HTML ONCLICK ACTION
/* function increaseCount() {
  count += 1;
  document.getElementById("myLabel").innerHTML = count;
}

function decreaseCount() {
  count -= 1;
  document.getElementById("myLabel").innerHTML = count;
}
 */
let red = ("b" + "a" + +"a" + "a").toLowerCase();
console.log(red);
