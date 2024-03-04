/* 
toLocaleString() = returns a string with a language sensitive representation of this number

number.toLocaleString(loccale, {options});

'locale' = specify that language (undefined = default set in browser)
'options' = object with formatting options
*/

let myNum = 123456.789;
myNum = myNum.toLocaleString("en-Us"); //US ENGLISH
console.log(myNum);

let myNum2 = 123456.789;
myNum2 = myNum2.toLocaleString("hi-IN"); //HINDI
console.log(myNum2);

let myNum3 = 123456.789;
myNum3 = myNum3.toLocaleString("de-DE"); //STANDARD GERMAN
console.log(myNum3);

let myNum4 = 123456.789;
myNum4 = myNum4.toLocaleString("en-US", { style: "currency", currency: "USD" }); //US ENGLISH AND CURRENCY
console.log(myNum4);

let myNum5 = 123456.789;
myNum5 = myNum5.toLocaleString("hi-IN", { style: "currency", currency: "INR" }); //HINDI AND INDIAN RUPEES
console.log(myNum5);

let myNum6 = 123456.789;
myNum6 = myNum6.toLocaleString("de-DE", { style: "currency", currency: "EUR" }); //EUROS
console.log(myNum6);

let myNum7 = 123456.789;
myNum7 = myNum7.toLocaleString(undefined, { style: "percent" }); //TO PERCENTAGE
console.log(myNum7);

let myNum8 = 100;
myNum8 = myNum8.toLocaleString(undefined, { style: "unit", unit: "celsius" }); //TO CELSIUS
console.log(myNum8);
