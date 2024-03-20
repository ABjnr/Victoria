/* 
promise = is an object that encapsulates the result of an asynchronous operation

a benefit is that they let asynchronous methods return values like synchronous methods.

it is a promise to retunr something in the future. "I promise to return something in the future"

the STATE is 'pending' then: 'fulfilled' or 'rejected' 
the RESULT is what can be returned
2 parts: producing & consuming
*/

// step 1 - the PRODUCING code
const promise = new Promise((resolve, reject) => {
  let fileLoaded = false;

  if (fileLoaded) {
    resolve("File loaded");
  } else {
    reject("File NOT loaded");
  }
});

// STEP 2 - the CONSUMING code
promise
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

// ANOTHER EXAMPLE
const promise2 = new Promise((resolve) => {
  setTimeout(resolve, 5000);
});

promise2.then(() => console.log("Thanks for waiting"));

// PASSING AN ARGUMENT TO A PROMISE
const wait = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

wait(3000).then(() => console.log("Thanks for waiting again"));

// https://www.youtube.com/watch?v=DHvZLI7Db8E
