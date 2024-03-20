/* 
console.time() = starts a timer you can use to track how long an operation takes.
give each timer a unique name
*/

// start
console.time("Response time");

// alert("click the okay button");
setTimeout(() => console.log("Hello"), 3000);

// end
console.timeEnd("Response time");
