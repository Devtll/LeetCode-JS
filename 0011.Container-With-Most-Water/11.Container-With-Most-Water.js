/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0
  let maxWater = 0
  let r = height.length - 1
  while (l < r) {
    if (height[l] <= height[r]) {
      maxWater = Math.max(maxWater, height[l] * (r - l))
      l++
    } else {
      maxWater = Math.max(maxWater, height[r] * (r - l))
      r--
    }
  }

  return maxWater
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // => 49
