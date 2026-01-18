// function getMaxProfit(prices, k) {
//   const n = prices.length;
//   if (!n || !k) return 0;

//   if (k >= n / 2) 
//     return prices.slice(1).reduce((p, price, i) => p + Math.max(0, price - prices[i]), 0);

//   const dp = Array.from({ length: k + 1 }, () => Array(n).fill(0));
//   for (let t = 1; t <= k; t++) {
//     let maxDiff = -prices[0];
//     for (let i = 1; i < n; i++) {
//       dp[t][i] = Math.max(dp[t][i - 1], prices[i] + maxDiff);
//       maxDiff = Math.max(maxDiff, dp[t - 1][i] - prices[i]);
//     }
//   }
//   return dp[k][n - 1];
// }



// function checkEvenOdd(num) {
//   if (num % 2 === 0) {
//     console.log("Even");
//   } else {
//     console.log("Odd");
//   }
// }

// // Test
// checkEvenOdd(4);
// checkEvenOdd(7);



// function isMagicNumber(n, sum = 0, product = 1) {
//   if (n === 0) {
//     return sum === product;
//   }

//   let digit = n % 10;
//   return isMagicNumber(
//     Math.floor(n / 10),
//     sum + digit,
//     product * digit
//   );
// }

// console.log(isMagicNumber(123)); // true
// console.log(isMagicNumber(124)); // false





// function longestConsecutive(arr) {
//     let maxLength = 0;

//     for (let i = 0; i < arr.length; i++) {

//         // check if this is starting number
//         if (!arr.includes(arr[i] - 1)) {

//             let currentNum = arr[i];
//             let count = 1;

//             // count consecutive numbers
//             while (arr.includes(currentNum + 1)) {
//                 currentNum++;
//                 count++;
//             }

//             // update maximum length
//             if (count > maxLength) {
//                 maxLength = count;
//             }
//         }
//     }

//     return maxLength;
// }

// // Test cases
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); 
// console.log(longestConsecutive([10, 5, 12, 3, 55, 30, 4, 11, 2]));


