const radius = 5;
const Pi = 3.1415;
const area = Pi * radius * radius;
const areaPerPlant = 0.8;
const initialPlants = 20;
const weeks = 2;

function monitorPlantGrowth(weeks, numPlants) {
    for (let i = 1; i <= weeks; i++) {
        numPlants = numPlants * 2;
    }
    return numPlants;
}

const finalPlants = monitorPlantGrowth(weeks, initialPlants);

console.log(`week ${weeks}`);
console.log(`Current number of plants: ${finalPlants}`);