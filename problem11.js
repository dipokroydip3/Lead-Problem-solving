function filterOddGreaterThanTen(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10 && arr[i] % 2 === 1) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(filterOddGreaterThanTen([5, 12, 17, 9, 21, 30, 41]));