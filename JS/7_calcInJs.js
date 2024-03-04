let a;
let b;
let c;

document.getElementById("bothSides").onclick = function () {
  a = document.getElementById("getSideA").value;
  a = Number(a);
  b = document.getElementById("getSideB").value;
  b = Number(b);

  c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  console.log("Side C:", c);

  document.getElementById("result").innerHTML = "Side C: " + c;
};
