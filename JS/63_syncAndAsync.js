/* 
synchronous code = is in an ordered sequence.
                    it is a step by step linear instruction. 
                    (start now, finish now.)

asynchronous code = can be out of sequence.
                    e.g: accessing a database,
                    fetching a file,
                    tasks that take time.
                    (start now, finish sometime later)
*/

// SYNCHRONOUS CODE EXAMPLE
console.log("START");
console.log("This step is synchronous");
console.log("STOP");
// IT IS A STEP BY STEP PROCESS, BEFORE THE NEXT STEP PROCEEDS THE PREVIOUS STEP MUST HAVE FINISHED

// ASYNCHRONOUS CODE EXAMPLE
console.log("START");
setTimeout(() => console.log("This is asynchronous"), 5000);
console.log("STOP");
