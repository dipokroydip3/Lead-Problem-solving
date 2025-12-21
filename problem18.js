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


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenSum = arr
//   .filter(num => num % 2 === 0)
//   .reduce((sum, num) => sum + num, 0);

// let oddSum = arr
//   .filter(num => num % 2 !== 0)
//   .reduce((sum, num) => sum + num, 0);

// console.log("Even Sum:", evenSum);
// console.log("Odd Sum:", oddSum);





function findDuplicates(arr) {
    let freq = {};
    let duplicates = {};

    // frequency count
    for (let index in arr) {
        let value = arr[index];
        freq[value] = (freq[value] || 0) + 1;
    }

    // filter duplicates
    for (let key in freq) {
        if (freq[key] > 1) {
            duplicates[key] = freq[key];
        }
    }

    return duplicates;
}

// Test
console.log(findDuplicates([2, 3, 4, 2, 5, 3, 6, 3]));







