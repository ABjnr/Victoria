/* 
ADDING AND CHANGING HEML ELEMENTS

YOU CAN EITHER DO THIS BY:
.innerHTML (vulnerable to XSS[Cross site scripting] attacks)
.textContent (more secure)
*/
const nameTag = document.createElement("h1");
/* nameTag.innerHTML = "Bro"; // DEFIFNING YOURSELF */
nameTag.textContent /* rather than using .innerHTML */ =
  window.prompt("Enter your name:"); // DEFINING BY USER INPUT
// TO ADD THIS ELEMENT, DECLARE WHERE YOU WANT TO ADD IT TO SPECIFICALLY
document.body.append(nameTag);

// ADDING LIST ITEM TO AN UNORDERED LIST
const myList = document.querySelector("#fruit");
// CREATE THE LIST ITEM ELEMENT
const listItem = document.createElement("li");
listItem.textContent = "Mango";
myList.append(listItem);

// TOO ADD THE ITEM TO THE BEGINNING OF YOUR LIST, USE "prepend"
const listItem2 = document.createElement("li");
listItem2.textContent = "Plum";
myList.prepend(listItem2);

// TO ADD A LIST ITEM IN BETWEEN THE LIST ITEM
const listItem3 = document.createElement("li");
listItem3.textContent = "Pineapple";
myList.insertBefore(listItem3, myList.getElementsByTagName("li")[3]);
