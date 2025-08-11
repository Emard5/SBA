// Funtion - creating a variable to re use code logic

// How to define a function

// FUnction declarations - the best way
// // 1. Use funtion keyword
// // 2. name the function
// // 3. put parentheses - allow us to define parameters (expected arguments)
// // 4. curly brackets - denote the code block to berun (logic)

function sayHello() {
    console.log(`Hello There`);
}
sayHello();

// Function Expression - are not hoistable
// // 1. Declare a vairable
// // 2. set equal to ananymous function
// // // 2a. function keyword
// // // 2b. put parentheses
// // // 2c. put curly braces
let greeting = function () {
    console.log(`Greetings Human`)
}

greeting()


// Arro Functions - Not Hoistable
// // 1. declre variable as function
// // 2. set equal to parenthases
// // 3. arrow => points to code block to be run
// // 4. curly braces
let goodbye = () => {
    console.log(`Toodle doo Humans`)
}

goodbye();


// function areBothEven(n1, n2) {

//     try {

//         if (typeof n1 != Number || typeof n2 != Number) {

//             throw `Error - incorrect data type`;

//         }



//         return !n1 % 2 && !n2 % 2;

//     } catch (err) {

//         console.error(err);

//     }

// }



// areBothEven();





// Exercise
function areBothEven(n1, n2) {
    return !n1 % 2 && !n2 % 2;
}

areBothEven()



function computeArea(width,height){
    return `The are of a rectangle with a width of ${width} and a height of ${height} is ${height*width} square units`
}
computeArea()


// const planetHasWater = funtion(planet){

//     planet = planet.toLoweCase();

//     return planet == `mars` || planet == `earth`
// };

// let result = planet(`mArs`)

// console.log(result)


// function planetHasWater(planet){
//     if (planet = Earth) (planet=Mars){
//         console.log(`true`)
//     } else(){
//         console.log(false)
//     }
// }

