/**
 * @param {number[]} prices
 * @return {number}
 */

/**一次遍历 */
var maxProfit = function (prices) {
  let minPrice = Number.MAX_VALUE
  let maxDp = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]
    } else if (prices[i] - minPrice > maxDp) {
      maxDp = prices[i] - minPrice
    }
  }
  return maxDp
}

/** 暴力解法 */
var maxProfit1 = function (prices) {
  let maxValue = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const diff = prices[j] - prices[i]
      if (diff > maxValue) {
        maxValue = diff
      }
    }
  }
  return maxValue
}
