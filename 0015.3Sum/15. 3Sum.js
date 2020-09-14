/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = []
  if (nums.length < 3) return result
  // 先对整个数组排序 [-4, -1, -1, 0, 1, 2 ]
  nums.sort((a, b) => a - b)
  const lastIndex = nums.length - 3
  const r = nums.length - 1
  for (let i = 0; i <= lastIndex; i++) {
    // 去重
    if (i > 0 && nums[i - 1] === nums[i]) continue
    let lIndex = i + 1
    let rIndex = r
    const diff = -nums[i]
    while (lIndex < rIndex) {
      let lfSum = nums[lIndex] + nums[rIndex]
      if (diff === lfSum) {
        // 找到匹配的元素，添加到数组里
        result.push([nums[i], nums[lIndex], nums[rIndex]])
        // 去重
        while (lIndex < rIndex && nums[lIndex] === nums[lIndex + 1]) lIndex++
        while (lIndex < rIndex && nums[rIndex] === nums[rIndex - 1]) rIndex--
        // 已经找到，往中间靠
        lIndex++
        rIndex--
      } else if (lfSum < diff) {
        // 数组已经排过序，右边的数更大，所以当 lfSum 小于 diff 时 lIndex 需要++
        lIndex++
      } else {
        // 数组已经排过序，左边的数更小，所以当 lfSum 大于 diff 时 rIndex 需要--
        rIndex--
      }
    }
  }
  return result
}

console.log(threeSum([-4, -1, -1, 0, 1, 2])) // => [[-1,-1,2],[-1,0,1]]
