// Given an array of numbers, find and return the largest number.

// Example:
// Input: [3, 15, 7, 2, 9]
// Output: 15



function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log(findLargest([3, 15, 7, 2, 9]));