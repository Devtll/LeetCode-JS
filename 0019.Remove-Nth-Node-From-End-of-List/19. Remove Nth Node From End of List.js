/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // 创建虚拟头节点
  let dummyHead = new ListNode(0)
  dummyHead.next = head
  //  慢指针
  let slow = dummyHead
  // 快指针
  let fast = dummyHead
  while (n != 0) {
    // 先让快指针指向第 n 个节点
    fast = fast.next
    n--
  }
  while (fast.next !== null) {
    slow = slow.next
    fast = fast.next
  }
  // 这时候慢指针的下一个节点就是要删除的节点
  slow.next = slow.next.next
  return dummyHead.next
}
