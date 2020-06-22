//Type Conversion
let val;

//Number to string
val = String(555); //3
val = String(4+4); //8
// Bool to string
val = String(true); //4
// Date to string
val = String(new Date()); //57
// Array to string
val = String([1,2,3,4]); //7

//toString()
val = (5).toString(); //5
val = (true).toString(); //true

// String to number
val = Number('5'); //5
val = Number(true); //1
val = Number(false); //0
val = Number(null); //0
val = Number('hello'); //NaN
val = Number([1,2,3]); //NaN

val = parseInt('100.30'); //100
val = parseFloat('100.30'); //100.3; 100.30 with toFixed(2))

// Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

const val1 = String(5); //5
const val2 = 6;
const sum = val1 + val2;
//11 with 5 not string; 56 with 5 as string

console.log(sum);
console.log(typeof sum);