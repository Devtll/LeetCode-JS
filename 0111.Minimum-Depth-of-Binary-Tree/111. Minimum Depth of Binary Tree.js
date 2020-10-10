/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0

  if (root.left === null && root.right === null) {
    return 1
  }

  let minDepth = Infinity
  if (root.left !== null) {
    minDepth = Math.min(minDepth(root.left), minDepth)
  }
  if (root.right !== null) {
    minDepth = Math.min(minDepth(root.right), minDepth)
  }
  return minDepth + 1
}
