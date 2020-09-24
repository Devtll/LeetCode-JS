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
var isPalindrome = function (head) {
  if (head === null || head.next === null) return true
  let slow = head
  let fast = head
  // 找到中心节点
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  // 此时slow就是中心节点
  slow = reverse(slow.next)
  // 和反转后的链表进行对比
  while (slow !== null) {
    if (head.val !== slow.val) {
      return false
    }
    head = head.next
    slow = slow.next
  }
  return true
}

// 递归反转链表
var reverse = function (head) {
  if (head.next === null) {
    return head
  }
  let newHead = reverse(head.next)
  head.next.next = head
  head.next = null
  return newHead
}
