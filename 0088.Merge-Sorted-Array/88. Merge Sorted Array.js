/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // nums1数组左边index
  let l = m - 1
  // nums1数组右边index
  let r = nums1.length - 1
  // nums2 最右边index
  let i = n - 1
  while (i >= 0) {
    if (l >= 0 && nums1[l] > nums2[i]) {
      nums1[r--] = nums1[l--]
    } else {
      nums1[r--] = nums2[i--]
    }
  }
}
