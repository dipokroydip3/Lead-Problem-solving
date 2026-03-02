// const events = [9, 8, 7, 2, 12, 23, 4];

// const findEven = [];

// for(let i = 0; i < events.length; i++) {
//      if(events[i] % 2 === 0)
//           findEven.push(events[i]);
// }

// let sum = 0;

// for(let i = 0; i < findEven.length; i++){
//      sum += findEven[i];
// }

// console.log(findEven);
// console.log("Total even sum =", sum);


// const students = [
//   { name: "Rahim", marks: 80 },
//   { name: "Karim", marks: 35 },
//   { name: "Salam", marks: 50 },
//   { name: "Jamal", marks: 20 }
// ];

// // 1. Passed Students
// const passedStudents = students.filter(student => student.marks > 40);

// // 2. Add Status
// const updatedStudents = students.map(student => ({
//   ...student,
//   status: student.marks > 40 ? "Passed" : "Failed"
// }));

// // 3. Average Marks
// const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
// const average = totalMarks / students.length;

// console.log(passedStudents);
// console.log(updatedStudents);
// console.log("Average:", average);


// var twoSum = function(nums, target) {
//     const map = {};

//     for(let i = 0; i < nums.length; i++){
//         const complement = target - nums[i];

//         if(map[complement] !== undefined){
//             return [map[complement], i];
//         }

//         map[nums[i]] = i;
//     }
// };

// const nums = [2,7,11,15];
// const target = 9;

// const result = twoSum(nums, target);
// console.log(result);


var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";

    let prefix = strs[0];

    for(let i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if(prefix === "") return "";
        }
    }

    return prefix;
};

const strs = ["flower","flow","flight"];
const needOut = ["fl"];
console.log(strs.length);




