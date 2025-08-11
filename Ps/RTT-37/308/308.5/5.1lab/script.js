function bow(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}
bow([1,2,3,4])

function blow(arr){
    let  avg = 0
    for (let i=0;i<=10;i++){
        avg=arr[i]/arr.length
}
}
blow([1,2,3,4])

const stringList = ["say", "hello", "in", "the", "morning"];

 

const stringsLongerThan = (arr) => {

  let longestString = "";

  let longestStringCount = 0;

 

  try {

    for (let str of arr) {

      if (str.length > longestStringCount) {

        longestStringCount = str.length;

        longestString = str;

      }

    }

  } catch (error) {

    console.error(error);

  }

  return longestString;

};

console.log(`\nThe longest String is: ${stringsLongerThan(stringList)}`);

 

const stringsLongerThanWithNumber = (arr, numb) => {

  let result = [];

 

  try {

    for (let str of arr) {

      if (str.length > numb) {

        result.push(str);

      }

    }

  } catch (error) {

    console.error(error);

  }

  return result;

};

const testNumber = 3;

console.log(`\nThe longest String is: ${stringsLongerThan(stringList)}`);

console.log(

  `\nStrings longer than ${testNumber} are: ${JSON.stringify(

    stringsLongerThanWithNumber(stringList, testNumber)

  )}`

);




