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


const students = [
  { name: "Rahim", marks: 80 },
  { name: "Karim", marks: 35 },
  { name: "Salam", marks: 50 },
  { name: "Jamal", marks: 20 }
];

// 1. Passed Students
const passedStudents = students.filter(student => student.marks > 40);

// 2. Add Status
const updatedStudents = students.map(student => ({
  ...student,
  status: student.marks > 40 ? "Passed" : "Failed"
}));

// 3. Average Marks
const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const average = totalMarks / students.length;

console.log(passedStudents);
console.log(updatedStudents);
console.log("Average:", average);

