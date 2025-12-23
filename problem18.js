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




const employees = [
  { name: "Rahim", department: "IT", salary: 50000 },
  { name: "Karim", department: "HR", salary: 30000 },
  { name: "Sajib", department: "IT", salary: 70000 },
  { name: "Nadia", department: "HR", salary: 40000 },
  { name: "Hasan", department: "Finance", salary: 60000 }
];


const departmentSalary = employees.reduce((acc, emp) => {
  if (!acc[emp.department]) {
    acc[emp.department] = 0;
  }

  acc[emp.department] += emp.salary;

  return acc;
}, {});

console.log(departmentSalary);








