// function manageUsers(events) {
//     const activeUsers = new Map();
//     const loginCount = new Map();

//     for (let event of events) {
//         const { type, userId, time } = event;

//         if (type === "login") {
//             // count total logins
//             loginCount.set(userId, (loginCount.get(userId) || 0) + 1);

//             // auto logout previous session
//             activeUsers.set(userId, {
//                 lastActive: time,
//                 status: "active"
//             });
//         }

//         if (type === "logout") {
//             activeUsers.delete(userId);
//         }
//     }

//     return {
//         activeUsers: [...activeUsers.entries()],
//         totalLoginCount: [...loginCount.entries()]
//     };
// }


// console.log(manageUsers([
//   { type: "login", userId: 101, time: 1 },
//   { type: "login", userId: 102, time: 2 },
//   { type: "login", userId: 101, time: 3 },
//   { type: "logout", userId: 102, time: 4 },
//   { type: "login", userId: 103, time: 5 }
// ]));




// const users = [
//   { email: "john@example.com", password: "123456", isActive: true, loginAttempts: 0, role: "user" },
//   { email: "jane@example.com", password: "abcdef", isActive: false, loginAttempts: 0, role: "admin" },
//   { email: "admin@example.com", password: "admin123", isActive: true, loginAttempts: 0, role: "superadmin" }
// ];


// function loginUser(email, password) {
//   // Find user (case-insensitive)
//   const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

//   if (!user) {
//     return "User not found";
//   }

//   // Check if account is locked
//   if (user.loginAttempts >= 3) {
//     return "Account locked";
//   }

//   // Check password
//   if (user.password !== password) {
//     user.loginAttempts++; // increment failed attempt
//     return "Incorrect password";
//   }

//   // Check if activeJ
//   if (!user.isActive) {
//     return "Account inactive";
//   }

//   // Reset login attempts on successful login
//   user.loginAttempts = 0;

//   // Special case for superadmin
//   if (user.role === "superadmin") {
//     return "Superadmin logged in";
//   }

//   return "Login successful";
// }



// console.log(loginUser("John@Example.com", "123456"));





// function validateLogin(user) {
//   const { username, password } = user;

//   // Username check
//   if (!username || username.length < 6) {
//     return "Invalid Login";
//   }

//   // Password rules
//   const hasUpperCase = /[A-Z]/.test(password);
//   const hasLowerCase = /[a-z]/.test(password);
//   const hasNumber = /[0-9]/.test(password);
//   const hasSpecialChar = /[@#$!]/.test(password);
//   const isLongEnough = password.length >= 8;

//   if (
//     isLongEnough &&
//     hasUpperCase &&
//     hasLowerCase &&
//     hasNumber &&
//     hasSpecialChar
//   ) {
//     return "Valid Login";
//   }

//   return "Invalid Login";
// }

// // Test
// console.log(validateLogin({
//   username: "dipok123",
//   password: "Dipok#2026"
// }));



function twoSum(nums, target) {
  const map = {}; // number -> index store করবে

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // যদি complement আগে থেকেই map এ থাকে
    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    // না থাকলে current number map এ রাখো
    map[nums[i]] = i;
  }
}
