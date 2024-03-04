/* 
nested functions = functions inside other functions.
                    outer functions that have access to inner functions.
                    inner functions are "hidden" from outside the other function.
                    used in closures(future video topic)
*/
let userName = "Bro";
let userInbox = 0;

login();

// WHEN YOU WRITE IT THIS WAY IT ADDS MORE SECURITY TO THE DATA CAUSE YOU CANNOT ACCESS THE INNER FUNCTIONS WITHOUT THE OUTER FUNCTION.
function login() {
  displayUserName();
  displayUserInbox();

  function displayUserName() {
    console.log(`Welcome, ${userName}`);
  }

  function displayUserInbox() {
    console.log(`You have ${userInbox} new messages.`);
  }
}
