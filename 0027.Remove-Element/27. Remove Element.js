/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 * 思路1
 */
var removeElement = function (nums, val) {
  let i = 0
  for (const num of nums) {
    if (num !== val) {
      nums[i] = num
      i++
    }
  }
  return i
}

// 思路2
var removeElement1 = function (nums, val) {
  let lastIndex = nums.length
  for (let i = 0; i < lastIndex; ) {
    if (nums[i] === val) {
      nums[i] = nums[lastIndex - 1]
      lastIndex--
    } else {
      i++
    }
  }
  return lastIndex
}

console.log(removeElement([1, 2, 3, 4, 2, 3], 2)) // => 4
