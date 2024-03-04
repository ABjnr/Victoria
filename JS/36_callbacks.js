/* 
CALLBACK = A FUNCTION PASSED AS AN ARGUMENT TO ANOTHER FUNCTION.


        BENEFITS OF CALLBACKS
    1. ENSURES THAT A FUNCTION IS NOT GOING TO RUN BEFORE A TASK IS COMPLETED.
    2. HELPS US TO DEVELOP ASYNCHRONOUS CODE. (WHEN ONE FUNCTION HAS TO WAIT FOR ANOTHER FUNCTION TO RUN) 
    3. HELPS US AVOID ERRORS AND POTENTIAL PROBLEMS LIKE; WAITING FOR A FILE TO LOAD
*/

/* let total = sum(2, 3);
displayConsole(total);
displayDOM(total);

function sum(x, y) {
  let result = x + y;
  return result;
} */

// INVOKING A CALLBACK

sum(2, 3, displayConsole);

function sum(x, y, callBack) {
  let result = x + y;
  callBack(result);
}

function displayConsole(output) {
  console.log(output);
}

function displayDOM(output) {
  document.getElementById("myLabel").innerHTML = output;
}

// MY LITTLE EXERCSIE TO TEST MY KNOWLEDGE
function displayToHTML(output1) {
  document.getElementById("myLabel").innerHTML = output1;
}

function displayToConsole(output1) {
  console.log(output1);
}

adding(5, 9, displayToHTML, displayToConsole);

function adding(a, b, displayHTML, displayCon) {
  answer = a * b;
  displayHTML(answer);
  displayCon(answer);
}
