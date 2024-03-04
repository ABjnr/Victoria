/* 
SWITCH - statement that examines a value 
        for a match against many case clauses.
        more officient than many "else if" statements
*/

let grade = "C";

if (grade == "A") {
  console.log("You did great!");
} else if (grade == "B") {
  console.log("You did good!");
} else if (grade == "C") {
  console.log("You did okay!");
} else if (grade == "D") {
  console.log("You passed... barely!");
} else if (grade == "F") {
  console.log("YOU FAILED!");
} else {
  console.log(grade, "is not a letter grade!");
}

// USING SWITCH
switch (grade) {
  case "A":
    console.log("You did great!");
    break;
  case "B":
    console.log("You did good!");
    break;
  case "C":
    console.log("You did okay!");
    break;
  case "D":
    console.log("You passed... barely!");
    break;
  case "F":
    console.log("YOU FAILED!");
    break;
  // FOR NO MATCHING CASES YOU ADD A "DEFAULT" CLAUSE
  default:
    console.log(grade, "is not a letter grade!");
}

let score = 89;
switch (true) {
  case score >= 90:
    console.log("You did great!");
    break;
  case score >= 80:
    console.log("You did good!");
    break;
  case score >= 70:
    console.log("You did okay!");
    break;
  case score >= 60:
    console.log("You passed... barely!");
    break;
  case score <= 60:
    console.log("YOU FAILED!");
    break;
  default:
    console.log(score, "is not a letter grade!");
}
