
// let grade = 1

// if (grade >= 90) {
//     console.log('A');
// } else if (grade >= 80) {
//     console.log(`B`)
// } else if (grade >= 70) {
//     console.log(`B`)
// } else if (grade >= 60) {
//     console.log(`D`)
// } else if (grade <= 50) {
//     console.log(`F`)
// }


const radius = 5
const Pi = 3.1415;
const area = Pi*radius*radius
const initialPlants = 100
const minSpace = 0.8
let week = 10

const plntGrowth = initialPlants * Math.pow(2,week - 1);

// if(initialPlants*week){
//     console.log(`There are ${plntGrowth} plants in the area`)
//     console.log(`${area}`)
// }

const areaCovered = minSpace * plntGrowth
 

// if(areaCovered>= area*.80){
   
//     console.log(`The plants are greater than 80 % of the area therefore it needs to be Pruned`)
// } else if(areaCovered>area*.50 && areaCovered<area*.80){
//     console.log(`The plants need to be monitored`)
// }   else if(areaCovered<=area*.51){
//     console.log(`There's room to plant more`)
//     console.log(`Max area availabe is ${area} meters squared`)
// }

const expGarden = minSpace * plntGrowth

console.log(`In 10 weeks the garden expanded to ${expGarden}sqm`)


//divide area by radius and mulitply by expgarden

const newRadius = Math.sqrt(expGarden*Pi)
console.log(`The new radius of the expanded garden will be ${newRadius}`)

 console.log(`${areaCovered} meters square have been covered.`)