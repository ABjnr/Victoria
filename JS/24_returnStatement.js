/* 
RETURN FUNCTION = RETURNS A VALUE BACK TO THE PLACE WHERE YOU INVOKED A FUNCTION
*/

let area;
let width;
let height;

width = window.prompt("Enter width:");
height = window.prompt("Enter height:");

area = getArea(width, height);
console.log("The area is:", area);

function getArea(width, height) {
  let result = width * height;
  // RETURN MEANS GIVING THE FUNCTION WHAT TO COLLECT AS A VARIABLE OR SOMETHING LIKE THAT.
  return result;
  /* 
            OR
    function getArea(width, height) {
        return width * height;
    }
  */
}
