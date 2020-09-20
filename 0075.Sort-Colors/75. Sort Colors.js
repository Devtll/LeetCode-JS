/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let l = (curr = 0)
  let r = nums.length - 1
  while (curr <= r) {
    if (nums[curr] === 1) {
      curr++
    } else if (nums[curr] === 2) {
      let tmp = nums[curr]
      nums[curr] = nums[r]
      nums[r--] = tmp
    } else {
      let tmp = nums[curr]
      nums[curr++] = nums[l]
      nums[l++] = tmp
    }
  }
}

console.log(sortColors([2, 0, 2, 1, 1, 0]))
