/* 
async = makes a function return a promise
*/

// REGULAR WAY
const promisee = new Promise((resolve, reject) => {
  let fileLoaded = true;

  if (fileLoaded) {
    resolve("File loaded!");
  } else {
    reject("File NOT loaded");
  }
});

promisee
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.log(error));

// EASIER WAY WITH ASYNC FUNCTION
async function loadFile() {
  let fileLoaded2 = false;

  if (fileLoaded2) {
    return "File loaded!";
  } else {
    throw "File NOT loaded";
  }
}

// CHANGE "promise" TO THE CALLBACK
loadFile()
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
