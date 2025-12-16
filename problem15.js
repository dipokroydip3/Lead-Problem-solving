const users = {
  UserA: {
    orders: [
      { amount: 5000, status: "completed" },
      { amount: 3000, status: "pending" },
      { amount: 4000, status: "completed" }
    ]
  },
  UserB: {
    orders: [
      { amount: 7000, status: "completed" },
      { amount: 4000, status: "completed" }
    ]
  },
  UserC: {
    orders: [
      { amount: 2000, status: "completed" },
      { amount: 1500, status: "completed" }
    ]
  }
};







function getQualifiedUsers(users) {
  const result = {};

  for (const user in users) {
    const orders = users[user].orders;

    // Step 1: filter completed orders
    const completedOrders = orders.filter(
      order => order.status === "completed"
    );

    // Step 2: calculate total amount
    const totalAmount = completedOrders.reduce(
      (sum, order) => sum + order.amount,
      0
    );

    // Step 3: apply conditions
    if (completedOrders.length >= 2 && totalAmount >= 9000) {
      result[user] = totalAmount;
    }
  }

  return result;
}

console.log(getQualifiedUsers(users));
