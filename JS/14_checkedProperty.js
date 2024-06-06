// WITH CHECKBOX

document.getElementById("myButton").onclick = function () {
  if (document.getElementById("myCheckbox").checked == true) {
    console.log("You are subscribed!");
  } else {
    console.log("You are not subscribed!");
  }
};

// METHOD 2 - STORING ELEMENTS WITHIN A VARIABLE

/* 0, brazil, venus, ab, kansas, iron, chinese, 3 hearts, jupiter, pacific */

document.getElementById("myButton").onclick = function () {
  const myCheckbox = document.getElementById("myCheckbox");
  const subscribeMessage = document.getElementById("subscribeMessage");

  // THE MESSAGE
  const paymetTypeMessage = document.getElementById("paymetTypeMessage");

  // WITH RADIO BUTTONS

  const visaBtn = document.getElementById("visaBtn");
  const mastercardBtn = document.getElementById("mastercardBtn");
  const paypalBtn = document.getElementById("paypalBtn");

  // FOR SUBCRIPTION STATUS
  if (myCheckbox.checked == true) {
    /* it doesnt matter if you add the true or not */ console.log(
      "You are subscribed!"
    );
  } else {
    console.log("You are not subscribed!");
  }

  if (myCheckbox.checked) {
    subscribeMessage.innerHTML = "You are subscribed!";
  } else {
    subscribeMessage.innerHTML = "You are not subscribed!";
  }

  // WITH RADIO BUTTONS
  if (visaBtn.checked) {
    console.log("You are paying with a Visa!");
  } else if (mastercardBtn.checked) {
    console.log("You are paying with a Mastercard!");
  } else if (paypalBtn.checked) {
    console.log("You are paying with a PayPal!");
  } else {
    console.log("You must select a payment type!");
  }

  if (visaBtn.checked) {
    paymetTypeMessage.innerHTML = "You are paying with a Visa!";
  } else if (mastercardBtn.checked) {
    paymetTypeMessage.innerHTML = "You are paying with a Mastercard!";
  } else if (paypalBtn.checked) {
    paymetTypeMessage.innerHTML = "You are paying with a PayPal!";
  } else {
    paymetTypeMessage.innerHTML = "You must select a payment type!";
  }
};
