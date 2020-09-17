/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let l = 0
  let r = height.length - 1
  let maxLower = 0
  let water = 0
  while (l < r) {
    let lower = height[height[l] <= height[r] ? l++ : r--]
    maxLower = Math.max(maxLower, lower)
    water += maxLower - lower
  }
  return water
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // => 6
