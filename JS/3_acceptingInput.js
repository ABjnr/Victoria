// HOW TO ACCEPT USER INPUT

// EASY WAY WITH WINDOWS PROMPT
let username = window.prompt("What's your name?");
console.log(username);

// DIFFICULT WAY WITH TEXTBOX
document.getElementById("submitButton").onclick = function () {
  username2 = document.getElementById("usersName").value;
  console.log(username2);
  // TO CHANGE THE "WHAT IS YOUR NAME" TO DISPLAY THE NAME INPUTED
  document.getElementById("myLabel").innerHTML = "Hello, " + username2;
};
