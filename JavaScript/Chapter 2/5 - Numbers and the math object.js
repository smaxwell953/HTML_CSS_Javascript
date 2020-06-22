//Numbers and the math object
const num1 = 100;
const num2 = 50;
let val;

//Simple math with numbers
val = num1 + num2; // 150
val = num1 * num2; // 5000
val = num1 - num2; // 50
val = num1 / num2; // 2
val = num1 % num2; // 0

//Math object
val = Math.PI; // 3.14159...
val = Math.E; // Euler
val = Math.round(2.4); // 2
val = Math.ceil(2.4); // 3
val = Math.floor(2.4); // 2
val = Math.sqrt(64); // 8
val = Math.abs(-3); // 3
val = Math.pow(8,2); // 64
val = Math.min(2,33,4,1,55,6,3); // 1
val = Math.max(2,33,4,1,55,6,3); // 55
val = Math.random(); // random decimal, keeps changing

val = Math.floor(Math.random() * 20 + 1); // between 0 and 19 without 1; floor removes decimals

console.log(val);