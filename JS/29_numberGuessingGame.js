const answer = Math.floor(Math.random() * 10 + 1);
let guessses = 0;

document.getElementById("submitButton").onclick = function () {
  let guess = document.getElementById("guessField").value;
  guessses += 1;

  if (guess == answer) {
    alert(`${answer} is the number. It took you ${guessses} guesses.`);
  } else if (guess < answer) {
    alert("Too small!");
  } else {
    alert("Too large!");
  }
};
