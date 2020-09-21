/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0
  let maxLength = 0
  let map = new Map()
  // 如果遇到重复元素，就记录左边重复元素位置
  let left = 0
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      //包含重复元素，记录左边元素位置, i 是从0开始的，需要加1
      left = Math.max(left, map.get(s[i]) + 1)
    }
    map.set(s[i], i)
    maxLength = Math.max(maxLength, i - left + 1)
  }

  return maxLength
}

console.log(lengthOfLongestSubstring("abcdafg"))
