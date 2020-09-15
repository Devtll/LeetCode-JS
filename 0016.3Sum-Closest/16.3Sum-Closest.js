/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let lastIndex = nums.length - 3
  let res = nums[0] + nums[1] + nums[2]
  for (let i = 0; i <= lastIndex; i++) {
    // 去重
    if (i > 0 && nums[i - 1] === nums[i]) continue
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r]
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }
      if (sum === target) {
        return sum
      } else if (sum > target) {
        // 去重
        while (l < r && nums[r] === nums[r - 1]) r--
        r--
      } else {
        // 去重
        while (l < r && nums[l] === nums[l + 1]) l++
        l++
      }
    }
  }
  return res
}

console.log(threeSumClosest([1, 1, -1, -1, 3], -1)) // => -1
