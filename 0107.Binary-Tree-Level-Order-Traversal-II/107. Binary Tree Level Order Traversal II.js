/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (root === null || root.length === 0) return []
  let res = []
  let queue = []
  queue.push(root)
  while (queue.length > 0) {
    const n = queue.length
    let arr = []
    for (let i = 0; i < n; i++) {
      const tmp = queue.shift()
      arr.push(tmp.val)
      if (tmp.left) {
        queue.push(tmp.left)
      }
      if (tmp.right) {
        queue.push(tmp.right)
      }
    }
    res.push(arr)
  }
  return res.reverse()
}
