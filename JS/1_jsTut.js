console.log("hello World!");
// window.alert("PLEASE GO BACK BEFORE I LOSE MY TEMPER!");

// THIS IS A COMMENT

/* THIS 
IS A 
MULTI-LINE 
COMMENT */

// DECLARING A VARIABLE
let age;

// VARIABLE ASSIGNMENT
age = 21;
age = age + 1;
console.log(age);

//  THE ABOVE IS A NUMBER DATA TYPE 🔝🔝🔝🔝🔝🔝

// NOW FOR STRING DATA TYPE
let firstName = "Abel";
console.log(firstName);

// BOOLEAN DATA TYPE
let studentEnrolled = true;
let freshStudent = false;
console.log(studentEnrolled);
console.log(freshStudent);

// DISPLAYING A TEXT WITH GIVEN VARIABLE
console.log("Hello,", firstName);
console.log("You are", age, "years old.");
console.log("Enrolled:", studentEnrolled);

// DISPLAYING TEXTS ON THE WEBPAGE WITH JAVASCRIPT AND GIVEN VARIABLES
document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old.";
document.getElementById("p3").innerHTML = "Enrolled: " + studentEnrolled;
