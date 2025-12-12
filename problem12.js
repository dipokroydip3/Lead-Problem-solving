// function dayName(number) {
//     switch (number) {
//         case 1:
//             return "Sunday";
//         case 2:
//             return "Monday";
//         case 3:
//             return "Tuesday";
//         case 4:
//             return "Wednesday";
//         case 5:
//             return "Thursday";
//         case 6:
//             return "Friday";
//         case 7:
//             return "Saturday";
//         default:
//             return "Invalid day";
//     }
// }

// // Example:
// console.log(dayName(3)); 
// console.log(dayName(9)); 



function checkVowel(letter) {
    switch (letter.toLowerCase()) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            return "Vowel";
        default:
            return "Consonant";
    }
}

console.log(checkVowel("a"));
console.log(checkVowel("b")); 

