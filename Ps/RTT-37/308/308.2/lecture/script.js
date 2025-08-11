// // let x = 10;
// // let y = 5;

// // {
// //     // variables declared inside a code block cannot be accessed outside of a code block
// // 	let z = x + y;
// // 	console.log(z);
// // }

// // {
// //   var x = 1;
// //   {
// //     var x = 2;  // same variable!
// //     console.log(x);  // 2
// //   }
// //   console.log(x);  // 2
// // }

// {  //Outer code block
//   let x = 1;

//   { //Inner code block
//     let x = 2;  // different variable
//     console.log(x);  // 2
//   }
//   console.log(x);  // 1
// }


// // Types of Errors:

// //  // Reference Error - variable/value doesnt exist or it doesnt exist in the scope you are trying access it in, or file has incorrect paths


// // if/else
// // If keyword
// // 2.1 followed by parenthaseswith a condition statement
// // 3.1 followed by braces containing code to  be run
// // 4.1 optional, else if , or else statemenr

// // f (num <= 10) {

// //   console.log(` ${num} is less than or equal to 10.`);

// // } else {

// //   console.log(` ${num} is greater than 10.`);

// // }
// let num
// if (num>0)
//     console.log('$(num) is positive')
// else
//     console.log('$(num) is 0 or less')


// let age = 19;

// if(age >= 17){
//     console.log('Access granted');
// }
// else{
//     console.log('Access denied');
// }
// console.log('End of application');


// let num1 = 0
// // Write a nested if...else statement.
// // Declare a variable called num.
// // if(num > 0){
// //     console.log('Positive')
// //     if(num > 100){
// //         console.log('(num) is Positive')
// //     }
// //     else{
// //         console.log('(num is negative')
// //     }
// // }else{
// //     console.log('(num) is negative')
// // }

// // Add an if...else statement that checks if num is positive & greater than 100.
// // Add another statement that checks if num is positive but less than 100.
// // Add a final statement to check if num is negative

// // If a learner gets 90 or higher: console.log("A")
// // let grade = 100

// // if(grade >= 90){
// //     console.log('A')
// // }
// // else if(grade >= 80){
// //     console.log('B)')
// // }
// // else if(grade >= 70){
// //     console.log('C')
// // }
// // else if(grade >= 55){
// //     console.log('D')
// // }
// // else {console.log('F')

// // }
// // If a learner get 80 or above: console.log("B")
// // If a learner get 70 or above: console.log("C")
// // If a learner get 55 or above: console.log("D")
// // Any grade lower than 55: console.log("F")
try {
    let x = -10;
    if (x < 0) {
        console.log("Negative");
    } else {
        throw "Error - I don't know what I'm doing";

    }
   }   catch (cat) {
        console.error(cat);
    } finally{
        console.log("doesn't matter i always run")
    }

    console.log("Does this log?")
    console.log("Does this log?")
    console.log("Does this log?")


 

if (false) {

   console.log('True');

} else {

   console.log('False');

}
let x = 10;

let output = (x > 10) ? "Greater" : "Not greater";

console.log(output);