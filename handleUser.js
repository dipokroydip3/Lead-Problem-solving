function manageUsers(events) {
    const activeUsers = new Map();
    const loginCount = new Map();

    for (let event of events) {
        const { type, userId, time } = event;

        if (type === "login") {
            // count total logins
            loginCount.set(userId, (loginCount.get(userId) || 0) + 1);

            // auto logout previous session
            activeUsers.set(userId, {
                lastActive: time,
                status: "active"
            });
        }

        if (type === "logout") {
            activeUsers.delete(userId);
        }
    }

    return {
        activeUsers: [...activeUsers.entries()],
        totalLoginCount: [...loginCount.entries()]
    };
}


console.log(manageUsers([
  { type: "login", userId: 101, time: 1 },
  { type: "login", userId: 102, time: 2 },
  { type: "login", userId: 101, time: 3 },
  { type: "logout", userId: 102, time: 4 },
  { type: "login", userId: 103, time: 5 }
]));