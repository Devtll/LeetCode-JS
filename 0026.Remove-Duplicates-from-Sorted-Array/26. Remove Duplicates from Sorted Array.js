/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 2) return nums.length
  let i = 0
  let j = 1
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
    }
    j++
  }
  return i + 1
}

console.log(removeDuplicates([1, 2, 3, 4])) // => 4
