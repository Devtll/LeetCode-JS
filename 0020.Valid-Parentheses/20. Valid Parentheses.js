/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i)
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c)
    } else {
      if (stack.length === 0) return false
      let p = stack.pop()
      if (p === "{" && c !== "}") return false
      if (p === "[" && c !== "]") return false
      if (p === "(" && c !== ")") return false
    }
  }
  return stack.length === 0
}
