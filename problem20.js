// function strongLogicSum(arr) {
//   let unique = [];
//   let sum = 0;

//   // Step 1: unique positive numbers
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];

//     if (num > 0 && unique.indexOf(num) === -1) {
//       unique.push(num);
//     }
//   }
//    return sum;
// }

// // Example
// console.log(strongLogicSum([12, 21, 30, 12, -3, 10, 1])); // 41



function findSmallestEvenDigitSum(arr) {
  let unique = [];
  let smallest = null;

  // Step 1: collect unique positive numbers
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (num > 0 && unique.indexOf(num) === -1) {
      unique.push(num);
    }
  }

  // Step 2: check digit sum even
  

  return smallest === null ? "Not Found" : smallest;
}

// Example
let numbers = [12, -4, 22, 15, 12, 8, 33, 44];
console.log(findSmallestEvenDigitSum(numbers)); // 22
