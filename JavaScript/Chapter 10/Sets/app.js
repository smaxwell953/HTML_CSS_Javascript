// Sets - store unique values of any type

const set1 = new Set();

// Add values to set - didn't add if already there, values must be unique
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);
set1.add(100);

// const set2 = new Set([1, true, 'string']);
// console.log(set2);

// console.log(set1);

// Get count
// console.log(set1.size);

// Check for values
// console.log(set1.has(100)); // true
// console.log(set1.has(50+50)); // true
// console.log(set1.has({name: 'John'})); // false - reference object, not primitive value stored in stack

// Delete from set
// set1.delete(100);

// console.log(set1); // 3 values

// Iterating through sets

// For...of - entries gives array of 2
// for(let item of set1) {
//     console.log(item);
// }

// ForEach Loop
// set1.forEach((value) => {
//     console.log(value);
// });

// Convert set to array
const setArr = Array.from(set1);
console.log(setArr);