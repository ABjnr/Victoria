/* 
break = breaks out of a loop entirely
continue = skip an iteration of a loop
*/

// BREAK STATEMENT - STOP AT A GIVEN NUMBER
for (let i = 1; i <= 20; i += 1) {
  if (i == 13) {
    break;
  }
  console.log(i);
}

// CONTINUE STATEMENT - SKIPS THE GIVEN NUMBER AND CONTINUES
for (let i = 1; i <= 20; i += 1) {
  if (i == 13) {
    continue;
  }
  console.log(i);
}
