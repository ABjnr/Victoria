/* 
event = is some action that the user or browser does.
*/

function doSomething() {
  alert("You did something");
}

function changeColor() {
  div.style.backgroundColor = "red";
}

function changeColor2() {
  div.style.backgroundColor = "pink";
}

function defaultColor() {
  div.style.backgroundColor = "lightgreen";
}

// INCASE OF SETTING EVENT ATTRIBUTES WITHIN YOUR HTML YOU COULD DO SO WITHING YOUR JAVASCRIPT FILE

const element = document.getElementById("myButton");
element.onclick = doSomething;
/* do not invoke it with parnethesis() else it will begin without you clicking the button */

/* const element2 = document.body;
element2.onload = doSomething; */

const textBox = document.getElementById("myText");
textBox.onchange = doSomething;

const div = document.getElementById("myDiv");
div.onmouseover = changeColor;
div.onmouseout = defaultColor;
div.onmousedown = changeColor2;
div.onmouseup = changeColor;
