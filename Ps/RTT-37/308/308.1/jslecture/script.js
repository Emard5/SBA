// JS Language Notes

/*
 * - high-level & loosely typed language
 * - all variable are case-sensitive
 * - uses unicode char set
 * - each instruction(step) called a "statement", should end with a semi-colon ;
 * - // marks a single line comment
 * - there are reserved/keywords that can only be used for control flow
 * - to run JS in Terminal you must run `node <fileName>` CAN ONLY BE DONE WITH PURE JS FILES, NOT WHEN ATTACHED TO HTML FILE
 */

// Using JS with HTML:
// // use <script>code here</script> tag to write directly in to HTML page ***MUST BE AT BOTTOM OF BODY***
// // OR link externally with <script src="filePathToJSScript"></script>
// // use "defer" attribute in <script></script> tag to be able to put into head of html

// Important JS Tools:
// // console.log() allow the printing of values to console (browser or server-side)

// Variable Definition - place in memory that we give a reference name, that can store any data

// JS Primitive DataTypes:
// - Numbers
// - Ints
// - Floats
let num1 = 13; //Declaring a number with let, notice no quotes
let num2 = 23;

console.log(num1);

// - Strings - always denotated by quotes: single, double, or backtics <-- the best
const name1 = "Dylan";
let numString = "13";
let yearString = `2025`;
// - Booleans
let boolean1 = true;
let boolean2 = false;

// - Null
const null1 = null;

// - Undefined
let undef;

// Other DataTypes:
// - Objects
// - Arrays
// - BigInt
// - Symbol

// Types of Casings
// camelCase - common in JS
// snake_case - common in python

// Variable Decaltartions
// // let - block scoped, re-assignable (change the value), NOT redeclarable
// // const - constant, same as let but CANNOT be reassigned or redeclared
// // var - DONT USE IT!!! PLS. Creates global variables, so it pollutes the global application

// Literals - values used direclty in JS without being assigned to a variable, cannot be re-referenced

// typeof keyword - tells data type of variable/literal
console.log(typeof num1);
console.log(typeof name1);
console.log(typeof boolean1);
console.log(typeof null1); // typeof Null is always object
console.log(typeof undef);

// Artimetic Operators
// // + addition/concatenation w/strings
// console.log(num1 + num2);
// let num3 = num1 + num2; // saving output to its own variable for later use\

// // - subtraction
// console.log(num1 - num2);

// // * multiplication
// console.log(num1 * num2);

// // ** exponentiation
// console.log(num1 ** num2);

// // / division
// console.log(num1 / num2);

// // % modulus (remainder after division w/ whole numbers)
// console.log(7 % 3); // 3 + 3 = 6 -> 7 - 6 = 1

// Artimetic Shorthand --------------------------------------|
// console.log(num1);
// num1 = num1 + num2; //reassign the value of num1 to the sum of both
// num1 += num2 // same as above but easier and shorter to write
// console.log(num1);

// console.log(num1);
// num1 = num1 - num2; //reassign the value of num1 to the sum of both
// num1 -= num2 // same as above but easier and shorter to write
// console.log(num1);

// console.log(num1);
// num1 = num1 * num2; //reassign the value of num1 to the sum of both
// num1 *= num2 // same as above but easier and shorter to write
// console.log(num1);

// console.log(num1);
// num1 = num1 / num2; //reassign the value of num1 to the sum of both
// num1 /= num2 // same as above but easier and shorter to write
// console.log(num1);

// console.log(num1);
// num1 = num1 % num2; //reassign the value of num1 to the sum of both
// num1 %= num2 // same as above but easier and shorter to write
// console.log(num1)

// Increment / Decrement Shorthand - always reassigns the og value + 1
console.log(num1); // 13
console.log(num1++); // add one to the original value AFTER console.logging it

num1--; // decrement
console.log(++num1); // omcreaments before console.logging it
--num1;

// Compairison Operators---------------------------------|
// All compairison operators compares values and returns a boolean (true/false)

// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to
// == loose compairison, equal to. compare value NOT data types. can be used with strings
// === strict compairison, equal to. compare value AND data type. can be used with strings
// console.log(3 == "3"); // returntrue
// console.log(3 === "3"); // return false

// != NOT equal to

// Logical Operators ------------------------------------|
// Allows us to combine multiple compairisons operators into one big compairison

// && - AND operator, all compairisons must be true to return true
console.log(2 > 3 && 3 == 3);

// || - OR operator - only ONE needs to be true to return true
console.log(2 > 3 || 3 === 3);

// ! - NOT operator - return the opposite of whatever the compairson returns. if compairison is true, will return false & vice versa

console.log(!(2 > 3 || 3 == 3));

// String Concactenation = addition of two items into one, specificallystrings (and sometimes arrays)
// If you concatenatr aumber with a string,it will turn everything into a string
// let planet = "World"
// let greeting = "Hello, "
// let phrase = greeting + planet
// console.log(phrase);


// String access - strings are lists/arrays of chars and can be accessed with squared bracket notation
// 
// square bracket notation allows us to access tthe values at certain indexes within a list
