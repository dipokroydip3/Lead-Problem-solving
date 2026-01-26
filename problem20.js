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



// function findSmallestEvenDigitSum(arr) {
//   let unique = [];
//   let smallest = null;

//   // Step 1: collect unique positive numbers
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];

//     if (num > 0 && unique.indexOf(num) === -1) {
//       unique.push(num);
//     }
//   }

//   // Step 2: check digit sum even
//   for (let i = 0; i < unique.length; i++) {
//     let n = unique[i];
//     let sum = 0;
//     let temp = n;

//     while (temp > 0) {
//       sum += temp % 10;
//       temp = Math.floor(temp / 10);
//     }

//     if (sum % 2 === 0) {
//       if (smallest === null || n < smallest) {
//         smallest = n;
//       }
//     }
//   }

//   return smallest === null ? "Not Found" : smallest;
// }

// // Example
// let numbers = [12, -4, 22, 15, 12, 8, 33, 44];
// console.log(findSmallestEvenDigitSum(numbers)); // 22



// function longestConsecutive(nums) {
//   if (nums.length === 0) return 0;

//   const set = new Set(nums);
//   let longest = 0;

//   for (let num of set) {
//     // Only start counting if it's the beginning of a sequence
//     if (!set.has(num - 1)) {
//       let currentNum = num;
//       let count = 1;

//       while (set.has(currentNum + 1)) {
//         currentNum++;
//         count++;
//       }

//       longest = Math.max(longest, count);
//     }
//   }

//   return longest;
// }


// let numarr = [100, 4, 200, 1, 3, 2];
// longestConsecutive(numarr)

// Input:  [100, 4, 200, 1, 3, 2]
// Output: 4
// // Explanation: The longest consecutive sequence is [1, 2, 3, 4]




function longestUniqueSubstring(s) {
    let map = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            left = map.get(s[right]) + 1;
        }

        map.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Test
console.log(longestUniqueSubstring("abcabcbb")); // 3
console.log(longestUniqueSubstring("pwwkew"));    // 3
console.log(longestUniqueSubstring("bbbbb"));     // 1



