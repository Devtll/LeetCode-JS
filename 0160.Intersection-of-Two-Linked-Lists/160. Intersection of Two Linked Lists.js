/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null
  while (headA !== headB) {
    headA = headA === null ? headB : headA.next
    headB = headB === null ? headA : headB.next
  }
  return headA
}
