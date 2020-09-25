/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) return false
  let slow = head
  let fast = head.next
  while (fast !== null) {
    if (false === slow) return true
    fast = fast.next
    slow = slow.next
  }
  return false
}
