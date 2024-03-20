/* 
The date object is used to work with date and time.
*/

// IF YOU DO NOT PASS IN AN ARGUMENT THE DATE WILL BE THE CURRENT DATE AND TIME
let date = new Date();
console.log(date);

// TO MAKE IT MORE READABLE
date = date.toLocaleString();
console.log(date);

// WITH HTML
date = date.toLocaleString();
document.getElementById("myLabel").innerHTML = date;

// LET US TRY PASSING AN ARGUMENT
// 0 as the argument will give us a reference point
let date2 = new Date(0);
date2 = date2.toLocaleString();
console.log(date2);

// PASSING IN RANDOM MILLISECINDS TO SEE WHAT DATE WE GET
let date3 = new Date(100000000000);
date3 = date3.toLocaleString();
console.log(date3);

/* 
OTHER ARGUMENTS INCLUDE AND ARE IN THIS ORDER:
(year, month, day, hour, minutes, seconds, milliseconds)
*/
let date4 = new Date(2023, 0 /* corresponds with january */, 1, 2, 3, 4, 5);
date4 = date4.toLocaleString();
console.log(date4);

// YOU CAN PASS IN A DATE IN FORM OF STRING
let date5 = new Date("January 1, 2023 00:00:00");
date5 = date5.toLocaleString();
console.log(date5);

// YOU CAN GET PROPERTIES FROM A CURRENT DATE like the year
let date6 = new Date();
let year = date6.getFullYear();
console.log(year);

// OR THE DAY OF THE MONTH (WILL BE IN FIGURE)
let date7 = new Date();
let dayOfMonth = date7.getDate();
console.log(dayOfMonth);

//  OR THE WEEK (WILL BE IN FIGURE)
let date8 = new Date();
let dayOfWeek = date8.getDay();
console.log(dayOfWeek);

//  OR THE MONTH (WILL BE IN FIGURE)
let date9 = new Date();
let month = date9.getMonth();
console.log(month);

//  OR THE HOUR (WILL BE IN MILITARY TIME)
let date10 = new Date();
let hour = date10.getHours();
console.log(hour);

//  OR THE MINUTE
let date11 = new Date();
let minute = date11.getMinutes();
console.log(minute);

//  OR THE MINUTE
let date12 = new Date();
let Second = date12.getSeconds();
console.log(Second);

//  OR THE MINUTE
let date13 = new Date();
let Millisecond = date13.getMilliseconds();
console.log(Millisecond);

// YOU CAN SET YEAR, DATE, HOUR, MINUTE. ETC for example:
let date14 = new Date();
date14.setFullYear(2029);
date14 = date14.toLocaleString();
console.log(date14);

// WE CAN CREATE OUR FUNTION TO FORMAT DATE AND TIME
let date15 = new Date();

document.getElementById("myLabel2").innerHTML = formatDate(date15);

function formatDate(dat) {
  let year = dat.getFullYear();
  let month = dat.getMonth() + 3;
  let day = dat.getDate();

  return `${month}/${day}/${year}`;
}

// WE CAN DO THE SAME TO TIME
let date16 = new Date();

console.log(formatTime(date16));

function formatTime(tim) {
  let hours = tim.getHours();
  let minutes = tim.getMinutes();
  let seconds = tim.getSeconds();

  //TO CHANGE IT FROM 24HRS TO 12HRS
  let amOrPm = hours >= 12 ? "pm" : "am";

  hours = hours % 12 || 12;

  return `${hours}:${minutes}:${seconds} ${amOrPm}`;
}
