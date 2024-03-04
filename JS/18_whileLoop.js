/* 
WHILE LOOP - repeats some code while some condition is true 
could potentially repeat infinitely
*/

/* let userName = "";

while (userName == "") {
  userName = window.prompt("Enter your name");
}
console.log("Hello", userName); */

const nameInput = document.getElementById("nameInput");
const nameLabel = document.getElementById("nameLabel");
const nameSubmit = document.getElementById("nameSubmit");

nameSubmit.onclick = function () {
  userName = nameInput.value;
  while (userName == "" || userName == null) {
    userName = window.prompt("Enter your name");
  }
  userName = userName.toUpperCase();
  console.log("Hello,", userName);
  nameLabel.innerHTML = "Hello, " + userName + ".";
};
