// Problem: Find the Longest Word in a Sentence

// Given a sentence (string), return the longest word.
// If two words have the same length, return the first one.

// Example

// Input:
// "I am learning JavaScript programming"

// Output:
// "JavaScript"
// (because it has 10 letters)




function longestWord(sentence) {
    const words = sentence.split(" ");  // split by space
    let longest = "";

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

console.log(longestWord("I am learning JavaScript programming"));

// solve the problem using reduce 


function longestWord(sentence) {
    return sentence
        .split(" ")
        .reduce((longest, current) =>
            current.length > longest.length ? current : longest
        , "");
}

console.log(longestWord("I am learning JavaScript programming"));

