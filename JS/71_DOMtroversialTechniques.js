// THE LAST CHILD IS THE LAST LINE OF THE DOCUMENT, IN THIS CASE, IT IS THE SCRIPT TAG

let element = document.body; // SELECTS THE BODY OF THE DOCUMENT

let child = element.firstElementChild; // TO SELECT THE FIRST CHILD (FIRST UNORDERED LIST)
child.style.backgroundColor = "lightgreen";

/* 
.firstElementChild
.lastElementChild
.parentElement
.nextElementSibling
.previousElementSibling
.children[]
Array.from(.children)

*/
