/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 迭代解法。
 */
var invertTree = function (root) {
  if (root === null) return root
  let queue = []
  queue.push(root)
  while (queue.length > 0) {
    let tmp = queue.pop()
    let left = tmp.left
    tmp.left = tmp.right
    tmp.right = left
    if (tmp.left) {
      queue.push(tmp.left)
    }
    if (tmp.right) {
      queue.push(tmp.right)
    }
  }
  return root
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * 递归解法
 */
var invertTree1 = function (root) {
  if (root === null) return root
  let tmp = root.right
  root.right = root.left
  root.left = tmp
  invertTree(root.left)
  invertTree(root.right)
  return root
}
