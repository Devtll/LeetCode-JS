/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  let result = []
  if (nums.length < 4) return result
  nums.sort((a, b) => a - b)
  let lastIndex = nums.length - 4
  for (let i = 0; i <= lastIndex; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j <= nums.length - 3; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      let l = j + 1
      let r = nums.length - 1
      const diff = target - nums[i]
      while (l < r) {
        let lfSum = nums[j] + nums[l] + nums[r]
        if (diff === lfSum) {
          // 找到匹配的元素，添加到数组里
          result.push([nums[i], nums[j], nums[l], nums[r]])
          // 去重
          while (l < r && nums[l] === nums[l + 1]) l++
          while (l < r && nums[r] === nums[r - 1]) r--
          l++
          r--
        } else if (lfSum < diff) {
          // 数组已经排过序，右边的数更大，所以当 lfSum 小于 diff 时 lIndex 需要++
          l++
        } else {
          // 数组已经排过序，左边的数更小，所以当 lfSum 大于 diff 时 rIndex 需要--
          r--
        }
      }
    }
  }
  return result
}

console.log(fourSum([1, 0, -1, 0, -2, 2], 0)) // => [ [ -2, -1, 1, 2 ], [ -2, 0, 0, 2 ], [ -1, 0, 0, 1 ] ]
