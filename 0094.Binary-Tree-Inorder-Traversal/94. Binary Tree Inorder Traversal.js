/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */ 迭代解法
var inorderTraversal = function (root) {
  let res = []
  let stack = []
  while (stack.length || root) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }
  return res
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */ 递归解法
var inorderTraversal1 = function (root) {
  let res = []
  const inorder = (root) => {
    if (!root) return
    inorder(root.left)
    res.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  return res
}
