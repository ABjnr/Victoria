const myButton = document.getElementById("myButton");
const myAnimation = document.getElementById("myDiv");

const myButton2 = document.getElementById("myButton2");
const myAnimation2 = document.getElementById("myDiv2");

myButton.addEventListener("click", begin);
myButton2.addEventListener("click", begin2);

function begin() {
  let timerId = null;
  let x = 0;
  let y = 0;

  timerId = setInterval(frame, 5);

  /*  
         // SLIDE RIGHT
        function frame() {
        if (x >= 200) {
        clearInterval(timerId);
        } else {
        x += 1;
        myAnimation.style.left = x + "px";
        }
    */

  /*
        // SLIDE DOWN
        function frame() {
        if (y >= 200) {
        clearInterval(timerId);
        } else {
        y += 1;
        myAnimation.style.top = y + "px";
        } 
    */

  // SLIDE DIAGONALLY
  function frame() {
    if (y >= 200 || y >= 200) {
      clearInterval(timerId);
    } else {
      x += 1;
      y += 1;
      myAnimation.style.left = x + "px";
      myAnimation.style.top = y + "px";
    }
  }
}

function begin2() {
  // TO MAKE ROTATION
  let timerId2 = null;
  let degrees = 0;

  timerId2 = setInterval(frame2, 5);

  function frame2() {
    if (degrees >= 360) {
      clearInterval(timerId2);
    } else {
      degrees += 1;
      myAnimation2.style.transform = "rotateX(" + degrees + "deg)";
    }
  }
}
