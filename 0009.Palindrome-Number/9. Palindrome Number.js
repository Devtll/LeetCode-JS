/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false
  if (x < 10) return true
  let s = String(x)
  const mid = s.length / 2
  for (let i = 0; i <= mid; i++) {
    // 判断首尾的数是否相同
    if (s[i] !== s[s.length - 1 - i]) {
      return false
    }
  }
  return true
}
