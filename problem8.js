// function greaterThanAverage(arr) {
//     // Step 1: calculate average
//     const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;

//     // Step 2: filter numbers greater than average
//     return arr.filter(num => num > average);
// }

// console.log(greaterThanAverage([10, 20, 30, 40, 50])); 
// Output: [40, 50]



// solve with two pass way


function greaterThanAverage(arr) {
    // First pass: compute sum
    let sum = 0;
    for (const num of arr) sum += num;

    const avg = sum / arr.length;

    // Second pass: filter
    return arr.filter(n => n > avg);
}

console.log(greaterThanAverage([10, 20, 30, 40, 50]));
