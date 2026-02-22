const students = [
  { id: 1, name: "Rahim", marks: 85 },
  { id: 2, name: "Karim", marks: 42 },
  { id: 3, name: "Salam", marks: 73 },
  { id: 4, name: "Jamal", marks: 30 },
  { id: 5, name: "Nayeem", marks: 90 }
];

// 1️⃣ marks 50 এর কম
// const failedStudents = students.filter(student => student.marks < 50);

// console.log("Failed Students:", failedStudents);

const faliedStudents = students.filter(student => student.marks < 50);
console.log("Failed Students:", faliedStudents);



// 2️⃣ marks 50 বা বেশি হলে শুধু নাম
// const passedStudentNames = students
//   .filter(student => student.marks >= 50)
//   .map(student => student.name);

// console.log("Passed Student Names:", passedStudentNames);


const passedStudentNames = students.filter(student => student.marks >= 50)
.map(student => student.name);
console.log("Passed Student Names:", passedStudentNames);



// 3️⃣ Average marks
// const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
// const average = totalMarks / students.length;

// console.log("Average Marks:", average);


const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
const average = totalMarks / students.length;

console.log("Average Marks:", average);
