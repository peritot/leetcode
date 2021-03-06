/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @l1aram {ListNode} l1
 * @l1aram {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let res = new ListNode(0);
  let cur = res;
  let carry = 0;
  while (l1 !== null || l2 !== null) {
    let a = l1 === null ? 0 : l1.val;
    let b = l2 === null ? 0 : l2.val;
    let sum = carry + a + b;
    if (sum >= 10) {
      sum = sum - 10;
      carry = 1;
    } else {
      carry = 0
    }

    cur.next = new ListNode(sum);
    cur = cur.next;

    if (l1 !== null) {
      l1 = l1.next
    }
    if (l2 !== null) {
      l2 = l2.next
    }
  }
  if (carry > 0) {
    cur.next = new ListNode(carry);
  }

  return res.next;
}
