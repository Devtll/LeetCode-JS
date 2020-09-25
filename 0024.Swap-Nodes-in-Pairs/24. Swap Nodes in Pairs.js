/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 迭代解法
 */
var swapPairs = function (head) {
  let dummyHead = new ListNode(-1)
  dummyHead.next = head
  let prev = dummyHead
  while (head !== null && head.next !== null) {
    let firstNode = head
    let secondNode = head.next

    prev.next = secondNode
    firstNode.next = secondNode.next
    secondNode.next = firstNode

    prev = firstNode
    head = firstNode.next
  }
  return dummyHead.next
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 递归解法
 */
var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head
  }
  let firstNode = head
  let secondNode = head.next
  firstNode.next = swapPairs(secondNode.next)
  secondNode.next = firstNode

  return secondNode
}
