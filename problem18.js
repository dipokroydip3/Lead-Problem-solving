// let arr = [1, 2, 3, 4, 5];

// let sum = 0;

// for(let i = 0; i < arr.length; i++){
//      sum += arr[i];
// }

// console.log(sum);


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let even = 0;
// let odd = 0;

// for(let i = 0; i < arr.length; i++){
//      if(arr[i] % 2 === 0){
          
//           even =+ arr[i];
//      }
//      else{
//           odd =+ arr[i];
//      }
// }
// console.log(even);
// console.log(odd);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenSum = arr
  .filter(num => num % 2 === 0)
  .reduce((sum, num) => sum + num, 0);

let oddSum = arr
  .filter(num => num % 2 !== 0)
  .reduce((sum, num) => sum + num, 0);

console.log("Even Sum:", evenSum);
console.log("Odd Sum:", oddSum);






