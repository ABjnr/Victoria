let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";

// TO SELECT AN ELEMENT(S) BY NAME
let fruits = document.getElementsByName("fruits");
console.log(fruits);
console.log(fruits[1]);

// TO FIND AND DISPLAY WHICHEVER ELEMENT IS CHECKED
fruits.forEach((fruit) => {
  if (fruit.checked) {
    console.log(fruit.value);
  }
});

// GETTING ELEMENTS BY TAG NAME
let vegetables = document.getElementsByTagName("li");
vegetables[2].style.backgroundColor = "lightgreen";

// GETTING ELEMENTS BY CLASS NAME
let desserts = document.getElementsByClassName("desserts");
desserts[1].style.backgroundColor = "lightgreen";

// QUERY SELECTOR = CAN BE SELECTED BY CLASSNAME, TAG, ID OR ATTRIBUTE
let elementOfQuery = document.querySelector("#myTitle"); // IF SELECTING AN ID, PRECEED WITH #
elementOfQuery.style.backgroundColor = "darkgreen";

let elementOfQuery2 = document.querySelector(".class"); // IF SELECTING A CLASS, PRECEED WITH A PERIOD(.)
elementOfQuery2.style.backgroundColor = "PINK";

// TO SELECT ALL ELEMENTS WITH QUERY SELECTOR
let elementOfQuery3 = document.querySelector("li"); // THIS WILL  SELECT ONLY THE FIRST ITEM OF THE LIST
elementOfQuery3.style.backgroundColor = "red";

let elementOfQuery4 = document.querySelectorAll("li"); // TO SELECT ALL ITEMS, BUT WE HAVE TO MAKE USE OF A FOREACH LOOP
elementOfQuery4.forEach((element) => {
  element.style.backgroundColor = "red";
});
