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





// function findDuplicates(arr) {
//     let freq = {};
//     let duplicates = {};

//     // frequency count
//     for (let index in arr) {
//         let value = arr[index];
//         freq[value] = (freq[value] || 0) + 1;
//     }

//     // filter duplicates
//     for (let key in freq) {
//         if (freq[key] > 1) {
//             duplicates[key] = freq[key];
//         }
//     }

//     return duplicates;
// }

// // Test
// console.log(findDuplicates([2, 3, 4, 2, 5, 3, 6, 3]));




// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
// };

// console.log();


// nums = [2, 7, 11, 15]
// target = 9

// const result = twoSum(nums, target)

// console.log( result);






// function largestSalary (maxSalary, target) {
//     for (let i = 0; i < maxSalary.length; i++){

//         if(maxSalary[i] === target){
//             return("Found the number"  + i);
//         }
        
//     }

// }


// let salary = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let target = 100;
// console.log(largestSalary(salary, target));




// const employees = [
//   { name: "Rahim", department: "IT", salary: 50000 },
//   { name: "Karim", department: "HR", salary: 30000 },
//   { name: "Sajib", department: "IT", salary: 70000 },
//   { name: "Nadia", department: "HR", salary: 40000 },
//   { name: "Hasan", department: "Finance", salary: 60000 }
// ];


// const departmentSalary = employees.reduce((acc, emp) => {
//   if (!acc[emp.department]) {
//     acc[emp.department] = 0;
//   }

//   acc[emp.department] += emp.salary;

//   return acc;
// }, {});

// console.log(departmentSalary);



// const manHead = {
//   head : "hire",
//   nose : ""
// }

// let arr = [3, 1, 2, 3, 4, 3, 2, 1, 3];

// let freq = {};
// let maxCount = 0;
// let result = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   freq[arr[i]] = (freq[arr[i]] || 0) + 1;

//   if (freq[arr[i]] > maxCount) {
//     maxCount = freq[arr[i]];
//     result = arr[i];
//   }
// }

// console.log(result); // 3




// const students = [
//   { name: "Rahim", marks: 45 },
//   { name: "Karim", marks: 78 },
//   { name: "Dipok", marks: 62 },
//   { name: "Sumon", marks: 90 },
//   { name: "Rafi", marks: 55 }
// ];


// let total = 0;

// for (const student of students) {
//   if (student.marks >= 60) {
//     total += student.marks * student.marks;
//   }
// }

// console.log(total);



function longestEqualZeroOne(arr) {
    let map = new Map();
    let sum = 0;
    let maxLength = 0;

    // Handle case where subarray starts from index 0
    map.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] === 0 ? -1 : 1;

        if (map.has(sum)) {
            maxLength = Math.max(maxLength, i - map.get(sum));
        } else {
            map.set(sum, i);
        }
    }

    return maxLength;
}

// Example
console.log(longestEqualZeroOne([0, 1, 0, 1, 1, 0, 0])); // 6









