// 2D ARRARYS - AN ARRAY OF ARRAYS

let fruits = ["apples", "oranges", "bananans"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let grocceryList = [fruits, vegetables, meats];

/* 
TO CHANGE AN ELEMENT IN A 2D ARRAY YOU USE
grocceryList[][] 

where the arrays are seen as a table
let fruits =     ["apples", "oranges", "bananans"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats =      ["eggs", "chicken", "fish"];
where the first [] represents the row the element occupies ➡️
and the second [] represents the column the element occupies ⬇️

Therefore to change apples to beans it will be...
            grocceryList[0][0] = "beans"

To change potatoes to noodles it will be...
            grocceryList[1][2] = "noodles"
    Have it in mind that the first element is counted as 0 not 1.
*/

grocceryList[0][0] = "beans";
grocceryList[1][2] = "noodles";
// TO DISPLAY ALL ELEMENTS WITHOUT GROUPING THEM.
for (let list of grocceryList) {
  for (let food of list) {
    console.log(food);
  }
}
