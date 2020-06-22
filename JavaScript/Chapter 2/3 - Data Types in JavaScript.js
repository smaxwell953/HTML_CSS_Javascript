/* PRIMITIVE
Stored directly in the location the variable accesses
Stored on the stack
*/

// String
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const hasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();

/*REFERENCE TYPES - Objects
Accessed by reference
Objects that are stored on the heap
A pointer to a location in memory
*/

//Array
const hobbies = ['movies', 'music'];
//Object literal
const address = {
    city: 'Boston',
    state: 'MA'
}
//Function
//Date

const today = new Date();

console.log(today);
console.log(typeof today);

/*
Dynamically typed languages
- Types are associated with values not variables
- Same variable can hold multiple types
- Do not need to specify types
- Most other languages are statically typed (Java, C#, C++)
- Supersets of JS and addons to allow static typing (TypeScript, Flow)
*/