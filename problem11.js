// function filterOddGreaterThanTen(arr) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10 && arr[i] % 2 === 1) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log(filterOddGreaterThanTen([5, 12, 17, 9, 21, 30, 41]));

function filterEvenGreterThantTen (arr2) {
  let result2 = [];

  for (let i = 0; i < arr2.length; i++) {
    if(arr2[i] > 10 && arr2[i] % 2 == 0) {
      result2.push(arr2[i]);
    }
  }
  return result2;
}

console.log(filterEvenGreterThantTen([5, 12, 15, 20, 45, 21]));
