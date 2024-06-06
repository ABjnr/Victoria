/* cookies = a small text file stored on your computer used to remember information about the user saved in name-value pairs */

// TO CHECK IF YOU HAVE COOKIES ENABLED
console.log(navigator.cookieEnabled);

// to add a cookie
document.cookie =
  "firstName=Spongebob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
document.cookie =
  "lastName=SquarePants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";

// TO VIEW THE COOKIE
console.log(document.cookie);

/* 
CREATING A FUNCTION TO CREATE A COOKIE INSTEAD OF DOING IT MANUALLY

WE WILL NEED: NAME, VALUE AND EPIRITION DATE(OPTIONAL)
*/

function setCookie(name, value, daysToLive) {}
