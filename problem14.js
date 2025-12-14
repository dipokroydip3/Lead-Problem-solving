function longestConsecutive(nums) {
    // Step 1: Create a Set to remove duplicates and allow O(1) lookup
    const numSet = new Set(nums);

    let longest = 0;

    // Step 2: Loop through each number
    for (let num of numSet) {

        // Step 3: Check if it is the start of a sequence
        if (!numSet.has(num - 1)) {

            let currentNum = num;
            let count = 1;

            // Step 4: Count consecutive numbers
            while (numSet.has(currentNum + 1)) {
                currentNum++;
                count++;
            }

            // Step 5: Update longest length
            longest = Math.max(longest, count);
        }
    }

    return longest;
}

// 🔹 Test case
const arr = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(arr)); // Output: 4
