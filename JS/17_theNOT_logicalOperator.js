/* 
! NOT logical operator
typicallly used to reverse a conditon's boolean value
true -> false       false -> true
*/

let temp = 15;
let sunny = true;

if (!(temp > 0)) {
  console.log("It's cold outside");
} else {
  console.log("It's warm outside");
}

if (!sunny) {
  console.log("It's sunny outside");
} else {
  console.log("It's cloudy outside");
}
