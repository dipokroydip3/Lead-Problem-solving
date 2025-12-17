/**
 * Function to deep clone any object or array
 * @param {any} obj - The object to clone
 * @returns {any} - The deep cloned copy
 */
function deepClone(obj) {
  // 1. Check if the input is not an object or is null
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // 2. Create an initial structure (Array or Object)
  const clone = Array.isArray(obj) ? [] : {};

  // 3. Recursively copy each property
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clone[key] = deepClone(obj[key]); // Recurse for nested objects
    }
  }

  return clone;
}

// --- Example Usage ---
const developer = {
  name: "Rahat",
  skills: ["JavaScript", "React"],
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
};

const clonedDev = deepClone(developer);

// Changing the clone won't affect the original
clonedDev.address.city = "Chittagong";
clonedDev.skills.push("Node.js");

console.log("Original City:", developer.address.city); // Output: Dhaka
console.log("Cloned City:", clonedDev.address.city);   // Output: Chittagong