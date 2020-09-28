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
var levelOrder = function (root) {
  if (root === null || root.length === 0) return []
  let res = []
  let queue = []
  queue.push(root)
  while (queue.length > 0) {
    const n = queue.length
    let level = []
    for (let i = 0; i < n; i++) {
      let node = queue.shift()
      level.push(node.val)
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    res.push(level)
  }
  return res
}
