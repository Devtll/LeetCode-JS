/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (head === null) return null
  let newHead = new ListNode(0)
  let tail = newHead
  while (head !== null) {
    if (head.val !== val) {
      tail = tail.next = head
    }
    head = head.next
  }
  tail.next = null
  return newHead.next
}
