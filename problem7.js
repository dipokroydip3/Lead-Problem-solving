// Find the Second Largest Number in an Array
// Problem Statement

// You are given an array of integers.
// Your task is to find the second largest number in the array.

// Even if duplicates exist, you must still return the correct second largest value.

// If the second largest number does not exist, return -1.

// Input: [10, 20, 4, 20, 5]
// Output: 10

// Input: [3, 3, 3]
// Output: -1

// Input: [1, 5, 2, 8, 6]
// Output: 6




function secondLargest(nums) {
    if (nums.length < 2) return -1;

    let largest = -Infinity;
    let second = -Infinity;

    for (let num of nums) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num !== largest) {
            second = num;
        }
    }

    return second === -Infinity ? -1 : second;
}

console.log(secondLargest([10, 20, 4, 20, 5])); // 10
console.log(secondLargest([3, 3, 3]));          // -1
console.log(secondLargest([1, 5, 2, 8, 6]));    // 6

