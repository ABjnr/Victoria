let textbox = document.getElementById("textbox");
let cButton = document.getElementById("cButton");
let fButton = document.getElementById("fButton");
let submitButton = document.getElementById("submitButton");
let tempLabel = document.getElementById("tempLabel");

submitButton.onclick = function () {
  let temp;
  if (cButton.checked == true) {
    temp = textbox.value;
    temp = Number(temp);
    temp = toCelsius(temp);
    tempLabel.innerHTML = temp + "°C";
  } else if (fButton.checked == true) {
    temp = textbox.value;
    temp = Number(temp);
    temp = toFarenheit(temp);
    tempLabel.innerHTML = temp + "°F";
  } else tempLabel.innerHTML = "select a unit";
};

/* let temp;
temp = toFarenheit(temp);
console.log(temp); */

function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

function toFarenheit(temp) {
  return (temp * 9) / 5 + 32;
}
