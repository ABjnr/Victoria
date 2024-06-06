/* 
window = is an interface used to talk to the web browser. The DOM (Document Object Module) is a property of the window.
*/

console.dir(window);

// TO GET THE WINDOW WIDTH AND HEIGHT
console.log(`Inner Width: ${window.innerWidth}`);
console.log(`Inner Height: ${window.innerHeight}`);
console.log(`Outer Height: ${window.outerHeight}`);
console.log(`Outer Width: ${window.outerWidth}`);

// FOR SCROLLBAR PROPERTIES
console.log(`X axis: ${window.scrollX}`);
console.log(`Y axis: ${window.scrollY}`);

// CHAGE THE HREF PROPERTY SO THAT IT REDIRESTC SOMEWHERE ELSE
console.log(window.location.href);
// window.location.href = "https://google.com"

// for hostname
console.log(window.location.hostname);

// for pathname
console.log(window.location.pathname);

const myButton = document.querySelector("#myButton");
const myButton2 = document.querySelector("#myButton2");
const myButton3 = document.querySelector("#myButton3");

myButton.addEventListener("click", () => window.open("https://google.com")); //you can put the url in between the bracket

// TO CLOSE THE CURRENT WINDOW
myButton2.addEventListener("click", () => window.close());

// TO PRINT CURRENT PAGE
myButton3.addEventListener("click", () => window.print());

// WINDOW POP-UP
// window.alert("wagwan?");

// TO MAKE A USER CONFIRM SOMETHING
// window.confirm("Press OK to continue");

// FOR A POP UP INPUT
// window.prompt("Enter your age:");
