/* 
error = an object with a description of "something went wrong"

throw = EXECUTES A USER-DEFINED ERROR

finally = IS A GOOD FORM OF CLEAN UP AS IT WILL ALWAYS EXECUTE WHETHER THERE IS AN ERROR OR NOT

ERRORS CAN HAPPEN FOR ONE OF A FEW REASONS;
1. YOU CANNOT OPEN A FILE
2. LOST CONNECTION
3. USER TYPES INCORRECT INPUT
4. typeError {mistaking (console.log) for (console.leg) or any other mispelling error}


WE USE try BLOCK TO OVERLOOK THE ERROS SO THEY DO NOT TERMINATE OUR PROGRAM
*/

// THIS IS A try BLOCK
try {
  console.lag();
} catch (error) {
  console.log(error);
}

try {
  let x = window.prompt("Enter a number");
  x = Number(x);

  // throw IS USED TO SET AN ERROR MESSSAGE OF YOUR CHOICE
  if (isNaN(x)) throw `That is not a number.`;
  if (x == "") throw "That was empty.";

  console.log(`${x} is a number`);
} catch (error) {
  console.log(error);
} finally {
  console.log("This always executes");
}
