/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0)
  let curr = dummyHead
  let carry = 0
  while (l1 !== null || l2 !== null) {
    const nextVal1 = l1 !== null ? l1.val : 0
    const nextVal2 = l2 !== null ? l2.val : 0
    let sum = nextVal1 + nextVal2 + carry
    const v = sum % 10
    carry = Math.floor(sum / 10)
    curr.next = new ListNode(v)
    curr = curr.next
    if (l1 !== null) l1 = l1.next
    if (l2 !== null) l2 = l2.next
  }
  if (carry > 0) {
    curr.next = new ListNode(carry)
  }

  return dummyHead.next
}

var l1 = new ListNode(5)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)
l1.next.next.next = new ListNode(9)

var l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(4)

console.log(addTwoNumbers(l1, l2))
