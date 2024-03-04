// nested loop = a loop inside of another loop

for (let i = 1; i <= 3; i += 1) {
  // IN NESTED LOOPS YOU CHANGE THE COUNTER VARIABLE TO AVOID REUSING
  for (let j = 1; j <= 3; j += 1) {
    console.log(j);
  }
}

// CONNECTING WITH HTML

let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt("Enter number of rows");
let columns = window.prompt("Enter number of columns");

for (let a = 1; a <= rows; a += 1) {
  for (let b = 1; b <= columns; b += 1) {
    document.getElementById("myRectangle").innerHTML += symbol;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";
}

// PERSONAL PROJECT = CREATING A PAGE THAT CREATES TABLES BASED ON USER INPUT
let symbols = "□";
let tableBuild = document.getElementById("tableBuild");
let rowInput = document.getElementById("rowInput");
let columnInput = document.getElementById("columnInput");
let button = document.getElementById("button");

button.onclick = function () {
  for (let rowCounter = 1; rowCounter <= rowInput.value; rowCounter += 1) {
    for (
      let columnCounter = 1;
      columnCounter <= columnInput.value;
      columnCounter += 1
    ) {
      console.log(columnCounter);
      tableBuild.innerHTML += symbols;
    }
    tableBuild.innerHTML += "<br>";
  }
};
