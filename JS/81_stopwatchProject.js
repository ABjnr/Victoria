const timeDisplay = document.querySelector("#timeDisplay");

const startButton = document.querySelector("#startButton");

const pauseButton = document.querySelector("#pauseButton");

const resetButton = document.querySelector("#resetButton");

const buttons = document.querySelectorAll(".timerBtn");

buttons.forEach((button) => {
  button.addEventListener("mouseover", mouseOverEffect);
  button.addEventListener("mouseout", mouseOutEffect);
});
/* () => {
  startButton.style.backgroundColor = "white";
  startButton.style.color = "black";
});
 */
function mouseOverEffect(event) {
  event.target.style.backgroundColor = "white";
  event.target.style.color = "black";
}
function mouseOutEffect(event) {
  event.target.style.backgroundColor = "black";
  event.target.style.color = "white";
}

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let secs = 0;

startButton.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1000);
  }
});
pauseButton.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
  }
});
resetButton.addEventListener("click", () => {
  paused = true;
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  hrs = 0;
  mins = 0;
  secs = 0;

  timeDisplay.textContent = "00:00:00";
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  secs = Math.floor((elapsedTime / 1000) % 60);
  mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  timeDisplay.textContent = `${hrs}:${mins}:${secs}`;

  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}
