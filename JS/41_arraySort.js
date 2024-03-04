/* 
HOW TO SORT AN ARRAY OF NUMBERS IN ASCENDING OR DESCENDING ORDER
*/

let grades = [100, 50, 90, 60, 80, 70];
grades = grades.sort(ascendingOrder);

grades.forEach(print);

function descendingOrder(x, y) {
  return y - x;
}

function ascendingOrder(x, y) {
  return x - y;
}

function print(element) {
  console.log(element);
}
