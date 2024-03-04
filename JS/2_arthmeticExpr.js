/* 
arithmetic expressions is a combination of...
operands (values, variables, etc.)
operators (+ - * / %)
that can be evaluated to a value
ex, y = x + 5;
*/

let students = 20;
// ADDITION
students = students + 1;
// SUBTRACTION
students = students - 1;
// MULTIPLICATION
students = students * 2;
// DIVISION
students = students / 2;

// MODULUS % (GIVE YOU THE REMAINDER OF ANY DIVISION)
/* 
TO FIND IF A NUMBER IS EVEN OR ODD YOU DO (variable % 2) IF THE RESULT IS "1" IT IS ODD, IF IT IS "0" THEN IT IS EVEN.
*/
let extraStudents = students % 3;

// FOR SHORTCUT WE USE "AUGMENTED ASSIGNMENT OPERATOR" BUT THEY DO NOW WORK FOR MODULUS. LOOK BELOW.
students += 1; // ADDITION
students -= 1; // SUBTRACTION
students *= 2; // MULTIPLICATION
students /= 2; // DIVISION

console.log(students);
console.log(extraStudents);

/* 
OPERATOR PRECEDENCE (HOW THE MACHINE CALCULATES: LIKE BODMAS)
1. PARENTHESIS ( )
2. EXPONENTS
3. MULTIPLICATION $ DIVISION
4. ADDITION $ SUBTRACTION
*/

let result = 1 + 2 * (3 + 4);
console.log(result);
