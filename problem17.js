const numbers = [12, 5, 8, 20, 3, 15];

// 1. Largest number
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

// 2. Smallest number
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i];
    }
}

// 3. Sum of all numbers
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// 4. Even numbers array
let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}

console.log("Max:", max);
console.log("Min:", min);
console.log("Sum:", sum);
console.log("Even Numbers:", evenNumbers);
