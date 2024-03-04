/* 
spread operator = allows an iterable such as an array or string to be expanded in places where zero or more arguments are expected (unpacks the elements)
*/

// FOR NUMBERS
let numbers = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
console.log(...numbers);

// FOR STRINGS
let userName = "David Beckham";
console.log(userName);
console.log(...userName);

// APPLICATION OF THE SPREAD OPERATOR
let maximum = Math.max(...numbers);
console.log(maximum);

// TO MERGE TWO ARRAYS
let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

// WITH THE SPREAD OPERATOR
class1.push(...class2);
console.log(class1);

// TO SHOW THEM SEPERATELY
console.log(...class1);
