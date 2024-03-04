// TO GENERATE RANDOM NUMBERS BETWEEN A PARTICULAR RANGE
let x;
let y;
let z;

document.getElementById("rollButton").onclick = function () {
  x = Math.floor(Math.random() * 20) + 1;
  y = Math.floor(Math.random() * 20) + 1;
  z = Math.floor(Math.random() * 20) + 1;

  document.getElementById("xLabel").innerHTML = x;
  document.getElementById("yLabel").innerHTML = y;
  document.getElementById("zLabel").innerHTML = z;
};
