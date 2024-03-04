/* 
slice() extracts a section of a string
and returns it as a new string,
without modifying the original string
*/

let fullName = "Bro Code";
let firstname;
let lastName;

/* lastName = fullName.slice(4);
firstname = fullName.slice(0, 3); */

firstname = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstname);
console.log(lastName);

// MY MINI PROJECT AGAIN

document.getElementById("submit").onclick = function () {
  nameInput = document.getElementById("input").value;
  nameInput = nameInput.toUpperCase();
  document.getElementById("label").innerHTML =
    "Hello, " + nameInput.slice(0, nameInput.indexOf(" ")) + ".";
};
