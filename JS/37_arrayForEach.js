/* 
arry.forEach() = EXECUTES A PROVIDED CALLBACK FUNTION ONCE FOR EACH ARRAY ELEMENT
*/

let students = ["spongebob", "patrick", "squidward", "gregory"];
students.forEach(capitaliseFirstLetter);
students.forEach(print);

let students2 = ["SANDY", "MRS. PUFF", "MR. KRABS"];
students2.forEach(downsize);
students2.forEach(print);

let students3 = ["henry", "jasper", "ray", "schwoz"];
students3.forEach(capitaliseAllText);
students3.forEach(print);

// TO CAPITALISE THE FIRST LETTER OF EACH ELEMENT
function capitaliseFirstLetter(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}
// console.log(students[3]);

// TO MAKE ALL LETTERS IF EACH ELEMENT IN LOWERCASE
function downsize(element, index, array) {
  array[index] = element.toLowerCase() + element.substring(100);
}
// console.log(students2[2]);

// TO CAPITALISE ALL LETTERS IN EACH ELEMNT
function capitaliseAllText(element, index, array) {
  array[index] = element.toUpperCase() + element.substring(100);
}
// console.log(students3[1]);

function print(element) {
  console.log(element);
}
