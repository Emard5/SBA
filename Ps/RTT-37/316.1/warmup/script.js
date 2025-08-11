// Take an array of numbers and return the sum.

// Take an array of numbers and return the average.




let num = [10, 20, 30, 40, 50]

let sum_num = 0

for(i=0;1<num.length;i++){
    num += num[i]
}


console.log(sum_num);




let array = [1,2,8,9,10];

let sum = 0;

let average = 0;

for (let i = 0; i < array.length; i++) {

  sum += Number(array[i]);

}

console.log(sum);

average = sum / array.length;