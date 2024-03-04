/* 
REST PARAMETERS = REPRESENTS AN INDEFINITE NUMBER OF PARAMETERS (PACKS ARGUMENTS INTO AN ARRAY)
*/

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
// I DON'T REALLY UNDERSTAND THIS ONE YET ⬆️
