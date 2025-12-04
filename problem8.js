function greaterThanAverage(arr) {
    // Step 1: calculate average
    const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;

    // Step 2: filter numbers greater than average
    return arr.filter(num => num > average);
}

console.log(greaterThanAverage([10, 20, 30, 40, 50])); 
// Output: [40, 50]