/* 
FUNCTION = DEFINES CODE ONCE AND USE IT MANY TIMES.
TO PERFORM SOME CODES, CALL THE FUNCTION NAME. 
*/

let userName = "Arnorld";
let age = 21;
happyBirthday();

function happyBirthday() {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log("Happy birthday dear", userName);
  console.log("Happy birthday to you!");
  console.log("You are", age, "years old!");
}

// IN CASE THE VARIABLES ARE NOT GLOBAL, YOU HAVE TO CALL THEM OUT

startProgram();

function startProgram() {
  let userName2 = "Mike";
  let age2 = 29;
  happyBirthday2(userName2, age2);
}

function happyBirthday2(userName2, age2) {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log("Happy birthday dear", userName2);
  console.log("Happy birthday to you!");
  console.log("You are", age2, "years old!");
}

// YOU CAN USE "FUNCTION" WHEN YOU ARE GOING TO BE REPEATING SEVERAL LINES OF CODES
