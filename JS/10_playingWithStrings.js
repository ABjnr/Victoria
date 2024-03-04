let userName = "   Bro Code";
let phoneNumber = "123-456-7890";
let phoneeNumber = "123-456-7890";

let nameLength = userName.length;

// TO CHECK THE LENGTH OF A VARIABLE
console.log(userName.length);

// TO GET A PARTICULAR CHARACTER AT A GIVEN INDEX
let firstLetter = userName.charAt(0);
console.log(firstLetter);

// TO CHECK WHEN A LETTER OR INDEX FIRST OCCURED
console.log(userName.indexOf("o"));

// TO CHECK WHEN A LETTER OR INDEX LAST OCCURED
console.log(userName.lastIndexOf("o"));

// TO GET RID OF EMPTY SPACES BEFORE AND AFTER ANY OTHER CHARACTERS
userName = userName.trim();
console.log(userName);

// TO MAKE THE STRING ALL UPPERCASE
userName = userName.toUpperCase();
console.log(userName);

// TO MAKE THE STRING ALL LOWERCASE
userName = userName.toLowerCase();
console.log(userName);

// TO REPLACE CHARACTERS WITH ANOTHER CHARACTER
phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);

// TO REPLACE CHARACTERS WITH ANOTHER CHARACTER
phoneeNumber = phoneeNumber.replaceAll("-", "");
console.log(phoneeNumber);

// JUST MY OWN TEST OF KNOWLEGDE
document.getElementById("submit").onclick = function () {
  usersName = document.getElementById("input").value;
  usersName = usersName.toUpperCase();
  document.getElementById("label").innerHTML = "Hello, " + usersName;
};
