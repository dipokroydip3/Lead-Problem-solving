function getMaxProfit(prices, k) {
  const n = prices.length;
  if (!n || !k) return 0;

  if (k >= n / 2) 
    return prices.slice(1).reduce((p, price, i) => p + Math.max(0, price - prices[i]), 0);

  const dp = Array.from({ length: k + 1 }, () => Array(n).fill(0));
  for (let t = 1; t <= k; t++) {
    let maxDiff = -prices[0];
    for (let i = 1; i < n; i++) {
      dp[t][i] = Math.max(dp[t][i - 1], prices[i] + maxDiff);
      maxDiff = Math.max(maxDiff, dp[t - 1][i] - prices[i]);
    }
  }
  return dp[k][n - 1];
}

