/* 
TERNARY OPERATOR = IS A SHORTCUT FOR AN "IF/ELSE" STATEMENT.

IT TAKES THREE OPERANDS
1. A CONDITION WITH ?
2. EXPRESSION IF TRUE :
3. EXPRESSION IF FALSE

condition ? exprIfTrue : exprIfFalse
*/

//          FIRST WAY OF DOING IT
let adult = checkAge(21);
console.log(adult);

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

//          SECOND WAY OF GETTING IT DONE
let adult2 = checkAge2(12);
console.log(adult2);

function checkAge2(age2) {
  return age2 >= 18 ? true : false;
}

//      ANOTHER EXAMPLE WITH THE SECOND FUNCTION
checkWinner(true);

function checkWinner(win) {
  /* THE CONDITION ? WAT TO DO IF TRUE : WHAT TO DO IF FALSE ; */
  win ? console.log("YOU WIN!") : console.log("YOU LOSE!");
}
