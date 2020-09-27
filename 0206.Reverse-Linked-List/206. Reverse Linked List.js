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
 * 递归实现
 */
var reverseList = function (head) {
  if (head === null || head.next === null) return head
  let newHead = reverseList(head.next)
  head.next.next = head
  head.next = null

  return newHead
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 迭代实现
 */
var reverseList1 = function (head) {
  let p1 = head
  let p2 = null
  while (p1) {
    const tmp = p1.next
    p1.next = p2
    p2 = p1
    p1 = tmp
  }
  return p2
}

function ListNode(val) {
  this.val = val
  this.next = null
}

var l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(3)
l1.next.next.next = new ListNode(4)
l1.next.next.next.next = new ListNode(5)

console.log(reverseList(l1))
