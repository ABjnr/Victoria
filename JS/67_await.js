/* 
await = makes an async function wait for a promise

WHEN USING THE "await" KEYWORD, YOU DONT NEED TO INVOKE "then" and "catch"
*/

async function loadFile() {
  let fileLoaded = false;

  if (fileLoaded) {
    return "File loaded";
  } else {
    throw "File NOT loaded";
  }
}
/* 
INSTEAD OF USING THESE TWO LINES OF CODE...

loadFile()
  .then((value) => console.log(value))
  .catch((error) => console.log(error));
 */

// "await" CAN ONLY BE USED IN AN "async" FUNCION
async function startProcess() {
  // IN CASE OF ANY ERRORS, MAKE USE OF A TRY BLOCK. YOU NEED THIS IF YOU ARE USING THE "throw" FUNCTION AND  NOT THE "return" FUNCTION FOR THE REJECT ASPECT
  try {
    let message = await loadFile();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}
startProcess();
